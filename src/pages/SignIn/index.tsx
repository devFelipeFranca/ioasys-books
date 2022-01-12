import React from "react"

import FormSignIn from "../../components/container/FormSignIn"
import SignInHeader from "../../components/core/Headers/SignInHeader"

import Logo from "../../assets/icons/LogoWhite.svg"

import * as S from "./styles"

export const SignIn = (): React.ReactElement => {
  return (
    <S.SignInContainer>
      <S.Main>
        <SignInHeader logo={Logo} />
        <FormSignIn />
      </S.Main>
    </S.SignInContainer>
  )
}

export default SignIn
