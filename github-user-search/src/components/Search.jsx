import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
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
      setError("Looks like we cant find the user");
    } else {
      setUser(data);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* SEARCH FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* LOADING STATE */}
      {loading && <p>Loading...</p>}

      {/* ERROR STATE */}
      {error && <p>{error}</p>}

      {/* SUCCESS STATE – DISPLAY USER INFO */}
      {user && (
        <div>
          <img src={user.avatar_url} width={120} alt="user avatar" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
