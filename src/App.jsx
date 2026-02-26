import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setPosts(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>  API Fetch</h1>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="grid">
        {!loading &&
          !error &&
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}

export default App;