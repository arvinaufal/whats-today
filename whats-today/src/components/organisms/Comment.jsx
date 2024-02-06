export default function Comment({ comment }) {
    return (
        <div className="flex flex-col w-full pt-2 pb-3 px-3 bg-white border-y border-slate-100">
            <div className="flex flex-row w-full">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        width={28}
                        height={28}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <span className="text-sm font-semibold">{comment.name}</span>
                    <span className="text-xs italic">{comment.email}</span>
                </div>
            </div>
            <div className="flex w-full mt-3 pl-10">
                <span className="text-sm">
                    {comment.body}
                </span>
            </div>
        </div>
    )
}