import React from "react"

import FormSignIn from "../../components/FormSignIn"

import Logo from "../../assets/icons/Logo.svg"

import * as S from "./styles"

export const SignIn = (): React.ReactElement => {
  return (
    <S.SignInContainer>
      <div className="login-container_title">
        <h1>
          <img src={Logo} alt="Logo da empresa ioasys" /> Books
        </h1>
        <FormSignIn />
      </div>
    </S.SignInContainer>
  )
}

export default SignIn
