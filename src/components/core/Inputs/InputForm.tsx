import React from "react"
import ButtonSignIn from "../Buttons/ButtonSignIn"
import { IInputForm } from "./@types"

import * as S from "./styles"

export const InputForm = ({
  type,
  label,
  register,
  showButton,
  buttonText,
}: IInputForm): React.ReactElement => {
  return (
    <S.InputSection className="input-form_login">
      <label htmlFor={type}>{label}</label>
      <div>
        <input autoComplete="off" type={type} {...register(type)} />
        {showButton && <ButtonSignIn text={buttonText || ""} />}
      </div>
    </S.InputSection>
  )
}
