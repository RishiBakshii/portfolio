import { ISkill } from "../../interfaces/skill.interface"
import { SkillItem } from "./SkillItem"

type PropTypes = {
    skills:Array<ISkill>
}

export const SkillList = ({skills}:PropTypes) => {
  return (
    <div className="flex flex-col gap-y-4">
        {
            skills.map((skill,index)=>(
                <SkillItem key={index} skill={skill}/>
            ))
        }
    </div>
  )
}
