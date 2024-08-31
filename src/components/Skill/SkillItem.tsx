import { ISkill } from "../../interfaces/skill.interface"

type PropTypes = {
    skill:ISkill
}

export const SkillItem = ({skill:{name,content}}:PropTypes) => {
  return (
    <div className="flex flex-col gap-y-1">

        <h3 className="font-bold text-text-primary ">{name}</h3>

        <div className="flex gap-1 break-words flex-wrap">
            {content.map(item=><p key={item}>{item},</p>)}                 
        </div>

    </div>
  )
}
