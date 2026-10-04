import Image from "next/image";
import { MdPerson, MdStar } from "react-icons/md";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";
import type { Testimonial } from "../../services/testimonial";

function quoteOf(item: Testimonial, language: Language) {
  return language === "en" ? (item.quoteEn ?? item.quoteTh) : item.quoteTh;
}

function roleOf(item: Testimonial, language: Language) {
  const role = language === "en" ? (item.roleEn ?? item.roleTh) : item.roleTh;
  return [role, item.schoolName].filter(Boolean).join(", ");
}

function Rating({ value, language }: { value: number; language: Language }) {
  return (
    <p
      role="img"
      aria-label={HomeDataLanguage.rating_label(language, value)}
      className="flex gap-0.5 text-warning-color"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <MdStar
          key={index}
          aria-hidden="true"
          className={index < value ? "h-5 w-5" : "h-5 w-5 opacity-25"}
        />
      ))}
    </p>
  );
}

function Person({
  item,
  language,
  inverted,
}: {
  item: Testimonial;
  language: Language;
  inverted?: boolean;
}) {
  const role = roleOf(item, language);
  return (
    <figcaption className="flex items-center gap-3">
      <span
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full ${
          inverted ? "bg-white/15" : "bg-white ring-1 ring-icon-color/10"
        }`}
      >
        {item.photoUrl ? (
          <Image
            src={item.photoUrl}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        ) : (
          <MdPerson
            aria-hidden="true"
            className={`h-6 w-6 ${inverted ? "text-white/70" : "text-icon-color/40"}`}
          />
        )}
      </span>
      <span className="min-w-0">
        <span
          className={`block font-semibold ${inverted ? "text-white" : "text-icon-color"}`}
        >
          {item.name}
        </span>
        {role && (
          <span
            className={`block text-sm ${inverted ? "text-white/70" : "text-icon-color/60"}`}
          >
            {role}
          </span>
        )}
      </span>
    </figcaption>
  );
}

/**
 * Quotes from teachers, managed in Sanity. One lead quote is set large on the
 * brand indigo; the rest flow into columns. Renders nothing when there are no
 * published quotes yet.
 */
function Testimonials({
  items,
  language,
}: {
  items: Testimonial[];
  language: Language;
}) {
  if (items.length === 0) return null;
  const lead = items.find((item) => item.featured) ?? items[0];
  const rest = items.filter((item) => item !== lead);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight text-icon-color sm:text-4xl">
          {HomeDataLanguage.testimonials_heading(language)}
        </h2>

        <figure className="mt-12 flex flex-col gap-8 rounded-[2rem] bg-icon-color p-8 sm:p-12">
          {lead.rating && <Rating value={lead.rating} language={language} />}
          <blockquote className="max-w-4xl text-2xl font-medium leading-normal text-white sm:text-3xl sm:leading-normal">
            “{quoteOf(lead, language)}”
          </blockquote>
          <Person item={lead} language={language} inverted />
        </figure>

        {rest.length > 0 && (
          <div className="mt-6 gap-6 sm:columns-2 lg:columns-3">
            {rest.map((item) => (
              <figure
                key={item._id}
                className="mb-6 flex break-inside-avoid flex-col gap-5 rounded-3xl bg-background-color p-6 sm:p-7"
              >
                {item.rating && <Rating value={item.rating} language={language} />}
                <blockquote className="text-lg leading-relaxed text-icon-color">
                  “{quoteOf(item, language)}”
                </blockquote>
                <Person item={item} language={language} />
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
