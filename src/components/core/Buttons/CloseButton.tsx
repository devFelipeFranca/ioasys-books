import React from "react"
import { ICloseButtonProps } from "./@types"

import * as S from "./styles"

export const CloseButton = ({
  closeIcon,
  handleClick,
}: ICloseButtonProps): React.ReactElement => {
  return (
    <S.CloseButtonModal onClick={handleClick}>
      <img src={closeIcon} />
    </S.CloseButtonModal>
  )
}
