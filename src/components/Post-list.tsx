import Link from "next/link";
import React from "react";

const PostList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const posts = await res.json();
  return (
    <ul>
      {posts.posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
