// Constants
import { POSTS_API_BASE_URL } from "@/constants";
import { serialize } from "next-mdx-remote/serialize";

export async function getTags() {
  const API_URL = POSTS_API_BASE_URL;

  if (!API_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${API_URL}/api/tags`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
}

export async function getTestMDX(id: string) {
  const API_URL = POSTS_API_BASE_URL;

  if (!API_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${API_URL}/api/articles/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
}

export async function updateTestMDX() {
  const API_URL = POSTS_API_BASE_URL;

  if (!API_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const content = await fetch('http://localhost:3003/chris.mdx')
  .then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch content from chris.mdx: ${response.statusText}`);
      }
      return await response.text();
    })
    .catch((error) => {
      throw new Error(`Error fetching chris.mdx: ${error.message}`);
    });


  const response = await fetch(`${API_URL}/api/articles/a1be23b5-f419-46d1-90da-603b8fa25dbc`, {
    method: "PATCH",
    body: JSON.stringify({ title: "Second Article", content: content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
