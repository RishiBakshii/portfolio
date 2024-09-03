import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ProjectCard
            image="https://github.com/RishiBakshii/Baatchit-Modern-Chat-Application/raw/main/images/groupChatCreation.png"
            desc={<p>Baatchit is a secure, real-time messaging app with <strong>end-to-end encryption, private key recovery</strong>, and <strong>push notifications</strong>. It offers features like ,<strong>friends, group chats, message editing, reactions, file sharing, and OAuth integration</strong>, all within a Progressive Web App for a seamless, native-like experience.</p>}
            title="End-To-End-Encrypted chat application"
            githubLink="https://github.com/RishiBakshii/mern-chat-end-to-end-encrypted"
            liveLink="https://baatchit.online/"
            techStack={["Mern","Redux-Toolkit","Rtk-Query","Typescript","Cloudinary","Tailwind","Socket.io","AWS","Firebase-push-notifications","Framer-Motion"]}
        />
        <ProjectCard
            image="https://github.com/RishiBakshii/mern-ecommerce/blob/main/frontend/src/assets/images/front.png?raw=true"
            desc={<p>A robust MERN stack e-commerce application featuring <strong>CRUD operations with extensive state management.</strong> Users can browse products, <strong>filter by brand or price</strong>, manage <strong>wishlists with custom notes</strong> and place orders with <strong>multiple address options.</strong> <strong>Admins can edit/add or delete products, manage order status</strong>, and oversee reviews. Additional features include <strong>order history</strong>, <strong>repeat orders</strong> and <strong>product ratings with reviews.</strong></p>}
            title="Mern ecommerce"
            githubLink="https://github.com/RishiBakshii/mern-ecommerce"
            liveLink="https://mern-ecommerce-frontend-gamma.vercel.app/"
            techStack={["Mern","Redux-Toolkit","Material UI"]}
        />
    </div>
  )
}
