import { TechStackCard } from "./TechStackCard"


type PropTypes = {
    techStack:Array<string>
}

export const TechStackList = ({techStack}:PropTypes) => {
  return (
    <div className="flex gap-2 flex-wrap">
        {
            techStack.map(techName=><TechStackCard key={techName} techName={techName}/>)
        }
    </div>
  )
}
