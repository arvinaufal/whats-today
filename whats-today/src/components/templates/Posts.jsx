"use client"
import PostCard from "@/components/organisms/PostCard";
import { usePage } from "@/context";
import { getPosts } from "@/utils/getApi";
import { useEffect, useState } from "react";

export default function Posts() {
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
        <div className="flex flex-col w-full h-full justify-center items-center">
            {
                posts?.length > 0
                &&
                posts.map((post, index) => (
                    <PostCard post={post} key={index} />
                ))
            }
        </div>
    )
}