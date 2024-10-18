interface HeadingProps {
    text1: string;
    text2?: string;
  }
export default function Heading({text1,text2}: HeadingProps)
{
    return (
        <div className="text-gray-800 flex flex-wrap gap-2  w-fit bebas-neue-regular text-7xl">
        <div> {text1}</div>
        {text2&&<div className=" md:ml-3 bg-gray-800 text-white px-3  w-fit rounded-md h-fit py-1"> {text2}</div> }
    </div>
    )

}