import React, { createContext, useCallback, useContext, useState } from "react"

import { signIn } from "../../../services/providers/auth"
import { removeTokenFromLocalStorage } from "../../../shared/func/deleteToken"
import { saveToken } from "../../../shared/func/saveToken"
import {
  IAuthContext,
  IAuthProvider,
  ISubmitFormData,
  IUserInfos,
} from "./@types"

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [isErrors, setIsErrors] = useState<boolean>(false)
  const [authorized, setAuthorized] = useState<boolean>(false)
  const [userInfos, setUserInfos] = useState<IUserInfos>({
    id: "",
    name: "",
    birthdate: "",
    gender: "",
  })

  const submitForm = useCallback(async (data: ISubmitFormData) => {
    const res = await signIn(data)
    if (res.success) {
      await saveToken("token", res.headers.authorization)
      await saveToken("refreshToken", res.headers["refresh-token"])

      setUserInfos(res.data)
      setAuthorized(true)
    }
    if (!res.success) setIsErrors(true)
  }, [])

  const logoutUser = useCallback(async () => {
    setIsErrors(false)
    setUserInfos({
      id: "",
      name: "",
      birthdate: "",
      gender: "",
    })
    removeTokenFromLocalStorage()
    setAuthorized(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        submitForm,
        userInfos,
        isErrors,
        setIsErrors,
        authorized,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
