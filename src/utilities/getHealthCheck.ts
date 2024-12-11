import { POSTS_API_BASE_URL } from "@/constants";

export async function callHealthCheck() {
    const API_URL = POSTS_API_BASE_URL;
  
    const response = await fetch(`${API_URL}/api/health`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return response.json();
  }
  