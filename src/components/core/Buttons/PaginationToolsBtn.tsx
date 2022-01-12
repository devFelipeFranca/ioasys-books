import React from "react"
import { IPaginationToolsBtnProps } from "./@types"

import * as S from "./styles"

const PaginationToolsBtn = ({
  handleClick,
  buttonIcon,
}: IPaginationToolsBtnProps): React.ReactElement => {
  return (
    <S.PaginationToolsBtn onClick={handleClick}>
      <img src={buttonIcon} alt="Uma ferramenta de paginação" />
    </S.PaginationToolsBtn>
  )
}

export default PaginationToolsBtn
