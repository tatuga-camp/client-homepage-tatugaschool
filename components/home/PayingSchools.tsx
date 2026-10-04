import type { CSSProperties } from "react";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";
import {
  PAID_PLANS,
  type HeroSchools,
  type PayingSchool,
} from "../../utils/payingSchools";
import SchoolBadge, { planSwatch } from "./SchoolBadge";

/**
 * Where badges float around the hero headline on wide screens. The headline
 * column is at most 40rem wide, so side slots stay inside the outer ~20rem and
 * the top/bottom rows sit inside the hero's vertical padding. Slots are listed
 * in fill order — alternating sides — so a short list still looks balanced.
 */
const FLOAT_SLOTS = [
  { position: "left-6 top-[12%] 2xl:left-[6%]", tilt: "-rotate-3", duration: 7.5 },
  { position: "right-12 top-[42%] 2xl:right-[10%]", tilt: "-rotate-2", duration: 8.5 },
  { position: "left-[24%] top-6", tilt: "rotate-1", duration: 9 },
  { position: "right-[22%] bottom-6", tilt: "rotate-1", duration: 7 },
  { position: "left-12 top-[43%] 2xl:left-[10%]", tilt: "rotate-2", duration: 8 },
  { position: "right-6 top-[10%] 2xl:right-[6%]", tilt: "rotate-3", duration: 7.8 },
  { position: "left-6 top-[72%] 2xl:left-[5%]", tilt: "-rotate-2", duration: 9.5 },
  { position: "right-6 top-[71%] 2xl:right-[5%]", tilt: "rotate-2", duration: 8.2 },
  { position: "right-[24%] top-8", tilt: "-rotate-1", duration: 8.8 },
  { position: "left-[22%] bottom-6", tilt: "-rotate-1", duration: 7.2 },
] as const;

type Props = { hero: HeroSchools; language: Language };

/** Desktop (xl+): badges drifting around the headline. */
export function FloatingSchoolBadges({ hero, language }: Props) {
  const schools = hero.schools.slice(0, FLOAT_SLOTS.length);
  if (schools.length === 0) return null;

  return (
    <ul
      aria-label={HomeDataLanguage.paid_schools_list_label(language)}
      className="pointer-events-none absolute inset-0 hidden xl:block"
    >
      {schools.map((school, index) => {
        const slot = FLOAT_SLOTS[index];
        return (
          <li
            key={`${school.name}-${index}`}
            className={`group pointer-events-auto absolute ${slot.position} motion-safe:animate-badge-in`}
            style={{ animationDelay: `${200 + index * 90}ms` }}
          >
            <div
              className="motion-safe:animate-badge-float group-hover:[animation-play-state:paused]"
              style={{
                animationDuration: `${slot.duration}s`,
                // Negative delay: every badge starts mid-bob, out of step.
                animationDelay: `-${(index * 1.7) % slot.duration}s`,
              }}
            >
              <SchoolBadge
                school={school}
                language={language}
                className={`${slot.tilt} transition-transform duration-300 group-hover:rotate-0`}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function MarqueeRow({
  schools,
  language,
  reverse,
}: {
  schools: PayingSchool[];
  language: Language;
  reverse?: boolean;
}) {
  const style: CSSProperties = {
    animationDuration: `${Math.max(schools.length * 6, 24)}s`,
    animationDirection: reverse ? "reverse" : "normal",
  };
  const badges = (copy: "a" | "b") =>
    schools.map((school, index) => (
      <li
        key={`${copy}-${school.name}-${index}`}
        aria-hidden={copy === "b" ? true : undefined}
        className={`shrink-0 pt-2 ${copy === "b" ? "motion-reduce:hidden" : ""}`}
      >
        <SchoolBadge
          school={school}
          language={language}
          className={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
        />
      </li>
    ));

  return (
    <div className="group overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      <ul
        className="flex w-max gap-4 px-2 motion-safe:animate-marquee group-hover:[animation-play-state:paused]"
        style={style}
      >
        {badges("a")}
        {badges("b")}
      </ul>
    </div>
  );
}

/** Below xl: two rows sliding in opposite directions (static when motion is reduced). */
export function SchoolBadgeMarquee({ hero, language }: Props) {
  const { schools } = hero;
  if (schools.length === 0) return null;

  // Too few badges to loop convincingly: lay them out once, centred.
  if (schools.length < 6) {
    return (
      <ul
        aria-label={HomeDataLanguage.paid_schools_list_label(language)}
        className="flex flex-wrap justify-center gap-4 px-4 pt-2 xl:hidden"
      >
        {schools.map((school, index) => (
          <li key={`${school.name}-${index}`} className="pt-2">
            <SchoolBadge school={school} language={language} />
          </li>
        ))}
      </ul>
    );
  }

  const rowA = schools.filter((_, index) => index % 2 === 0);
  const rowB = schools.filter((_, index) => index % 2 === 1);

  return (
    <div
      role="group"
      aria-label={HomeDataLanguage.paid_schools_list_label(language)}
      className="flex flex-col gap-1 xl:hidden"
    >
      <MarqueeRow schools={rowA} language={language} />
      <MarqueeRow schools={rowB} language={language} reverse />
    </div>
  );
}

/** Live counts per plan, using the badge colours as the key. */
export function PlanLegend({ hero, language }: Props) {
  const plans = PAID_PLANS.filter((plan) => hero.counts[plan] > 0);
  if (plans.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-icon-color/70">
        {HomeDataLanguage.paid_schools_label(language)}
      </p>
      <ul className="flex flex-wrap justify-center gap-2">
        {plans.map((plan) => (
          <li
            key={plan}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-icon-color ring-1 ring-icon-color/10"
          >
            <span
              aria-hidden="true"
              className={`h-3 w-4 rounded-[3px] ${planSwatch[plan]}`}
            />
            {HomeDataLanguage.plan_count(language, plan, hero.counts[plan])}
          </li>
        ))}
      </ul>
    </div>
  );
}
