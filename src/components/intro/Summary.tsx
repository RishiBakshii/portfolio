import { ReactNode } from "react"

type PropTypes = {
    summary:ReactNode
}

export const Summary = ({summary}:PropTypes) => {
  return (
    <div className="leading-8 break-words">
        {summary}
    </div>
  )
}
