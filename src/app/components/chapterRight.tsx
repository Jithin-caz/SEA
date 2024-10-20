import Heading from "./heading";
import { chapterData } from "../components/chapterdata"

interface ChapterRightProps {
  chapterTitle?: string;
}

export default function ChapterRight({ chapterTitle }: ChapterRightProps) {

   const selectedChapter = chapterData.find(
    (chapter) => chapter.heading.toLowerCase() === chapterTitle?.toLowerCase()
  );

  // If the chapter is not found, you can display a message or handle it accordingly
  if (!selectedChapter) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Chapter not found</p>
      </div>
    );
  }
  
  return (
    <div className="w-full min-h-screen z-[99] mt-16 p-5 bg-gray-100">
      <div className="px-2 sm:px-10 flex flex-col ml-0 lg:ml-72 mb-5">
        <Heading text1={selectedChapter.heading} text2="Chapter" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6 ml-0 lg:ml-72">
        {/* Left Section - Chapter Description */}
        <div className="col-span-2 h-full p-4 bg-white shadow-lg rounded-md">
          <p className="text-sm md:text-base mb-3 text-gray-700">
            {selectedChapter.para1}
          </p>
          <p className="text-sm md:text-base mb-3 text-gray-700">
            {selectedChapter.para2}
          </p>
          <div className="w-full flex items-center justify-center">
            <img
              src={selectedChapter.image}
              alt={selectedChapter.heading}
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section - Office Bearers and Contact Info */}
        <div className="col-span-1 w-2/3 lg:w-full h-full p-6 bg-white shadow-lg rounded-md">
          <h3 className="text-base md:text-lg font-bold mb-4 text-gray-800">
            Current Office Bearers
          </h3>
          {selectedChapter.officebearers.map((bearer, index) => (
            <div className="mb-4" key={index}>
              <p className="font-semibold text-gray-700">{bearer.heading}</p>
              <p className="pl-4 text-gray-600">{bearer.text}</p>
            </div>
          ))}

          <h4 className="text-base md:text-lg font-bold mt-8 mb-4 text-gray-800">
            Contact Address
          </h4>
          <p className="text-gray-600">{selectedChapter.address.position}</p>
          <p className="text-gray-600">{selectedChapter.address.name}</p>
          <p className="text-gray-600">{selectedChapter.address.address}</p>
          <p className="text-gray-600">{selectedChapter.address.city}</p>

          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Mob: </span>
              {selectedChapter.contact.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email: </span>
              {selectedChapter.contact.email}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Website: </span>
              <a
                href={`http://${selectedChapter.contact.website}`}
                className="underline text-blue-600"
              >
                {selectedChapter.contact.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
