import { useEffect, useState } from "react";
import Layout from "../../layouts/HomepageLayout";
import SEOHead from "../../components/seo/SEOHead";
import { privacyPolicy, type PolicySection } from "../../data/privacy-policy";
import { useGetLanguage } from "../../react-query";

// Long-form legal text: Thai needs the extra leading, and every section body
// is plain p/h3/ul markup styled from here.
const prose =
  "leading-[1.8] text-icon-color/80 [&_a]:break-words [&_a]:font-medium [&_a]:text-primary-color [&_a]:underline [&_a]:underline-offset-4 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-icon-color [&_li]:pl-1 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-icon-color [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-6";

function TocLinks({
  sections,
  activeId,
}: {
  sections: PolicySection[];
  activeId: string;
}) {
  return (
    <ul className="mt-3 border-l border-icon-color/10">
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active ? "location" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                active
                  ? "border-primary-color font-medium text-icon-color"
                  : "border-transparent text-icon-color/60 hover:text-icon-color"
              }`}
            >
              {section.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const PrivacyPolicyPage = () => {
  const language = useGetLanguage();
  const content = privacyPolicy[language.data ?? "en"];
  const [activeId, setActiveId] = useState(content.sections[0].id);

  // Highlight the section currently near the top of the screen.
  useEffect(() => {
    const elements = content.sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [content]);

  return (
    <Layout>
      <SEOHead title={content.seoTitle} description={content.seoDescription} />
      <main className="bg-white font-Anuphan">
        <header className="border-b border-icon-color/10 bg-background-color">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <h1 className="text-4xl font-bold leading-[1.2] text-icon-color sm:text-5xl sm:leading-[1.2]">
              {content.title}
            </h1>
            <p className="mt-3 text-sm text-icon-color/60">{content.updated}</p>
            <div className="mt-8 max-w-3xl text-lg leading-[1.8] text-icon-color/80 [&_p+p]:mt-4">
              {content.intro}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <nav aria-label={content.tocTitle}>
            <details className="mb-10 rounded-2xl bg-background-color p-5 lg:hidden">
              <summary className="cursor-pointer font-semibold text-icon-color">
                {content.tocTitle}
              </summary>
              <TocLinks sections={content.sections} activeId={activeId} />
            </details>
            <div className="sticky top-24 hidden lg:block">
              <h2 className="text-sm font-semibold text-icon-color">
                {content.tocTitle}
              </h2>
              <TocLinks sections={content.sections} activeId={activeId} />
            </div>
          </nav>

          <article className="min-w-0 max-w-[44rem]">
            <section
              aria-labelledby="privacy-summary"
              className="rounded-3xl bg-background-color p-6 sm:p-8"
            >
              <h2
                id="privacy-summary"
                className="text-xl font-semibold text-icon-color"
              >
                {content.summaryTitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {content.summary.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-[1.8] text-icon-color/80 [&_a]:font-medium [&_a]:text-primary-color [&_a]:underline [&_a]:underline-offset-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-color"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {content.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="mt-12 scroll-mt-24 border-t border-icon-color/10 pt-10"
              >
                <h2
                  id={`${section.id}-title`}
                  className="text-2xl font-bold leading-snug text-icon-color"
                >
                  {section.title}
                </h2>
                <div className={prose}>{section.body}</div>
              </section>
            ))}
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicyPage;
