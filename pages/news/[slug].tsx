import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomepageLayout from "../../layouts/HomepageLayout";
import SEOHead from "../../components/seo/SEOHead";
import PortableTextBody from "../../components/updates/PortableTextBody";
import { updatesLanguageData } from "../../data/languages/updates";
import { urlForImage } from "../../sanity/lib/image";
import { portableTextToPlain } from "../../utils/portableTextToPlain";
import {
  Announcement,
  getAnnouncementBySlug,
  getAnnouncementSlugs,
} from "../../services/announcement";
import { useGetLanguage } from "../../react-query";

const SITE = "https://tatugaschool.com";

type Props = { announcement: Announcement };

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAnnouncementSlugs();
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;
  const announcement = await getAnnouncementBySlug(slug);
  if (!announcement) {
    return { notFound: true };
  }
  return { props: { announcement } };
};

export default function NewsArticlePage({ announcement }: Props) {
  const language = useGetLanguage();
  const lang = language.data ?? "en";

  const title = lang === "th" ? announcement.titleTh : announcement.titleEn;
  const body = lang === "th" ? announcement.bodyTh : announcement.bodyEn;
  const description = portableTextToPlain(body, 155);
  const formattedDate = new Date(announcement.publishedAt).toLocaleDateString(
    lang === "th" ? "th-TH" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const ogImage = announcement.coverImage
    ? urlForImage(announcement.coverImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    datePublished: announcement.publishedAt,
    dateModified: announcement.publishedAt,
    author: {
      "@type": "Organization",
      name: "Tatuga School",
      url: SITE,
    },
    image: ogImage ? [ogImage] : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/news/${announcement.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Tatuga School",
      logo: { "@type": "ImageObject", url: `${SITE}/icon.svg` },
    },
  };

  return (
    <HomepageLayout>
      <SEOHead
        title={`${title} - Tatuga School`}
        description={description}
        image={ogImage}
        type="article"
      />
      <Head>
        <meta
          property="article:published_time"
          content={announcement.publishedAt}
        />
        <meta
          property="article:modified_time"
          content={announcement.publishedAt}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleLd).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-5 p-5 font-Anuphan md:py-10">
        <Link
          href="/news"
          className="text-sm font-semibold text-primary-color"
        >
          {updatesLanguageData.backToNews(lang)}
        </Link>

        {announcement.coverImage && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={urlForImage(announcement.coverImage)
                .width(1200)
                .height(675)
                .fit("crop")
                .auto("format")
                .url()}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <span className="text-xs text-gray-400">{formattedDate}</span>
        <h1 className="text-3xl font-bold text-icon-color md:text-4xl">
          {title}
        </h1>
        <article>
          <PortableTextBody value={body ?? []} />
        </article>
      </main>
    </HomepageLayout>
  );
}
