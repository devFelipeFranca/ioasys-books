import React from "react"
import { IButtonSignIn } from "./@types"

import * as S from "./styles"

export const ButtonSignIn = ({ text }: IButtonSignIn): React.ReactElement => {
  return <S.ButtonContainer type="submit">{text}</S.ButtonContainer>
}

export default ButtonSignIn
