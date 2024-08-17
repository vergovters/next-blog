import PostList from "@/components/Post-list";

import React, { Suspense } from "react";

const Page = () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All post</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default Page;
