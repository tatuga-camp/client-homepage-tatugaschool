import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureExplorer from "../components/home/FeatureExplorer";
import {
  FloatingSchoolBadges,
  PlanLegend,
  SchoolBadgeMarquee,
} from "../components/home/PayingSchools";
import Testimonials from "../components/home/Testimonials";
import VideoTour from "../components/home/VideoTour";
import SEOHead from "../components/seo/SEOHead";
import StructuredData from "../components/seo/StructuredData";
import { HomeDataLanguage } from "../data/languages/home";
import Layout from "../layouts/HomepageLayout";
import { useGetLanguage } from "../react-query";
import { useGetUser } from "../react-query/user";
import { getHeroSchools } from "../services/paying-schools";
import { getTestimonials, type Testimonial } from "../services/testimonial";
import { type HeroSchools } from "../utils/payingSchools";

type Props = {
  heroSchools: HeroSchools | null;
  testimonials: Testimonial[];
};

// Server-rendered per request (the custom App's getInitialProps already makes
// it so, for SSR language detection). Both sources are read from the CDN and
// cached in memory, so visitors never reach the API or the database.
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const [heroSchools, testimonials] = await Promise.all([
    getHeroSchools(),
    getTestimonials(),
  ]);
  return { props: { heroSchools, testimonials } };
};

