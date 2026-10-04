/**
 * Tiny in-process TTL cache for server-side page data.
 *
 * The homepage is server-rendered per request (the custom App has
 * getInitialProps, so the SSR language detection keeps working). Its marketing
 * data — the paying-schools JSON on the CDN and the Sanity testimonials —
 * changes a few times a day, so a warm server instance keeps one copy in
 * memory instead of refetching for every visitor.
 *
 * If a refresh fails, the last good value keeps being served; only a cold
 * instance with no value yet falls through to the caller's fallback.
 */
type Entry = { value: unknown; expiresAt: number };

const entries = new Map<string, Entry>();
const inflight = new Map<string, Promise<unknown>>();

export async function memoize<T>(
  key: string,
  ttlMs: number,
  loader: () => Promise<T>,
): Promise<T> {
  const cached = entries.get(key);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.value as T;
  }

  const pending = inflight.get(key);
  if (pending) {
    return pending as Promise<T>;
  }

  const request = loader()
    .then((value) => {
      entries.set(key, { value, expiresAt: Date.now() + ttlMs });
      return value;
    })
    .catch((error) => {
      if (cached) {
        console.error(`memoize(${key}): refresh failed, serving stale`, error);
        return cached.value as T;
      }
      throw error;
    })
    .finally(() => {
      inflight.delete(key);
    });

  inflight.set(key, request);
  return request;
}

/** Rejects if `promise` takes longer than `ms`, so slow upstreams can't stall SSR. */
export function withTimeout<T>(promise: Promise<T>, ms: number, label: string) {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`${label} timed out after ${ms}ms`)),
      ms,
    );
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
