type PropTypes = {
  techName:string
}

export const TechStackCard = ({techName}:PropTypes) => {
  return (
    <p 
      className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-300">
      {techName}
    </p>
  )
}
