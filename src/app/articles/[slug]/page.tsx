// Types
import { Post } from "@/types/post";
import { NextParams } from "@/types/nextTypes";

// Constants
import { BRAND_ID } from "@/constants";

// Utilities
import { extractSlugs } from "@/utilities/extractSlugs";
import { fetchArticlesByBrand, fetchArticleBySlug } from "@/utilities/getPosts";
import { Button } from "@/components/ui/button";
import { CustomMDX } from "@/components/mdx-components";


// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// Allow dynamic paths that aren't generated statically
export const dynamicParams = true;

/**
 * Generates static parameters for the dynamic blog post pages.
 * @returns {Array<{ slug: string }>} An array of slugs.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const posts = await fetchArticlesByBrand(BRAND_ID);
    return extractSlugs(posts);
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPost({ params: paramsPromise }: NextParams) {
  const { slug = "" } = await paramsPromise;
  const post: Post = await fetchArticleBySlug(slug);

  // TODO: Redirect to 404 if post is not found
  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-xl font-semibold">Post not found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
        <CustomMDX source={post.content} />
        {/* <RichText2 className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} /> */}
      </article>
    </main>
  );
}
