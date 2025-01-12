export default function NewsLetterThumbnail({ link, month }: {link: string, month: string}) {
  return (
    <div className="relative w-96 h-64 bg-red-800 rounded-md">
        <a href={link} className=" w-full h-full absolute left-0 top-0"></a>
        <div className="absolute bottom-6 w-full flex items-center justify-center flex-row gap-3">
            <img src="/images/Logo/logo.png" alt="" className=" h-12" />
            <h6 className=" text-white text-xl font-bold">NewsLetter {month}</h6>
        </div>
    </div>
  )
}