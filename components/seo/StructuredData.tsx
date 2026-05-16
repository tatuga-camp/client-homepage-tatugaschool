import Head from "next/head";

type Props = { descriptionTh: string };

export default function StructuredData({ descriptionTh }: Props) {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tatuga School",
    alternateName: ["Tatuga Class", "ทาทูก้าสคูล", "ทาทูก้าคลาส"],
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://tatugaschool.com",
    description: descriptionTh,
    offers: { "@type": "Offer", url: "https://tatugaschool.com/price" },
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tatuga School",
    alternateName: "Tatuga Class",
    url: "https://tatugaschool.com",
    logo: "https://tatugaschool.com/icon.svg",
    sameAs: ["https://www.facebook.com/profile.php?id=61573841157485"],
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApp).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
    </Head>
  );
}
