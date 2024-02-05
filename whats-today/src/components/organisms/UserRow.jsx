"use client"
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa6";
import { useUserPage } from "@/context";
import Link from "next/link";


export default function UserRow({ user, index, deleteUser }) {
    const page = useUserPage((state) => state.page);
    async function handleDeleteUser() {
        await deleteUser(user.id)
    }
    return (
        <tr>
            <td className="border border-slate-300 p-2 text-center">{((page - 1) * 10) + index + 1}</td>
            <td className="border border-slate-300 p-2">{user.name}</td>
            <td className="border border-slate-300 p-2">{user.email}</td>
            <td className="border border-slate-300 p-2 text-center">{user.gender}</td>
            <td className="border border-slate-300 p-2 text-center">{user.status}</td>
            <td className="border border-slate-300 p-2">
                <div className="w-full h-full flex flex-row justify-center items-center gap-6">
                    <Link href={`/users/${user.id}`} className="flex px-8 py-2 bg-orange-400 rounded-full hover:bg-orange-600 cursor-pointer">
                        <HiPencilSquare size={18} color="white" />
                    </Link>
                    <div className="flex px-8 py-2 bg-orange-400 rounded-full hover:bg-orange-600 cursor-pointer" onClick={handleDeleteUser}>
                        <FaTrash size={18} color="white" />
                    </div>
                </div>
            </td>
        </tr>
    )
}