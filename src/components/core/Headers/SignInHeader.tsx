import React from "react"
import { ISignInHeader } from "./@types"

const SignInHeader = ({ logo }: ISignInHeader): React.ReactElement => {
  return (
    <h1>
      <img src={logo} alt="Logo da empresa ioasys" /> Books
    </h1>
  )
}

export default SignInHeader
