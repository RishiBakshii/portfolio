import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ExperienceCard
            duration="Oct 2023 - Dec 2023"
            companyName="Hell Bent Softwares"
            role="Full Stack Developer"
            companyWebsiteLink="https://hellbent.in/"
            techStack={["Mern","Redux-toolkit","Typescript",]}
            desc={<p>I enhanced system performance by ,<strong>reducing API response times by up to 35% through REST API integration and aggregate pipelines </strong>. Collaborated with a cross-functional team to improve code quality and streamline development.</p>}
            jobType="Internship"
        />
    </div>
  )
}
