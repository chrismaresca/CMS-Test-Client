// React
import React from "react";

// Next.js
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";

// Lucide Icons
import { Plus } from "lucide-react";

export function ArticleAuthor() {
  // Mock data for the author profile
  const name = "Jese Leos";
  const title = "Bootcamp Grad & Dev";
  const location = "California, United States";
  const aboutMe = "Hey! I'm Jese Leos. I'm a career-changer, bootcamp grad, and developer.";
  const joinDate = "September 20, 2018";

  return (
    <div className="px-6 py-4 mb-6 rounded-lg bg-card border dark:border-gray-700">
      <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 mb-4">
        <a href="#" className="flex items-center">
          <div className="mr-3 shrink-0">
            <Image className="mt-1 w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt={name} width={32} height={32} />
          </div>
          <div className="mr-3">
            <span className="block font-medium text-gray-900 dark:text-white">{name}</span>
            <span className="text-sm">{title}</span>
          </div>
        </a>
        <div className="hidden xl:block">
          <Button variant="default" className="text-sm font-medium xl:w-full">
            <Plus />
            Follow
          </Button>
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{aboutMe}</p>
      <dl className="mb-5">
        <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Location</dt>
        <dd className="mb-3 text-sm text-gray-500 dark:text-gray-400">{location}</dd>
        <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">I Was Created On:</dt>
        <dd className="text-sm text-gray-500 dark:text-gray-400">{joinDate}</dd>
      </dl>
      <div className="block xl:hidden">
        <Button className="w-full text-sm font-medium">
          <Plus />
          Follow
        </Button>
      </div>
    </div>
  );
}

export default ArticleAuthor;
