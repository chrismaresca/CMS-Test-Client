"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

export function ArticleTags() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    // Simulated API call - in reality this would be a fetch to your API
    const fetchTags = async () => {
      // Simulating API response
      const mockTags: Tag[] = [
        { id: 1, name: "Technology", slug: "technology" },
        { id: 2, name: "Money", slug: "money" },
        { id: 3, name: "Art", slug: "art" },
        { id: 4, name: "Productivity", slug: "productivity" },
        { id: 5, name: "Psychology", slug: "psychology" },
        { id: 6, name: "Design", slug: "design" },
        { id: 7, name: "Mindfulness", slug: "mindfulness" },
      ];

      setTags(mockTags.slice(0, 7)); // Limit to 7 tags
    };

    fetchTags();
  }, []);

  return (
    <div className="px-6 py-4 mb-6 rounded-lg bg-card border dark:border-gray-700">
      <h4 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">Recommended topics</h4>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Link key={tag.id} href={`articles/${tag.slug}`} passHref>
            <Badge className="cursor-pointer hover:bg-primary-200 hover:text-primary-900 dark:hover:bg-primary-300 dark:hover:text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 mb-3">{tag.name}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
