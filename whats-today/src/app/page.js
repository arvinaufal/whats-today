"use server"
import Navbar from "@/components/organisms/Navbar";
import PostCard from "@/components/organisms/PostCard";
import { getPosts, getUserDetail } from "@/utils/getApi";



export default async function Home() {
  let posts = await getPosts();

  return (
    <main className="w-screen min-h-screen items-center bg-orange-200">
      <div className="flex flex-col w-full items-center md:pb-10">
        <Navbar />
        {
          posts.length > 0
          &&
          posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))
        }
      </div>
    </main>
  );
}
