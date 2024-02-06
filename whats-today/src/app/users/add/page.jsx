import ClientFlashComponent from "@/components/templates/ClientFlashComponent";
import UserForm from "@/components/templates/UserForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

export default function AddUser() {
    const postAddUser = async (payload) => {
        "use server"
        const name = payload.name;
        const status = payload.status;
        const email = payload.email;
        const gender = payload.gender;

        const add = await fetch(
            `https://gorest.co.in/public/v2/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 984346a3c0e918b5a0ecb829a4ff0e7ca407a56ea7c602152b8fe91624465789"
                },
                body: JSON.stringify({
                    name,
                    email,
                    gender,
                    status,
                }),
            }
        );
        const result = (await add.json());

        if (!add.ok) {
            return redirect("/users/add?error=" + result.message);
        }

        return "success"
    }
    return (
        <section className="flex flex-col min-h-screen w-screen bg-white">
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full h-full px-4">
                    <div className="flex flex-col justify-center content-center items-center w-1/2">
                        <div className="flex flex-col justify-center content-center items-center ml-48">
                            <div className="">
                                <img src="/images/mobile-login-rafiki.svg" alt="" style={{ width: 600 }} />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center content-center items-center w-1/2 mb-20">
                        <div className="container w-2/3 h-2/3  flex flex-col justify-center content-center items-center mr-48">
                            <div className="flex w-full mt-8 my-4 justify-center items-center gap-4 mb-12">
                                <Link href={'/users'} className="flex bg-orange-500 cursor-pointer shadow-2xl p-2 rounded-full hover:bg-orange-600">
                                    <IoArrowBackOutline size={24} color="white" />
                                </Link>
                                <div className="flex px-8 py-2 rounded-full bg-orange-400">
                                    <span className="font-semibold text-xl italic text-white">Add User</span>
                                </div>
                                <ClientFlashComponent />
                            </div>
                            <div className="w-5/6 rounded-2xl shadow-lg flex flex-col bg-orange-300">
                                <div className="p-8 flex flex-col w-full">
                                    <UserForm formType="add" postAdd={postAddUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}