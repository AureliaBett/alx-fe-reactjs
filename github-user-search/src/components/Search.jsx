
import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // current page for pagination
  const [hasMore, setHasMore] = useState(false); // whether there are more results

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const { results, totalCount } = await fetchUserData({
        username,
        location,
        minRepos: minRepos ? parseInt(minRepos) : 0,
        page: 1,
      });
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      }
      setUsers(results);
      setHasMore(results.length < totalCount);
    } catch (err) {
      setError("Failed to fetch users. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const { results, totalCount } = await fetchUserData({
        username,
        location,
        minRepos: minRepos ? parseInt(minRepos) : 0,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...results]);
      setPage(nextPage);
      setHasMore(users.length + results.length < totalCount);
    } catch (err) {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded mb-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-lg">{user.login}</h2>
              {user.location && <p className="text-gray-700">{user.location}</p>}
              <p className="text-gray-700">
                Public Repos: {user.public_repos ?? "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}

        {hasMore && !loading && (
          <button
            onClick={loadMore}
            className="bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300 transition-colors mt-2"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
