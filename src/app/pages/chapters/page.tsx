"use client"
import Heading from "@/app/components/heading";
import { useRouter } from "next/navigation";

export default function Chapters() {

    const router = useRouter();

    interface Chapter {
        src: string;
        logo: string;
        title: string;
        description: string;
    }

    const chapters: Chapter[] = [
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Trivandrum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Two",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Three",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Four",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Five",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Four",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Four",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Four",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
        {
            src: "https://media.gettyimages.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=gi&k=20&c=c4CLbODYqs_Qf2wtWPWxOWYOFr6jlc_tze7d__q50xQ=",
            logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
            title: "Chapter Four",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor.",
        },
    ];

    const handleChapterClick = (title: string) => {
        // Navigate to /pages/chapter with the chapter title as a query parameter
        router.push(`/pages/chapter?title=${encodeURIComponent(title)}`);
    };

    return (
        <section className="pt-36 p-5 flex flex-col gap-8">
            {/* Heading Section */}
            <div className="px-2 sm:px-10 flex flex-col">
                <Heading text1="Chapters" text2="" />
                <p className="mt-4 text-gray-700">
                    NSARM has progressively developed with headquarters at Thiruvananthapuram and chapters spread across India. INSARM fulfils its objectives through these chapters, which provide a social platform for personnel involved in the field of mechanisms to offer technological interchange and promote R&D.
                </p>
            </div>

            {/* Chapters Section */}
            <div className="flex items-center justify-center w-full mt-8">
                <div className="flex flex-row w-full lg:w-4/5 overflow-x-auto gap-5">
                    {chapters.map((chapter : Chapter, index : number) => (
                        <div key={index} className="w-[300px] h-[450px] flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={chapter.src} alt={chapter.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={chapter.logo} alt={`${chapter.title} logo`} className="w-12 h-12 rounded-full" />
                                    <h3 className="text-lg font-bold">{chapter.title}</h3>
                                </div>
                                <p className="text-gray-600">{chapter.description}</p>
                            </div>
                            <div className=" px-4">
                                <button 
                                    className=" w-1/2 h-10 bg-violet-700 hover:opacity-80 rounded-md text-white"
                                    onClick={() => handleChapterClick(chapter.title)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
