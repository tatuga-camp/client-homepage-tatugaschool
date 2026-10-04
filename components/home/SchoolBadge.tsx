import Image from "next/image";
import { MdSchool } from "react-icons/md";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";
import type { PaidPlan, PayingSchool } from "../../utils/payingSchools";

/**
 * A paying school drawn as a staff ID badge, the clip colour (and for
 * Enterprise, the whole badge) telling you the plan. The legend under the
 * hero uses the same colours, so the decoration doubles as the key.
 */
export const planSwatch: Record<PaidPlan, string> = {
  ENTERPRISE: "bg-icon-color",
  PREMIUM: "bg-warning-color",
  BASIC: "bg-secondary-color",
};

const planStyle: Record<
  PaidPlan,
  { card: string; clip: string; meta: string; tag: string }
> = {
  ENTERPRISE: {
    card: "w-64 bg-icon-color text-white",
    clip: "bg-primary-color",
    meta: "text-white/70",
    tag: "bg-white/15 text-white",
  },
  PREMIUM: {
    card: "w-60 bg-white text-icon-color ring-1 ring-icon-color/10",
    clip: "bg-warning-color",
    meta: "text-icon-color/60",
    tag: "bg-warning-color/35 text-icon-color",
  },
  BASIC: {
    card: "w-56 bg-white text-icon-color ring-1 ring-icon-color/10",
    clip: "bg-secondary-color",
    meta: "text-icon-color/60",
    tag: "bg-secondary-color/15 text-primary-color",
  },
};

type Props = {
  school: PayingSchool;
  language: Language;
  className?: string;
};

function SchoolBadge({ school, language, className = "" }: Props) {
  const style = planStyle[school.plan];
  const place = school.city ?? school.country;

  return (
    <div
      className={`relative rounded-2xl p-4 pt-5 shadow-[0_18px_40px_-18px_rgba(56,55,103,0.45)] ${style.card} ${className}`}
    >
      {/* Badge clip */}
      <span
        aria-hidden="true"
        className={`absolute -top-2 left-1/2 flex h-4 w-11 -translate-x-1/2 items-center justify-center rounded-md ${style.clip}`}
      >
        <span className="h-1 w-6 rounded-full bg-white/80" />
      </span>

      <div className="flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-icon-color/10">
          {school.logo ? (
            <Image
              src={school.logo}
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1"
              placeholder={school.blurHash?.startsWith("data:") ? "blur" : "empty"}
              blurDataURL={
                school.blurHash?.startsWith("data:") ? school.blurHash : undefined
              }
            />
          ) : (
            <MdSchool
              aria-hidden="true"
              className="absolute inset-0 m-auto h-6 w-6 text-icon-color/50"
            />
          )}
        </div>
        <div className="min-w-0 text-left">
          <p className="line-clamp-2 text-sm font-semibold leading-snug">
            {school.name}
          </p>
          {place && (
            <p className={`mt-0.5 truncate text-xs ${style.meta}`}>{place}</p>
          )}
        </div>
      </div>
      <p className="mt-3 flex justify-end">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.tag}`}
        >
          {HomeDataLanguage.plan_badge(language, school.plan)}
        </span>
      </p>
    </div>
  );
}

export default SchoolBadge;
