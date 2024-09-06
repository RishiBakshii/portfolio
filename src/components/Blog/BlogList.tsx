import { BlogCard } from "./BlogCard"

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-y-6">
            <BlogCard
                desc={<p>This series covers strategic state placement and using custom hooks to write cleaner, maintainable code. It dives into SOLID principles, design patterns, and explains the roles of Feature, UI, Page, and Compound components for scalable React apps.</p>}
                image="https://cdn.hashnode.com/res/hashnode/image/upload/v1725610643755/8826f6a2-5aef-4f56-abff-3f6c8922fbe0.png?w=800&fit=crop&crop=entropy&auto=compress,format&format=webp"
                liveLink="https://rishibakshi.hashnode.dev/series/master-design-patterns-in-react"
                title="Master Design Patterns In React Series"
            />
            <BlogCard
                desc={<p>This series uncovers common mistakes, misconceptions, and best practices in Next.js. Dive into real-world examples, tips, and optimizations to elevate your skills, enhance performance, and avoid pitfalls in your Next.js projects.</p>}
                image="https://cdn.hashnode.com/res/hashnode/image/upload/v1725630763201/32cc3a04-60e6-4edd-9784-63676a0b2839.png"
                liveLink="https://rishibakshi.hashnode.dev/series/you-dont-know-next-js"
                title="You Don't Know Next.js Series"
            />
    </div>
  )
}
