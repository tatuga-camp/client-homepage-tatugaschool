/**
 * Data access for announcements — the public-facing "news" content.
 *
 * "Announcement" is the domain name; the underlying Sanity document type is
 * `news` (see sanity/schemaTypes/newsType.ts), hence `_type == "news"` below.
 *
 * Import this module via its deep path (`services/announcement`), NOT through
 * the `services/index.ts` barrel: it pulls in `sanityClient`, and these
 * functions are only meant to run at build time inside `getStaticProps` /
 * `getStaticPaths`. Keeping it out of the barrel avoids bundling the Sanity
 * client into client-side code.
 */
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "../sanity/lib/client";

export type AnnouncementType = "feature" | "fix" | "news" | "announcement";

export type Announcement = {
  _id: string;
  slug: string;
  type: AnnouncementType;
  publishedAt: string;
  titleEn: string;
  titleTh: string;
  bodyEn: PortableTextBlock[];
  bodyTh: PortableTextBlock[];
  coverImage: SanityImageSource | null;
};

const announcementProjection = `{
  _id,
  "slug": slug.current,
  type,
  publishedAt,
  titleEn,
  titleTh,
  bodyEn,
  bodyTh,
  coverImage
}`;

export async function getAllAnnouncements(): Promise<Announcement[]> {
  const query = `*[_type == "news" && defined(publishedAt) && defined(slug.current)] | order(publishedAt desc) ${announcementProjection}`;
  return sanityClient.fetch<Announcement[]>(query);
}

export async function getAnnouncementSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "news" && defined(slug.current)]{ "slug": slug.current }`;
  return sanityClient.fetch<{ slug: string }[]>(query);
}

export async function getAnnouncementBySlug(
  slug: string,
): Promise<Announcement | null> {
  const query = `*[_type == "news" && slug.current == $slug][0] ${announcementProjection}`;
  return sanityClient.fetch<Announcement | null>(query, { slug });
}
