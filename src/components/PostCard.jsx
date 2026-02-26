import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}