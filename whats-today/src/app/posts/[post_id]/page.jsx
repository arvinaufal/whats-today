import Comment from "@/components/organisms/Comment";
import { getDetailPost } from "@/utils/getApi";
import Link from "next/link";
import {
    IoChatbubbleOutline,
    IoShareOutline,
    IoHeartOutline,
    IoArrowBackOutline,
} from "react-icons/io5";

export default async function DetailPost({ params }) {
    const post = await getDetailPost(params.post_id);

    return (
        <div className="flex w-screen h-screen bg-orange-100 md:items-center md:justify-center">
            <div className="hidden md:flex flex-row w-4/5 h-5/6 bg-purple-100 rounded-xl ">
                <div className="flex flex-col w-1/2 h-full border-r border-slate-200 bg-white rounded-l-xl items-center">
                    <div className="flex w-full h-1/6  py-4 px-6">
                        <Link href={`/`} className="flex flex-row items-center cursor-pointer">
                            <IoArrowBackOutline size={36} color="gray" />
                            <div className="ml-4">
                                <span className="text-2xl font-semibold text-slate-500 hover:text-black transition duration-500">Back</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col w-full h-4/6  px-6 py-4">
                        <div className="flex w-full mb-3">
                            <span className="font-bold text-2xl">{post.title}</span>
                        </div>
                        <div className="flex flex-row w-full gap-3">
                            <div className="flex flex-col">
                                <img
                                    src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    width={36}
                                    height={36}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 justify-center">
                                <div className="flex w-full ">
                                    <span className="font-bold text-sm">{post.user.name}</span>
                                </div>
                                <div className="flex w-full ">
                                    <span className="italic text-sm">{post.user.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full mt-8 mb-4">
                            <span className="text-sm">
                                {post.body}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-1/6 px-6 py-4">
                        <hr className="h-0 md:h-[1.5px] border-0 bg-gray-300 opacity-30 rounded-full mt-2" />
                        <div className="flex flex-row w-full gap-6 mt-0 md:mt-6 justify-end">
                            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                                <IoHeartOutline size={20} color="gray" />
                                <span className="text-slate-500 text-sm">{post.likes}</span>
                            </div>
                            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                                <IoChatbubbleOutline size={20} color="gray" />
                                <span className="text-slate-500 text-sm">{post.comments.length}</span>
                            </div>
                            <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                                <IoShareOutline size={20} color="gray" />
                                <span className="text-slate-500 text-sm">{post.shares}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 border-l border-slate-200 bg-white rounded-r-xl">
                    <div className="flex px-2 justify-center py-4 border-b ">
                        <span className="font-semibold text-xl italic">Comments</span>
                    </div>
                    <div className="flex flex-col h-full w-full bg-slate-100 overflow-y-auto">
                        {
                            post.comments.length > 0
                                ?
                                post.comments.map((comment, index) => (
                                    <Comment comment={comment} key={index} />
                                ))
                                :
                                <div className="flex w-full h-full justify-center items-center">
                                    <span className="italic text-slate-600">Comment belum ada</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:hidden w-full bg-white">
                <div className="flex flex-row w-full p-4 border border-b-slate-300">
                    <Link href={`/`} className="flex flex-row items-center cursor-pointer">
                        <IoArrowBackOutline size={28} color="orange" />
                        <div className="ml-2">
                            <span className="text-xl font-semibold text-orange-300 hover:text-orange-500 transition duration-500">Back</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col w-full px-4 py-2 border-b border-slate-200">
                    <div className="flex w-full mb-3">
                        <span className="font-bold text-2xl">{post.title}</span>
                    </div>
                    <div className="flex flex-row w-full gap-3">
                        <div className="flex flex-col">
                            <img
                                src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-1/2 justify-center">
                            <div className="flex w-full ">
                                <span className="font-bold text-sm">{post.user.name}</span>
                            </div>
                            <div className="flex w-full ">
                                <span className="italic text-sm">{post.user.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mt-8 mb-4">
                        <span className="text-sm">
                            {post.body}
                        </span>
                    </div>
                </div>
                <div className="flex w-full justify-center content-center py-4 border-b border-slate-200">
                    <span className="italic">Comments</span>
                </div>
                <div className="flex flex-col h-full w-full overflow-y-auto">
                    {
                        post.comments.length > 0
                            ?
                            post.comments.map((comment, index) => (
                                <Comment comment={comment} key={index} />
                            ))
                            :
                            <div className="flex w-full h-full justify-center items-center bg-white">
                                <span className="italic font-semibold">Comment belum ada</span>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}