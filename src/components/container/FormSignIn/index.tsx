import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSignInSchema } from "./validation"
import { InputForm } from "../../core/Inputs/InputForm"
import { useAuth } from "../../../context/hooks/auth"

import * as S from "./styles"
import "cooltipz-css"

export const FormSignIn = (): React.ReactElement => {
  const history = useHistory()
  const { submitForm, isErrors, setIsErrors, authorized } = useAuth()

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSignInSchema),
  })

  useEffect(() => {
    const keys = Object.keys(errors)
    if (keys.length !== 0) {
      setIsErrors(true)
      clearErrors()
    }
  }, [errors])

  useEffect(() => {
    if (isErrors) {
      setTimeout(() => setIsErrors(false), 3500)
    }
  }, [isErrors])

  useEffect(() => {
    if (authorized) {
      history?.push("/books")
    }
  }, [authorized])

  return (
    <S.FromContainer onSubmit={handleSubmit(submitForm)}>
      <InputForm type="email" label="Email" register={register} />
      <InputForm
        type="password"
        label="Senha"
        register={register}
        showButton={true}
        buttonText="Entrar"
      />

      {isErrors && (
        <div
          aria-label="Email e/ou senha incorretos"
          className={`tooltip cooltipz--bottom-left cooltipz--fit cooltipz--visible`}
        />
      )}
    </S.FromContainer>
  )
}

export default FormSignIn
