"use client"
import Navbar from "@/components/organisms/Navbar";
import Page from "@/components/organisms/Page";
import PostCard from "@/components/organisms/PostCard";
import { usePage } from "@/context";
import { getPosts, getUserDetail } from "@/utils/getApi";
import { Suspense, useEffect, useState } from "react";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const page = usePage((state) => state.page);

  useEffect(() => {
    async function fetchPosts() {
      const postsData = await getPosts(page);
      setPosts(postsData);
    }

    fetchPosts();
  }, [page])

  return (
    <div className="w-screen min-h-screen items-center bg-orange-200">
      <div className="flex flex-col w-full items-center md:pb-10">
        <Navbar />
          {
            posts?.length > 0
            &&
            posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))
          }
      </div>
      <div className="flex w-full justify-center items-center py-4">
        <Page />
      </div>
    </div>
  );
}
