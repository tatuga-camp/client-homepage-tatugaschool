import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

const SITE = "https://tatugaschool.com";

export default function SEOHead({
  title,
  description,
  image,
  type = "website",
}: Props) {
  const router = useRouter();
  const path = router.asPath.split("?")[0].split("#")[0];
  const canonical = `${SITE}${path === "/" ? "" : path}`;
  const ogImage = image ?? `${SITE}/icon.svg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="th" href={`${canonical}?lang=th`} />
      <link rel="alternate" hrefLang="en" href={`${canonical}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tatuga School" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
