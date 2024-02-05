"use server"
import Navbar from "@/components/organisms/Navbar";
import Page from "@/components/organisms/PageHome";
import Posts from "@/components/templates/Posts";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div className="w-screen min-h-screen items-center bg-orange-200">
      <div className="flex flex-col w-full items-center md:pb-10">
        <Navbar />
        <Suspense fallback={<div>Loading ...</div>} >
          <Posts />
        </Suspense>
      </div>
      <div className="flex w-full justify-center items-center py-4">
        <Page />
      </div>
    </div>
  );
}
