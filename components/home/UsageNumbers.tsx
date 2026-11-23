import { useEffect, useRef, useState, type RefObject } from "react";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";
import { COUNT_UP_MS, countUpValue } from "../../utils/countUp";
import type { UsageNumbers as Usage } from "../../utils/payingSchools";

const FIGURES = ["schools", "users", "students"] as const;

// Start once the top of the block is 15% of the viewport above the bottom edge:
// unlike a visible-area ratio, that is reachable on any viewport height.
const START_ROOT_MARGIN = "0px 0px -15% 0px";

const formatNumber = (value: number) => value.toLocaleString("en-US");

/**
 * The totals are counted in Bangkok, so the date is written in Bangkok time
 * for every visitor (which also keeps the server and browser render equal).
 * Thai dates come out in the Buddhist era, as Thai readers expect.
 */
function formatDate(iso: string, language: Language) {
  return new Intl.DateTimeFormat(language === "th" ? "th-TH" : "en-GB", {
    dateStyle: "long",
    timeZone: "Asia/Bangkok",
  }).format(new Date(iso));
}

/**
 * Drives one count-up shared by every figure, so they all land together.
 *
 * `null` is the settled state: the real figures. It is what the server
 * renders, so search engines and visitors without JavaScript read the real
 * numbers, and it is where visitors who ask for reduced motion stay. With
 * motion allowed, the figures stay real until the block scrolls into view;
 * only then do they restart from zero and climb once, so a figure never rests
 * below its real value (printing, captures and half-scrolled pages stay true).
 */
function useCountUp(ref: RefObject<HTMLElement>): number | null {
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setProgress(0);
        const startedAt = performance.now();
        const tick = (now: number) => {
          const elapsed = (now - startedAt) / COUNT_UP_MS;
          if (elapsed >= 1) {
            setProgress(null);
            return;
          }
          setProgress(elapsed);
          frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0, rootMargin: START_ROOT_MARGIN },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}

type Props = { usage: Usage; language: Language };

/**
 * Schools, teachers and students on Tatuga School, set like a sum in a
 * maths exercise book: figures right-aligned in one column, on ruled lines.
 */
export default function UsageNumbers({ usage, language }: Props) {
  const figuresRef = useRef<HTMLDListElement>(null);
  const progress = useCountUp(figuresRef);

  // Every figure gets the width of the longest one, so the column edge is
  // straight and nothing moves while the digits climb.
  const columnWidth = `${Math.max(
    ...FIGURES.map((figure) => formatNumber(usage.totals[figure]).length),
  )}ch`;

  return (
    <section className="border-y border-icon-color/10 bg-white">
      <div className="mx-auto grid max-w-5xl gap-x-16 gap-y-8 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-icon-color sm:text-4xl">
            {HomeDataLanguage.usage_heading(language)}
          </h2>
          {usage.updatedAt && (
            <p
              className="mt-3 leading-relaxed text-icon-color/70"
              suppressHydrationWarning
            >
              {HomeDataLanguage.usage_updated(
                language,
                formatDate(usage.updatedAt, language),
              )}
            </p>
          )}
        </div>

        <dl ref={figuresRef} className="md:min-w-[22rem]">
          {FIGURES.map((figure) => {
            const total = usage.totals[figure];
            return (
              <div
                key={figure}
                className="flex flex-row-reverse items-baseline justify-end gap-4 border-t border-icon-color/10 py-4 first:border-t-0 sm:gap-5 sm:py-5"
              >
                <dt className="text-lg text-icon-color/75 sm:text-xl">
                  {HomeDataLanguage.usage_label(language, figure)}
                </dt>
                <dd
                  className="shrink-0 text-right text-4xl font-bold leading-none tabular-nums text-icon-color sm:text-5xl lg:text-6xl"
                  style={{ minWidth: columnWidth }}
                >
                  {progress === null ? (
                    formatNumber(total)
                  ) : (
                    <>
                      {/* Screen readers get the real figure, not a passing one.
                          The running digits are painted from an attribute, since
                          generated content is not part of the element's text, so
                          scrapers and translators only ever read the real figure. */}
                      <span className="sr-only">{formatNumber(total)}</span>
                      <span
                        aria-hidden="true"
                        data-value={formatNumber(countUpValue(total, progress))}
                        className="before:content-[attr(data-value)]"
                      />
                    </>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
