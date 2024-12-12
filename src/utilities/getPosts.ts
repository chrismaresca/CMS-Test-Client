// // Constants
import { POSTS_API_BASE_URL } from "@/constants";

// // Types
import { ArticlePayload } from "@/types/response";

/**
 * Fetches articles by brand ID.
 * @param {string} brandId - The ID of the brand to fetch articles for.
 * @returns {Promise<any>} The response containing the articles.
 * @throws {Error} If the fetch operation fails.
 */
export async function fetchArticlesByBrand(brandId: string): Promise<ArticlePayload[]> {
  if (!POSTS_API_BASE_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  console.log("The brandId is", brandId, "and this is not currently being used.");

  // TODO: Add where[brand.id][equals]=${brandId}

  const response = await fetch(`${POSTS_API_BASE_URL}/api/articles`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches a single article by its slug.
 * @param {string} slug - The slug of the article to fetch.
 * @returns {Promise<Post>} The fetched article.
 * @throws {Error} If the fetch operation fails.
 */
export async function fetchArticleBySlug(slug: string): Promise<ArticlePayload | null> {
  if (!POSTS_API_BASE_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  console.log("Called fetchArticleBySlug with slug", slug);

  const response = await fetch(`${POSTS_API_BASE_URL}/api/query/${encodeURIComponent(slug)}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
