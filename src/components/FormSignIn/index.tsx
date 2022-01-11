import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSignInSchema } from "./validation"

import ButtonSignIn from "../buttons/ButtonSignIn"

import * as S from "./styles"
import "cooltipz-css"
import { useAuth } from "../../context/hooks/auth"

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
      setTimeout(() => setIsErrors(false), 2000)
    }
  }, [isErrors])

  useEffect(() => {
    if (authorized) {
      history?.push("/books")
    }
  }, [authorized])

  return (
    <S.FromContainer onSubmit={handleSubmit(submitForm)}>
      <div className="input-form_login">
        <label htmlFor="">Email</label>
        <input autoComplete="off" type="email" {...register("email")} />
      </div>

      <div className="input-form_login">
        <label htmlFor="">Senha</label>
        <div>
          <input autoComplete="off" type="password" {...register("password")} />
          <ButtonSignIn />
        </div>
      </div>

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
