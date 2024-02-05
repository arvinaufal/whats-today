"use client"
import Navbar from "@/components/organisms/Navbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import UserLists from "@/components/templates/UserLists";
import { getUsers } from "@/utils/getApi";
import { useEffect, useState } from "react";
import UserPagination from "@/components/organisms/UserPagination";
import { useUserPage } from "@/context";


export default function User() {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    const page = useUserPage((state) => state.page);
    async function searchUser() {
        const users = await getUsers(page, searchQuery);
        setUsers(users);
    }

    useEffect(() => {
        async function fetchUsers() {
            const users = await getUsers(page, searchQuery);
            setUsers(users);
        }
        fetchUsers();
    }, [page]);

    return (
        <div className="flex flex-col w-screen min-h-screen bg-orange-200">
            <Navbar />
            <div className="flex flex-row w-full  mb-4 justify-center items-center" >
                <div className="hidden md:flex px-8 py-4 rounded-full bg-white shadow-lg cursor-default">
                    <span className="font-semibold text-4xl italic underline text-orange-400">User Page</span>
                </div>
            </div>

            <div className="flex flex-col w-full h-full mt-16 justify-center items-center ">
                <div className="flex flex-col w-5/6 bg-white p-4 rounded-xl mb-10">
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col justify-center items-center w-1/2 ">
                            <div className="flex w-full flex-row rounded-full shadow-lg justify-center ml-10 items-center h-9 border border-orange-300">
                                <div className="flex flex-row w-full h-full">
                                    <input
                                        type="text"
                                        name="searchQuery"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-white w-5/6 rounded-l-full px-4 outline-none focus:bg-white"
                                        placeholder="Cari user ..."
                                    />
                                    <div className="flex w-1/5 h-full rounded-full bg-orange-400 hover:bg-orange-600 justify-center items-center" onClick={searchUser}>
                                        <button type="submit" className="flex w-full h-full rounded-r-full justify-center items-center">
                                            <FaMagnifyingGlass size={18} color="white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-1/2 h-full p-2 justify-end items-center mr-2">
                            <div className="flex py-2 px-6 rounded-full bg-orange-400 hover:bg-orange-500 gap-2 items-center justify-center cursor-pointer">
                                <FaPlus size={18} color="white" /> <span className="font-semibold text-white">Add User</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full h-full p-4 justify-center items-center mt-4">
                        <UserLists users={users} />
                    </div>
                    <div className="w-full flex flex-row py-3 justify-center items-center">
                        <UserPagination />
                    </div>
                </div>
            </div>
        </div>
    )
}