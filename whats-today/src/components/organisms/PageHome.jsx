"use client"
import {
    IoArrowForwardOutline,
    IoArrowBackOutline,
} from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import { usePage } from "@/context";
import { useSearchParams } from 'next/navigation'

export default function PageHome() {
    const router = useRouter();
    const setPage = usePage((state) => state.setPage);
    const page = usePage((state) => state.page);
    const searchParams = useSearchParams();
    const pageQuery = searchParams.get('page');

    const nextPage = () => {
        setPage(page + 1);
        router.push(`/?page=${page + 1}`);
    }

    const prevPage = () => {
        if (page - 1 === 0) {
            setPage(1);
            router.push(`/?page=1`);
        } else {
            setPage(page - 1);
            router.push(`/?page=${page - 1}`);
        }
    }

    useEffect(() => {
        if (pageQuery !== null && pageQuery * 1 > 0) {
            if (pageQuery * 1 !== page) {
                setPage(pageQuery * 1);
            }
        } else {
            router.push(`/?page=${1}`);
        }
    }, [pageQuery])
    return (
        <div className="flex flex-row justify-center items-center  gap-4">
            <div className="flex bg-white cursor-pointer shadow-2xl p-2 rounded-full" onClick={prevPage}>
                <IoArrowBackOutline size={24} color="orange" />
            </div>
            <div className="flex w-10 bg-white cursor-pointer shadow-2xl px-3 py-2 rounded-xl justify-center items-center">
                <span className="font-semibold text-orange-400">{page}</span>
            </div>
            <div className="flex bg-white cursor-pointer shadow-2xl p-2 rounded-full" onClick={nextPage}>
                <IoArrowForwardOutline size={24} color="orange" />
            </div>
        </div>
    )
}
