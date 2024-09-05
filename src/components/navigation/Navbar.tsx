
export const Navbar = () => {
  return (
    <ul className="flex flex-col gap-4 uppercase text-text-secondary text-sm font-medium tracking-wide">
        <a href="#about" className="cursor-pointer hover:text-text-primary">About</a>
        <a href="#experience" className="cursor-pointer hover:text-text-primary">Experience</a>
        <a href="#projects" className="cursor-pointer hover:text-text-primary">Projects</a>
        <a href="#blogs" className="cursor-pointer hover:text-text-primary">Blogs</a>
    </ul>
  )
}
