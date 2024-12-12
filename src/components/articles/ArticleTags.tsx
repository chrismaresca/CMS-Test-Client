import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getBrandTags } from "@/utilities/getTags";
import { Suspense } from "react";

// Separate component for rendering tags
async function TagsList() {
  const tags = await getBrandTags();

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <Link key={tag.slug} href={`/${tag.slug}`} passHref>
          <Badge className="cursor-pointer hover:bg-primary-200 hover:text-primary-900 dark:hover:bg-primary-300 dark:hover:text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 mb-3">{tag.name}</Badge>
        </Link>
      ))}
    </div>
  );
}

export async function ArticleTags() {
  return (
    <div className="px-6 py-4 mb-6 rounded-lg bg-card border dark:border-gray-700">
      <h4 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">Recommended topics</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <TagsList />
      </Suspense>
    </div>
  );
}
