import { defineQuery } from "next-sanity";
import { sanityClient } from "../lib/client";
import { Announcement } from "../sanity.types";

export async function getLastestAnnouncementService(): Promise<Announcement> {
  try {
    const currentDate = new Date().toISOString();
    const query = defineQuery(
      `*[_type == "announcement" && expiredAt > "${currentDate}" ] | order(expiredAt desc)[0]`
    );
    const response = await sanityClient.fetch<Announcement>(query);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
