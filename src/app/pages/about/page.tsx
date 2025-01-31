import Heading from "@/app/components/heading";
import Newsletter from "@/app/components/newsletter";
import RiseUpText from "@/app/components/risingtext";



export default function About()
{
    return(
      <>
        <section className=" pt-32 p-2 grid grid-cols-5">
          <div className=" px-2 sm:px-10 flex flex-col col-span-5 md:col-span-4">
            <RiseUpText>
              <Heading text1={"About"} text2={"SEA"}/></RiseUpText> 
            <RiseUpText>
            <p className=" mt-10">
              The Space Engineers Association (SEA) is a professional organization that brings together engineers working in the ISRO. SEA aims to promote the advancement of space technology, provide a platform for knowledge sharing and collaboration, and support the well being and social development of its members through  gatherings, cultural programmes, tours, insurance etc. SEA also provides a platform for the grievance redressal of its members in genuine service related matters. 
            </p>
          </RiseUpText>
       <br /><br />
          <RiseUpText>
          <Heading text1={"Objectives"}/>
          </RiseUpText>
       <RiseUpText>
          <ul className=" mb-16">
            <li className=" list-disc list-inside my-0.5">
              Foster collaboration and innovation among ISRO engineers
            </li>
            <li className=" list-disc list-inside my-0.5">
              Promote professional development and continuing education
            </li>
            <li className=" list-disc list-inside my-0.5">
              Advocate for policies and initiatives supporting the ISRO community 
            </li>
            <li className=" list-disc list-inside my-0.5">
              Recognize excellence and achievements in space engineering
            </li>
            <li className=" list-disc list-inside my-0.5">
              Promote innate talents of its members and their families through cultural programmes
            </li>
          </ul>
       </RiseUpText>
      
          <br />
          <RiseUpText>
          <Heading text1={"Activities"}/>
          </RiseUpText>
        <RiseUpText>
          <ul className=" mb-16">
            <li className=" list-disc list-inside my-0.5">
              Workshops and seminars on space-related topics
            </li>
            <li className=" list-disc list-inside my-0.5">
              Technical publications
            </li>
            <li className=" list-disc list-inside my-0.5">
              Professional development courses and training programs
            </li>
            <li className=" list-disc list-inside my-0.5">
              SEA cultural day programme - Aarohan
            </li>
          </ul>
       </RiseUpText>
        </div> 
             
        </section>
        <Newsletter />
      </>
    )
}