// // Constants
import { POSTS_API_BASE_URL, BRAND_ID } from "@/constants";
import { TagPayload } from "@/types/response";

export async function getBrandTags(): Promise<TagPayload[]> {
  if (!POSTS_API_BASE_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  if (!BRAND_ID) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  console.log("Fetching tags...");



  const tags = await fetch(`${POSTS_API_BASE_URL}/api/brand-tags/${BRAND_ID}`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });

  if (!tags.ok) {
    throw new Error(`Failed to fetch tags: ${tags.statusText}`);
  }

  return tags.json();
}
