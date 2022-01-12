import React from "react"
import { IInformationListProps } from "./@types"

const InformationItem = ({
  text,
  information,
}: IInformationListProps): React.ReactElement => {
  return (
    <div>
      <h4>{text}</h4>
      <p>{information}</p>
    </div>
  )
}

export default InformationItem
