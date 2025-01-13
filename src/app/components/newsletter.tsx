import Heading from "./heading";
import NewsLetterThumbnail from "./NewsLetterThumnail";
import RiseUpText from "./risingtext";

export default function Newsletter() {

    const newsletters = [
        {
            month: "January 2022", 
            link: "/newsletter/News_Jan22.pdf"
        },
        {
            month: "September 2022", 
            link: "/newsletter/News_Sep22.pdf"
        },
        {
            month: "September 2023", 
            link: "/newsletter/News_Sep23.pdf"
        },
        {
            month: "November 2023", 
            link: "/newsletter/News_Nov23.pdf"
        },
        {
            month: "March 2024", 
            link: "/newsletter/News_Mar24.pdf"
        },
        {
            month: "August 2024", 
            link: "/newsletter/News_Aug24.pdf"
        },
    ]

  return (
    <section className=" min-h-dvh w-screen p-6 md:p-12 lg:p-20">
        <RiseUpText>
            <Heading text1={"SEA"} text2={"NewsLetters"}/>
        </RiseUpText> 
        <div className=" py-4 px-1 grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                newsletters.map((newsletter, index) => (
                    <NewsLetterThumbnail key={index} link={newsletter.link} month={newsletter.month} />
                ))
            }
        </div>
    </section>
  )
}
