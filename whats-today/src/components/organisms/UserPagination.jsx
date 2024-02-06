"use client"
import {
    IoArrowForwardOutline,
    IoArrowBackOutline,
} from "react-icons/io5";
import { useEffect } from "react";
import { useUserPage } from "@/context";
import { useSearchParams } from 'next/navigation'

export default function UserPagination() {
    const setPage = useUserPage((state) => state.setPage);
    const page = useUserPage((state) => state.page);
    const searchParams = useSearchParams();
    const pageQuery = searchParams.get('page');

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        if (page - 1 === 0) {
            setPage(1);
        } else {
            setPage(page - 1);
        }
    }

    useEffect(() => {
        if (pageQuery !== null && pageQuery * 1 > 0) {
            if (pageQuery * 1 !== page) {
                setPage(pageQuery * 1);
            }
        } else {
            setPage(1);
        }
    }, [pageQuery]);

    return (
        <div className="flex flex-row justify-center items-center  gap-4">
            <div className="flex bg-orange-400 cursor-pointer shadow-2xl p-2 rounded-full hover:bg-orange-600" onClick={prevPage}>
                <IoArrowBackOutline size={24} color="white" />
            </div>
            <div className="flex w-10 bg-orange-400 cursor-pointer shadow-2xl px-3 py-2 rounded-xl justify-center items-center hover:bg-orange-600">
                <span className="font-semibold text-white">{page}</span>
            </div>
            <div className="flex bg-orange-400 cursor-pointer shadow-2xl p-2 rounded-full hover:bg-orange-600" onClick={nextPage}>
                <IoArrowForwardOutline size={24} color="white" />
            </div>
        </div>
    )
}
