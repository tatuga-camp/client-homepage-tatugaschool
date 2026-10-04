/**
 * Teacher testimonials for the homepage, edited in the Studio at /sanity
 * (document type `testimonial`, see sanity/schemaTypes/testimonialType.ts).
 *
 * Server-only — import it by its deep path so the Sanity client stays out of
 * the browser bundle (same rule as services/announcement.ts).
 */
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";
import { memoize, withTimeout } from "../lib/memo";

export type Testimonial = {
  _id: string;
  quoteTh: string;
  quoteEn: string | null;
  roleTh: string | null;
  roleEn: string | null;
  name: string;
  schoolName: string | null;
  rating: number | null;
  featured: boolean;
  /** Square 160px crop, already resolved to a URL on the server. */
  photoUrl: string | null;
};

type TestimonialRow = Omit<Testimonial, "photoUrl"> & {
  photo: SanityImageSource | null;
};

const CACHE_TTL_MS = 10 * 60 * 1000;
const FETCH_TIMEOUT_MS = 2500;

// Only quotes the person agreed to share are ever queried.
const query = `*[_type == "testimonial" && permission == true && defined(quoteTh) && defined(name)]
  | order(featured desc, order asc, _createdAt desc)[0...13]{
  _id,
  quoteTh,
  "quoteEn": coalesce(quoteEn, null),
  "roleTh": coalesce(roleTh, null),
  "roleEn": coalesce(roleEn, null),
  name,
  "schoolName": coalesce(schoolName, null),
  "rating": coalesce(rating, null),
  "featured": featured == true,
  "photo": select(defined(photo.asset) => photo, null)
}`;

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await memoize("testimonials", CACHE_TTL_MS, async () => {
      const rows = await withTimeout(
        sanityClient.fetch<TestimonialRow[]>(query),
        FETCH_TIMEOUT_MS,
        "testimonials fetch",
      );
      return rows.map(({ photo, ...row }) => ({
        ...row,
        photoUrl: photo
          ? urlForImage(photo).width(160).height(160).fit("crop").url()
          : null,
      }));
    });
  } catch (error) {
    console.error("getTestimonials:", error);
    return [];
  }
}
