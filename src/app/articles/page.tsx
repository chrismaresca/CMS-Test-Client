import { BRAND_ID } from "@/constants";
import { fetchArticlesByBrand } from "@/utilities/getPosts";
import React from "react";

export default async function page() {
  const posts = await fetchArticlesByBrand(BRAND_ID);

  console.log("The posts are", posts);

  return <div>page</div>;
}
