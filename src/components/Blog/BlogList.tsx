import { BlogCard } from "./BlogCard"

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-y-6">
            <BlogCard
                desc={<p>In this blog, I cover critical thinking on <strong>state placement—does it belong here?</strong> 🤔 Can your app handle the re-renders? I also dive into using <strong>custom hooks for cleaner, maintainable code</strong>, while discussing the <strong>Single Responsibility Principle, SOLID principles, and key design patterns for scalable React apps</strong>. 💡 Plus, I explain the roles of <strong>Feature, UI, Page, and Compound components</strong>. 🚀 <br /> <br />I guarantee this blog will help you transition from junior-level to mid-to-senior level coding! 📈</p>}
                image="https://cdn.hashnode.com/res/hashnode/image/upload/v1725524106168/2bd72e8f-d77c-4e3a-9feb-825e81102584.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                liveLink="https://rishibakshi.hashnode.dev/"
                title="Master Design Patterns In React"
            />
    </div>
  )
}
