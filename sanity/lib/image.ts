import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource): ReturnType<typeof builder.image> {
  return builder.image(source);
}
