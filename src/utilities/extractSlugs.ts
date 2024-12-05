import { PostResponse } from "@/types/post";

/**
 * Extracts slugs from the given posts response.
 * @param {PostResponse} posts - The response containing posts.
 * @returns {Array<{ slug: string }>} An array of slugs.
 */
export function extractSlugs(posts: PostResponse): Array<{ slug: string }> {
  if (!posts?.docs) {
    return [];
  }

  return posts.docs.map((post) => ({
    slug: post.slug,
  }));
}