export default function Home({ heroSchools, testimonials }: Props) {
  const user = useGetUser();
  const language = useGetLanguage();
  const lang = language.data ?? "en";
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_CLIENT_URL;
  const hasSchools = !!heroSchools && heroSchools.schools.length > 0;

  const primaryCta = user.data
    ? {
        href: user.data.favoritSchool
          ? `${mainUrl}/school/${user.data.favoritSchool}`
          : `${mainUrl}`,
        label: HomeDataLanguage.cta_go_school(lang),
      }
    : {
        href: `${mainUrl}/auth/sign-up`,
        label: HomeDataLanguage.cta_sign_up(lang),
      };

  const sponsors = [
    {
      title: "TedFund",
      description: HomeDataLanguage.tedfund_desc(lang),
      image: "/images/sponsors/tedfund1.png",
    },
    {
      title: "NRRU UBI",
      description: HomeDataLanguage.nrru_ubi_desc(lang),
      image: "/images/sponsors/nrru-ubi.png",
    },
  ];

  const articles = [
    {
      title: HomeDataLanguage.keyword_attendance_h2(lang),
      body: HomeDataLanguage.keyword_attendance_body(lang),
    },
    {
      title: HomeDataLanguage.keyword_assignment_h2(lang),
      body: HomeDataLanguage.keyword_assignment_body(lang),
    },
    {
      title: HomeDataLanguage.keyword_classroom_h2(lang),
      body: HomeDataLanguage.keyword_classroom_body(lang),
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={HomeDataLanguage.seo_title(lang)}
        description={HomeDataLanguage.seo_description(lang)}
      />
      <StructuredData descriptionTh={HomeDataLanguage.seo_description("th")} />
      <a
        href={`${mainUrl}/auth/sign-up`}
        className="block bg-warning-color/30 px-4 py-2.5 text-center font-Anuphan text-sm font-medium text-icon-color underline-offset-4 hover:underline"
      >
        {HomeDataLanguage.migration_banner(lang)}
      </a>

      <main className="font-Anuphan">
        {/* Hero: the paying schools float around the headline. */}
        <section className="relative overflow-hidden bg-background-color bg-[linear-gradient(to_bottom,transparent_39px,rgba(56,55,103,0.06)_40px)] bg-[length:100%_40px] pb-10 xl:pb-0">
          {hasSchools && (
            <FloatingSchoolBadges hero={heroSchools} language={lang} />
          )}
          <div
            className={`relative mx-auto flex max-w-[40rem] flex-col items-center px-4 pb-10 pt-14 text-center sm:pt-20 ${
              hasSchools
                ? "xl:min-h-[50rem] xl:justify-center xl:py-40"
                : "sm:pb-20"
            }`}
          >
            <h1 className="text-4xl font-bold leading-[1.2] text-icon-color sm:text-5xl sm:leading-[1.2] xl:text-[3.5rem]">
              {HomeDataLanguage.hero_h1_seo(lang)}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-icon-color/75 sm:text-xl sm:leading-relaxed">
              {HomeDataLanguage.hero_sub(lang)}
            </p>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href={primaryCta.href}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-primary-color px-8 text-lg font-semibold text-white shadow-[0_14px_30px_-14px_rgba(44,124,209,0.9)] transition-colors hover:bg-primary-color-hover active:bg-primary-color-focus sm:w-auto"
              >
                {primaryCta.label}
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_STUDENT_CLIENT_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-lg font-semibold text-icon-color ring-1 ring-icon-color/15 transition-colors hover:ring-icon-color/40 sm:w-auto"
              >
                {HomeDataLanguage.cta_students(lang)}
              </a>
            </div>
            {hasSchools && (
              <div className="mt-12">
                <PlanLegend hero={heroSchools} language={lang} />
              </div>
            )}
          </div>
          {hasSchools && (
            <SchoolBadgeMarquee hero={heroSchools} language={lang} />
          )}
        </section>

        {/* Usage numbers, set as a sentence rather than a stat band. */}
        <section className="border-y border-icon-color/10 bg-white">
          <p className="mx-auto max-w-5xl px-4 py-14 text-center text-2xl leading-relaxed text-icon-color/80 sm:px-6 sm:text-3xl sm:leading-relaxed">
            {HomeDataLanguage.proof_sentence(lang).map((part, index) =>
              "strong" in part && part.strong ? (
                <strong
                  key={index}
                  className="font-bold tabular-nums text-icon-color"
                >
                  {part.text}
                </strong>
              ) : (
                <span key={index}>{part.text}</span>
              ),
            )}
          </p>
        </section>

        <FeatureExplorer language={lang} />

        <VideoTour language={lang} />

        <Testimonials items={testimonials} language={lang} />

        {/* Search-friendly descriptions of the core jobs. */}
        <section className="bg-white pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-10 border-t border-icon-color/10 px-4 pt-16 sm:px-6 md:grid-cols-2">
            {articles.map((article) => (
              <article key={article.title}>
                <h2 className="text-xl font-semibold leading-snug text-icon-color">
                  {article.title}
                </h2>
                <p className="mt-2 leading-relaxed text-icon-color/70">
                  {article.body}
                </p>
              </article>
            ))}
            <article>
              <h2 className="text-xl font-semibold leading-snug text-icon-color">
                {HomeDataLanguage.keyword_activities_h2(lang)}
              </h2>
              <p className="mt-2 leading-relaxed text-icon-color/70">
                {HomeDataLanguage.keyword_activities_body(lang)}{" "}
                <a
                  href="https://tatugacamp.com/"
                  className="font-medium text-primary-color underline underline-offset-4"
                >
                  tatugacamp.com
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className="bg-background-color py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:gap-12">
            <h2 className="shrink-0 text-lg font-semibold text-icon-color">
              {HomeDataLanguage.sponsors_heading(lang)}
            </h2>
            <ul className="grid flex-1 gap-8 sm:grid-cols-2">
              {sponsors.map((sponsor) => (
                <li key={sponsor.title} className="flex items-center gap-5">
                  <span className="relative h-16 w-28 shrink-0">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.title}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </span>
                  <span className="text-sm leading-relaxed text-icon-color/70">
                    {sponsor.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary-color">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {HomeDataLanguage.closing_heading(lang)}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                {HomeDataLanguage.closing_body(lang)}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-primary-color transition-colors hover:bg-background-color"
              >
                {primaryCta.label}
              </a>
              <Link
                href="/price"
                className="inline-flex h-14 items-center justify-center rounded-full px-7 text-lg font-semibold text-white ring-1 ring-white/40 transition-colors hover:ring-white"
              >
                {HomeDataLanguage.compare_plans(lang)}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
