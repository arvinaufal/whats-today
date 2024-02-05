"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Report } from "notiflix";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function UserForm({ formType, postAdd, postEdit, userData }) {
    const router = useRouter()
    const [form, setForm] = useState({ name: '', status: '', email: '', gender: '' });
    const [pending, setPending] = useState(false);
    const handleAdd = async () => {
        const result = await postAdd(form);
        setPending(false);
        if (result === "success") {
            Report.success(
                'Sukses',
                'Berhasil tambah user',
                'Ok',
                () => {
                    router.push('/users');
                }
            );
        }
    }

    const handleEdit = async () => {
        const result = await postEdit(form);
        setPending(false);
        if (result === "success") {
            Report.success(
                'Sukses',
                'Berhasil ubah data user',
                'Ok',
                () => {
                    router.push('/users');
                }
            );
        }
    }

    useEffect(() => {
        if (userData) {
            setForm(userData);
        }
    }, [])

    return (
        <form>
            <div className="pb-1">
                <label htmlFor="name" className="opacity-90 text-sm">
                    Name
                </label>
            </div>
            <div className="relative pb-4">
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                    }}
                    className="focus:bg-orange-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                />
            </div>
            <div className="pb-1">
                <label htmlFor="email" className="opacity-90 text-sm">
                    Email
                </label>
            </div>
            <div className="relative pb-4">
                <input
                    type="text"
                    id="email"
                    value={form.email}
                    onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                    }}
                    className="focus:bg-orange-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                />

            </div>

            <div className="pb-1">
                <label htmlFor="status" className="opacity-90 text-sm">
                    Status
                </label>
            </div>
            <div className="relative pb-4">
                <select
                    id="status"
                    value={form.status}
                    onChange={(e) => {
                        setForm({ ...form, status: e.target.value });
                    }}
                    className="focus:bg-orange-100 focus:outline-none p-3 border-solid border-slate-800 rounded-lg w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="pb-1">
                <label htmlFor="gender" className="opacity-90 text-sm">
                    Gnder
                </label>
            </div>
            <div className="relative pb-4">
                <select
                    id="gender"
                    value={form.gender}
                    onChange={(e) => {
                        setForm({ ...form, gender: e.target.value });
                    }}
                    className="focus:bg-orange-100 focus:outline-none p-3 border-solid border-slate-800 rounded-lg w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>


            {
                pending
                    ?

                    <div className="h-12 rounded-xl justify-center content-center items-center cursor-pointer flex mt-4 bg-white opacity-40 disabled">
                        <span className="loading loading-spinner loading-md"></span>
                    </div>
                    :
                    <div className="h-12 bg-white rounded-xl justify-center content-center items-center cursor-pointer flex mt-4 hover:bg-slate-100 shadow-2xl" onClick={formType === 'tambah' ? () => { handleAdd(); setPending(true); } : () => { handleEdit(); setPending(true); }}>
                        <span className="font-bold text-orange-400 cursor-pointer">{formType === 'tambah' ? "Tambah" : "Edit"}</span>
                    </div>
            }
        </form>
    )
}