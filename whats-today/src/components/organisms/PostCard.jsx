import {
    IoChatbubbleOutline,
    IoShareOutline,
    IoHeartOutline,
} from "react-icons/io5";

export default function PostCard({ post }) {
    return (
        <div className="flex flex-col w-full border-b border-slate-400 md:border-none md:w-1/2 px-6 py-4 bg-white md:rounded-3xl shadow-xl hover:shadow-2xl cursor-default md:mb-6">
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
            <hr className="h-0 md:h-[1.5px] border-0 bg-gray-300 opacity-30 rounded-full" />
            <div className="flex flex-row w-full gap-6 mt-0 md:mt-4 justify-end">
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
    );
}