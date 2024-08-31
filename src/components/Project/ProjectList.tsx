import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ProjectCard
            image="https://github.com/RishiBakshii/Baatchit-Modern-Chat-Application/raw/main/images/groupChatCreation.png"
            desc={<p>Baatchit is a secure, real-time messaging app with <strong>end-to-end encryption, private key recovery</strong>, and <strong>push notifications</strong>. It offers features like ,<strong>friends, group chats, message editing, reactions, file sharing, and OAuth integration</strong>, all within a Progressive Web App for a seamless, native-like experience.</p>}
            title="Baatchit-Realtime-Chat"
            githubLink="https://github.com/RishiBakshii/Baatchit-Modern-Chat-Application"
            liveLink="https://baatchit.online/"
            techStack={["Mern","Redux-Toolkit","Rtk-Query","Typescript","Cloudinary","Tailwind","Socket.io","AWS","Firebase-push-notifications","Framer-Motion"]}
        />
    </div>
  )
}
