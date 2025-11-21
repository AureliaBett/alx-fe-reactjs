
import axios from "axios";

const BASE_URL = "https://api.github.com";

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

  // Construct the query string for advanced search
  let query = `${username}`;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    const users = response.data.items;

    // Return users and total count for pagination
    return {
      results: users,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw new Error("Failed to fetch GitHub users");
  }
}
