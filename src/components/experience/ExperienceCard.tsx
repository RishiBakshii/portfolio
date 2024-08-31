import { ReactNode } from "react"
import { TechStackList } from "../TechStack/TechStackList"

type jobType = "Internship" | "Job"

type PropTypes = {
    duration:string,
    companyName:string,
    role:string
    desc:ReactNode,
    jobType:jobType,
    companyWebsiteLink?:string,
    techStack:Array<string>,
}

export const ExperienceCard = ({duration,desc,techStack,role,companyWebsiteLink,companyName,jobType}:PropTypes) => {
  return (
    <div className="max-sm:flex-col flex gap-y-3 gap-x-7 px-6 max-sm:px-0 py-3 rounded-md max-sm:hover:bg-inherit hover:bg-slate-800 hover:cursor-pointer hover:shadow-sm  hover:shadow-black transition-all">

        <p className="text-text-secondary/70 uppercase font-semibold text-xs shrink-0">{duration}</p>

        <div className="flex flex-col gap-y-4">
            
            <div className="flex flex-col gap-y-2">

                <div className="self-start flex flex-col font-medium gap-y-[.7px]">
                    <div className="font-bold flex items-center justify-center self-start text-text-primary gap-x-2">
                        <p>{jobType}</p>
                        <div className="bg-text-primary size-[2px] rounded-full "></div>
                        <a target="_blank" href={companyWebsiteLink}><p>{companyName}</p></a>
                    </div>
                    <p className="font-semibold">{role}</p>
                </div>

                <p>{desc}</p>
            </div>

            <TechStackList techStack={techStack}/>
        </div>

    </div>
  )
}
