import React from "react"
import PaginationToolsBtn from "../../core/Buttons/PaginationToolsBtn"
import { IPaginationTools } from "./@types"

import NextPageIcon from "../../../assets/icons/Next.svg"
import PrevPageIcon from "../../../assets/icons/Prev.svg"

import * as S from "./styles"

export const PaginationTools = ({
  currentPage,
  amountPages,
  beforePage,
  nextPage,
}: IPaginationTools): React.ReactElement => {
  return (
    <S.PaginationToolsContainer>
      <S.CurrentPageInfo>
        Página <strong>{currentPage}</strong> de <strong>{amountPages}</strong>
      </S.CurrentPageInfo>
      <S.BtnPaginationToolsContainer>
        <PaginationToolsBtn
          handleClick={beforePage}
          buttonIcon={PrevPageIcon}
        />
        <PaginationToolsBtn handleClick={nextPage} buttonIcon={NextPageIcon} />
      </S.BtnPaginationToolsContainer>
    </S.PaginationToolsContainer>
  )
}
