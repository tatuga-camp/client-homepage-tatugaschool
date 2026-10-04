import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Language } from "../../interfaces";
import { HomeDataLanguage } from "../../data/languages/home";

type Feature = { title: string; description: string; image: string };

function getFeatures(language: Language): Feature[] {
  return [
    {
      title: HomeDataLanguage.features_rubric_title(language),
      description: HomeDataLanguage.features_rubric_desc(language),
      image: "/images/features/rubic.avif",
    },
    {
      title: HomeDataLanguage.features_line_title(language),
      description: HomeDataLanguage.features_line_desc(language),
      image: "/images/features/6.png",
    },
    {
      title: HomeDataLanguage.features_materials_title(language),
      description: HomeDataLanguage.features_materials_desc(language),
      image: "/images/features/5.png",
    },
    {
      title: HomeDataLanguage.features_predictive_title(language),
      description: HomeDataLanguage.features_predictive_desc(language),
      image: "/images/features/2.png",
    },
    {
      title: HomeDataLanguage.features_no_login_title(language),
      description: HomeDataLanguage.features_no_login_desc(language),
      image: "/images/features/3.png",
    },
    {
      title: HomeDataLanguage.features_storage_title(language),
      description: HomeDataLanguage.features_storage_desc(language),
      image: "/images/features/1.png",
    },
    {
      title: HomeDataLanguage.features_gamification_title(language),
      description: HomeDataLanguage.features_gamification_desc(language),
      image: "/images/features/4.png",
    },
  ];
}

/**
 * Feature list with one preview. On large screens the preview sits beside the
 * list (tabs); on small screens it opens under the chosen item.
 */
function FeatureExplorer({ language }: { language: Language }) {
  const features = getFeatures(language);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = features[active];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step =
      event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = (active + step + features.length) % features.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-icon-color sm:text-4xl">
            {HomeDataLanguage.features_heading(language)}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-icon-color/70">
            {HomeDataLanguage.features_intro(language)}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col"
          >
            {features.map((feature, index) => {
              const selected = index === active;
              return (
                <div key={feature.image}>
                  <button
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={`${baseId}-tab-${index}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={onKeyDown}
                    className={`w-full border-l-2 py-4 pl-5 pr-2 text-left text-lg transition-colors ${
                      selected
                        ? "border-primary-color font-semibold text-icon-color"
                        : "border-icon-color/10 text-icon-color/60 hover:border-icon-color/30 hover:text-icon-color"
                    }`}
                  >
                    {feature.title}
                  </button>
                  {selected && (
                    <div className="motion-safe:animate-fade-in pb-6 pl-5 lg:hidden">
                      <p className="leading-relaxed text-icon-color/75">
                        {feature.description}
                      </p>
                      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-3xl bg-background-color">
                        <Image
                          src={feature.image}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 90vw, 1px"
                          className="object-contain p-6"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            className="hidden lg:block"
          >
            <div
              key={active}
              className="motion-safe:animate-fade-in flex h-full flex-col rounded-[2rem] bg-background-color p-10"
            >
              <div className="relative min-h-[22rem] flex-1">
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 1px"
                  className="object-contain"
                />
              </div>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-icon-color/80">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureExplorer;
