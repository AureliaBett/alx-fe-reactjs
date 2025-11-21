// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

export default async function fetchUserData({
  username,
  location = "",
  minRepos = 0,
}) {
  if (!username) {
    throw new Error("Username is required");
  }

  // Construct the query string
  let query = `${username}`;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}/search/users?q=${query}`;

  try {
    const response = await axios.get(url);
    const users = response.data.items; // GitHub Search API returns `items` array
    return users; // return array of users
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw new Error("Failed to fetch GitHub users");
  }
}
