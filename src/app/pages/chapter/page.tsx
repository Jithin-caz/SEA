import ChapterSideBar from "@/app/components/chapterSideBar";
import Heading from "@/app/components/heading";

export default function page() {
  return (
    <div className=" w-dvw min-h-dvh flex flex-col items-center justify-center">
        <ChapterSideBar />
        <div className="w-full min-h-screen z-[99] mt-16 p-5 bg-gray-100">
            <div className="px-2 sm:px-10 flex flex-col ml-0 lg:ml-72 mb-5">
                <Heading text1="Trivandrum" text2="Chapter" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6 ml-0 lg:ml-72">
                <div className=" col-span-2 h-full p-4 bg-white shadow-lg rounded-md">
                    <p className="text-sm md:text-base mb-3 text-gray-700">
                      Thiruvananthapuram, capital of God&apos;s Own Country, Kerala, is situated in its southern tip. The city is blessed with long shorelines, beautiful beaches, backwaters, and historical structures. Besides being one of the fastest-growing cities, it also cradles many prominent research institutes of the country. It has also registered its stamp as a growing IT hub of southern India.
                    </p>
                    <p className="text-sm md:text-base mb-3 text-gray-700">
                      INSARM has its headquarters in Trivandrum. The Trivandrum chapter, a prominent chapter of INSARM, has conducted various National level seminars, conferences, and workshops with active participation from academia, industries, commercial organizations, and individual specialists. The Bi-monthly newsletter informs and educates the latest developments in mechanisms area.
                    </p>

                    <div className="w-full flex items-center justify-center">
                      <img 
                        src="https://insarm.org/images/chapters/img-trivandrum.jpg" 
                        alt="Trivandrum" 
                        className="rounded-lg shadow-md max-w-full h-auto" 
                      />
                    </div>
                </div>

                <div className=" col-span-1 w-2/3 lg:w-full h-full p-6 bg-white shadow-lg rounded-md">
                  <h3 className="text-base md:text-lg font-bold mb-4 text-gray-800">Current Office Bearers</h3>
                  <p className="mb-4 text-gray-600"><span className="font-semibold">Period: </span>2022 - 2023</p>

                  <div className="mb-4">
                    <p className="font-semibold text-gray-700">President:</p>
                    <p className="pl-4 text-gray-600">Shri. Subramanian UA</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-gray-700">Secretary:</p>
                    <p className="pl-4 text-gray-600">Shri. Shiju G Thomas</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-gray-700">Treasurer:</p>
                    <p className="pl-4 text-gray-600">Shri. Aasik V</p>
                  </div>

                  <h4 className="text-base md:text-lg font-bold mt-8 mb-4 text-gray-800">Contact Address</h4>
                  <p className="text-gray-600">Secretary</p>
                  <p className="text-gray-600">INSARM Thiruvananthapuram Chapter</p>
                  <p className="text-gray-600">Future Point Building, Edapazhanji Kochar Rd, Althara Nagar</p>
                  <p className="text-gray-600">Vellayambalam, Thiruvananthapuram, Kerala 695010</p>

                  <div className="mt-4">
                    <p className="text-gray-600"><span className="font-semibold">Mob: </span>9895415368</p>
                    <p className="text-gray-600"><span className="font-semibold">Email: </span>info@insarmtvm.in</p>
                    <p className="text-gray-600"><span className="font-semibold">Website: </span><a href="http://www.insarmtvm.in" className="underline text-blue-600">www.insarmtvm.in</a></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
