// Constants
import { POSTS_API_BASE_URL } from "@/constants";

// Types
import { Post, PostResponse } from "@/types/post";

/**
 * Fetches posts from the API.
 * @returns {Promise<PostResponse>} The response containing the posts.
 * @throws {Error} If the fetch operation fails.
 */
export async function fetchPostsByBrand(brandId: string): Promise<PostResponse> {
  const API_URL = POSTS_API_BASE_URL;

  if (!API_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${API_URL}/api/posts?where[brand.id][equals]=${brandId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches a post by its slug.
 * @param {string} slug - The slug of the post to fetch.
 * @returns {Promise<Post>} The fetched post.
 */
export async function fetchPostBySlug(slug: string): Promise<Post> {
  const API_URL = POSTS_API_BASE_URL;

  if (!API_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${API_URL}/api/posts?where[slug][equals]=${encodeURIComponent(slug)}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const postResponse: PostResponse = await response.json();

  return postResponse.docs[0];
}
