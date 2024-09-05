import { ReactNode } from "react"
import { ArrowUpRight } from "../ui/icons/ArrowUpRight"

type PropTypes = {
    image:string,
    title:string,
    desc:ReactNode,
    liveLink:string,
}

export const BlogCard = ({desc,image,title,liveLink}:PropTypes) => {
  return (
    <div className="max-md:flex-col flex gap-6 px-6 max-sm:px-0 py-3 rounded-md max-sm:hover:bg-inherit hover:bg-slate-800 hover:cursor-pointer hover:shadow-sm  hover:shadow-black transition-all">

        <img src={image} className="max-md:w-[auto] w-[15rem] aspect-auto object-contain self-start" alt="Project Image" />

        <div className="flex flex-col gap-y-3">

            <div className="flex items-center gap-x-4">
                <h3 className="text-text-primary font-semibold text-lg">{title}</h3>
                <div className="flex items-center gap-x-3">
                  <a target="_blank" href={liveLink}><ArrowUpRight size={29}/></a>
                </div>
            </div>

            <p>{desc}</p>

        </div>

    </div>
  )
}
