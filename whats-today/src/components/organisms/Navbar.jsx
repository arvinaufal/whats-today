export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row w-screen md:py-4 md:px-6 bg-white">
            <div className="flex w-full md:w-auto justify-center items-center md:justify-start border-b border-slate-300 md:border-none pb-2 md:pb-0">
                <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?w=740&t=st=1706949792~exp=1706950392~hmac=3c991b37dbe6657758b6b18dafa0518e716f1c581d8f8ba61ce5acb573249d93" width={96} height={96} />
            </div>
            <div className="hidden md:flex flex-row gap-4 ml-16">
                <div className="flex justify-center items-end cursor-pointer gap-14">
                    <span className={`font-bold text-orange-500 text-3xl pb-2 relative inline-block group mb-4 cursor-pointer`}>
                        Home
                        <span className={`absolute inset-x-0 inset-y-10 bottom-0 h-1.5 secondary-color rounded-full transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-orange-300`}></span>
                    </span>
                    <span className={`font-bold text-orange-500 text-3xl pb-2 relative inline-block group mb-4 cursor-pointer`}>
                        User
                        <span className={`absolute inset-x-0 inset-y-10 bottom-0 h-1.5 secondary-color rounded-full transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-orange-300`}></span>
                    </span>

                </div>
            </div>
            <div className="flex flex-row w-full md:hidden my-2">
                <div className="flex w-1/2 border-r border-slate-300 justify-center items-cente py-3">
                    <span className="font-semibold text-2xl text-orange-300">Home</span>
                </div>
                <div className="flex w-1/2 border-l border-slate-300 justify-center items-center py-3">
                    <span className="font-bold text-2xl text-orange-400">User</span>
                </div>
            </div>

        </div>
    )
}