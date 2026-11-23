/**
 * Pure maths for the homepage's count-up numbers (components/home/
 * UsageNumbers). Kept free of React and the DOM so it can be unit-tested with
 * `node --test`.
 */

/** How long the climb from zero to the real figure takes. */
export const COUNT_UP_MS = 2000;

/** Fast off the mark, then a long gentle landing on the last few digits. */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/**
 * The whole number to show `progress` (0 to 1) of the way through a count
 * from zero up to `target`. A `null` progress means the count is settled, so
 * the target itself is shown. The value only ever climbs and never passes the
 * target, so the widest thing it can render is the target.
 */
export function countUpValue(target: number, progress: number | null): number {
  if (!Number.isFinite(target) || target <= 0) return 0;
  const goal = Math.floor(target);
  if (progress === null || Number.isNaN(progress)) return goal;
  const t = Math.min(Math.max(progress, 0), 1);
  return Math.min(goal, Math.floor(goal * easeOutQuart(t)));
}
