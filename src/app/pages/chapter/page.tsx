"use client";
import ChapterRight from "@/app/components/chapterRight";
import ChapterSideBar from "@/app/components/chapterSideBar";
import { useSearchParams } from "next/navigation";

export default function ChapterPage() {
  const searchParams = useSearchParams(); // Get search params
  const title = searchParams.get("title"); // Extract the "title" query parameter

  return (
    <div className="w-dvw min-h-dvh flex flex-col items-center justify-center">
      <ChapterSideBar />
      <ChapterRight chapterTitle={title || undefined} /> {/* Pass the title to ChapterRight */}
    </div>
  );
}
