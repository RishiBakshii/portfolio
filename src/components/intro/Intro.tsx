type PropTypes = {
    name:string,
    profile:string,
    shortDesc:string,
}

export const Intro = ({name,profile,shortDesc}:PropTypes) => {
  return (
    <div className="flex flex-col gap-y-4">
            
        <div className="flex flex-col gap-y-3 text-text-primary">
            <h1 className="font-bold text-5xl tracking-tight">{name}</h1>
            <h2 className="font-medium text-xl">{profile}</h2>
        </div>

        <p className="max-w-64 text-text-secondary">{shortDesc}</p>

    </div>
  )
}
