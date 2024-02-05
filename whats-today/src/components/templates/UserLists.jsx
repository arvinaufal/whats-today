"use client"

import { getUsers } from "@/utils/getApi";
import UserRow from "../organisms/UserRow";

export default function UserLists({ users, deleteUser }) {
    // const users = await getUsers();

    return (
        <table className="w-full border border-slate-400 border-collapse">
            <thead>
                <tr>
                    <th className="border border-slate-400 p-2 w-auto bg-orange-300 text-white">#</th>
                    <th className="border border-slate-400 p-2 w-1/5 bg-orange-300 text-white">Name</th>
                    <th className="border border-slate-400 p-2 w-1/5 bg-orange-300 text-white">Email</th>
                    <th className="border border-slate-400 p-2 w-1/5 bg-orange-300 text-white">Gender</th>
                    <th className="border border-slate-400 p-2 w-1/5 bg-orange-300 text-white">Status</th>
                    <th className="border border-slate-400 p-2 w-1/5 bg-orange-300 text-white">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0
                        ?
                        users.map((user, index) => (
                            <UserRow user={user} key={index} index={index} deleteUser={deleteUser} />
                        ))
                        :
                        <tr className="collaps">
                            <td className="text-center py-8 italic font-bold" colSpan="6">Tidak ada data ditemukan</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}