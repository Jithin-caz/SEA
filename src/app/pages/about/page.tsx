import Heading from "@/app/components/heading";
import RiseUpText from "@/app/components/risingtext";



export default function About()
{
    return(
        <section className=" pt-32 p-2 grid grid-cols-5">
        <div className=" px-2 sm:px-10 flex flex-col col-span-5 md:col-span-4">
       <RiseUpText><Heading text1={"About"} text2={"SEA"}/></RiseUpText> 
       <RiseUpText>
       <p className=" mt-10">
        
        Indian National Society for Aerospace and Related Mechanisms (INSARM), a non-profit
         professional body was founded in 1998 with Headquarters at Thiruvananthapuram, Kerala. 
         The primary objective of the society is to promote, evolve and stimulate interest in mechanisms 
         related to aerospace and defense applications The society fosters Research & Development activity on
          aerospace and related mechanisms and bolsters a feeling of fellowship among the members of the society.
        </p>
       </RiseUpText>
        
       <br /><br />
       <RiseUpText>
       <p className=" mb-16">The society encourages widespread dissemination of knowledge and skills gained through research and experience in R&D
         institutions on mechanisms through collaborative research, seminars, conferences, workshops, journals and other aids. The
          society also identify thrust areas for new research on mechanism and promote activities related to design and development of the same.</p>
       </RiseUpText>
       
          <RiseUpText>
          <Heading text1={"Orgin"}/>
          </RiseUpText>
       <RiseUpText>
       <p className=" mt-10">INSARM Owes its origin to enduring vision of Shri.MK Abdul Majeed, an eminent scientist from Vikram Sarabhai Space Centre,
         ISRO, Trivandrum, with a vast experience in the field of aerospace and related mechanisms.With his desire to interlink and bring 
         together the scientific community working on space and defence related mechanisms all over Indian and abroad on a sharing platform ,the first 
         national level seminar on Aerospace and Related Mechanisms (ARMS) was conducted in 1985 at Vikram Sarabhai Space Centre (VSSC), Thiruvananthapuram. 
         With the participation of 38 organizations and publication of numerous technical papers, the need to have inter-link and close ties among the scientific
          community was articulated, with a vision for venturing into a resolute platform.</p>
       </RiseUpText>
      
          <br />
          <RiseUpText>
       <p className=" mt-10">INSARM Owes its origin to enduring vision of Shri.MK Abdul Majeed, an eminent scientist from Vikram Sarabhai Space Centre,
         ISRO, Trivandrum, with a vast experience in the field of aerospace and related mechanisms.With his desire to interlink and bring 
         together the scientific community working on space and defence related mechanisms all over Indian and abroad on a sharing platform ,the first 
         national level seminar on Aerospace and Related Mechanisms (ARMS) was conducted in 1985 at Vikram Sarabhai Space Centre (VSSC), Thiruvananthapuram. 
         With the participation of 38 organizations and publication of numerous technical papers, the need to have inter-link and close ties among the scientific
          community was articulated, with a vision for venturing into a resolute platform.</p>
       </RiseUpText>
        </div>
      
        </section>
    )
}