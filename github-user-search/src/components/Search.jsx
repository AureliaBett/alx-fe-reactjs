import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(username);

    if (!data) {
      setError("Looks like we can't find the user");
    } else if (
      (location && data.location?.toLowerCase().indexOf(location.toLowerCase()) === -1) ||
      (minRepos && data.public_repos < parseInt(minRepos))
    ) {
      setError("No users matched the additional criteria");
    } else {
      setUser(data);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Username */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* User Info */}
      {user && (
        <div className="mt-6 flex flex-col items-center gap-2 border-t pt-4">
          <img src={user.avatar_url} alt="user avatar" className="w-32 rounded-full" />
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <p className="text-gray-700">{user.bio}</p>
          {user.location && <p className="text-gray-600">Location: {user.location}</p>}
          <p className="text-gray-600">Repos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
