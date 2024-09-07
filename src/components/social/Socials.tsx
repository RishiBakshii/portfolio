import { Github } from "../ui/icons/Github"
import { HashNodeIcon } from "../ui/icons/HashNodeIcon"
import { Linkedin } from "../ui/icons/Linkedin"
import { Twitter } from "../ui/icons/Twitter"

export const Socials = () => {
  return (
    <div className="flex gap-x-4 items-center">

        <a target="_blank" href="https://github.com/RishiBakshii">
          <Github size={40}/>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/rishi-bakshi/">
          <Linkedin size={40}/>
        </a>

        <a target="_blank" href="https://x.com/rishibakshiii">
          <Twitter size={35}/>
        </a>

        <a target="_blank" href="https://rishibakshi.hashnode.dev">
          <HashNodeIcon size={35}/>
        </a>

    </div>
  )
}
