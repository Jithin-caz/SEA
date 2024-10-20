"use client";
import { FaAnglesLeft } from "react-icons/fa6";
import ChapterSideHeading from "./chapterSideHeading";

// Define proper types for props
export default function ChapterSideBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (openState: boolean) => void; // Correct type for setOpen
}) {
  const sideText = [
    {
      heading: "About INSARM",
      subheading: [
        { text: "INSARM Origin", link: "" },
        { text: "Objectives & Activities", link: "" },
      ],
    },
    {
      heading: "National Governing Council",
      subheading: [
        { text: "About NGC", link: "" },
        { text: "Office bearers", link: "" },
      ],
    },
    {
      heading: "Chapters",
      subheading: [
        { text: "Trivandrum", link: "/pages/chapter?title=Trivandrum" },
        { text: "Bengaluru", link: "/pages/chapter?title=Bengaluru" },
        { text: "Pune", link: "/pages/chapter?title=Pune" },
        { text: "Hyderabad", link: "/pages/chapter?title=Hyderabad" },
        { text: "Agra", link: "/pages/chapter?title=Agra" },
      ],
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 p-8 pt-20 z-40 flex h-dvh w-72 flex-col items-start justify-start overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`} // Use 'open' for sidebar visibility
    >
      <FaAnglesLeft
        onClick={() => setOpen(false)}
        className="block lg:hidden text-white absolute right-4 top-20 text-4xl"
      />

      {/* Loop through sideText and pass the heading and subheading */}
      {sideText.map((text, index) => (
        <ChapterSideHeading key={index} text={text} />
      ))}
    </aside>
  );
}
