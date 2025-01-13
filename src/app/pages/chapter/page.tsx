"use client";
import ChapterRight from "@/app/components/chapterRight";
import ChapterSideBar from "@/app/components/chapterSideBar";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";

export default function ChapterPage() {
  function Chapter() {
    const searchParams = useSearchParams(); // Get search params
    const title = searchParams.get("title"); // Extract the "title" query parameter
    const [open, setOpen] = useState(false); // State for sidebar visibility

    return (
      <div className="relative w-dvw min-h-dvh flex flex-col items-center justify-center z-40">
        {/* Toggle button for opening sidebar */}
        <FaAnglesRight
          onClick={() => setOpen(true)}
          className="block lg:hidden text-black absolute left-0 top-20 text-4xl z-[999]"
        />

        {/* Sidebar and Chapter content */}
        <ChapterSideBar open={open} setOpen={setOpen} />
        <ChapterRight chapterTitle={title || undefined} />
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Chapter />
    </Suspense>
  );
}
