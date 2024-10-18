export default function Card({image,title,content,classname}:{
    image:string,title:string,content:string,classname?:string
})
{
    return( <div className={`group max-w-sm rounded overflow-hidden shadow-lg bg-white ${classname}`}>
        <img className="w-full duration-300 ease-in-out brightness-75 rounded-b-md shadow-lg group-hover:scale-105 group-hover:brightness-100" src={image} alt="Sample Image"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
           {content}
          </p>
        </div>
      </div>)
}