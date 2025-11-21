
// src/services/githubService.js
import axios from "axios";

// Literal string included exactly as required
const SEARCH_API_URL = "https://api.github.com/search/users?q";

export default async function fetchUserData({
  username,
  location = "",
  minRepos = 0,
  page = 1,
  perPage = 10,
}) {
  if (!username) {
    throw new Error("Username is required");
  }

  // Construct the query string
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos > 0) query += `+repos:>=${minRepos}`;

  // Use the literal string in the request
  const url = `${SEARCH_API_URL}=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return {
      results: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Failed to fetch users");
  }
}
