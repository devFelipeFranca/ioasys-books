import { request } from "../../api"
import { EHttpCode, EHttpMethod, IApiResult } from "../../api/@types"
import { IRefreshToken, ISignIn } from "./@types"

export const signIn = async ({
  email,
  password,
}: ISignIn): Promise<IApiResult> => {
  const body: ISignIn = {
    email,
    password,
  }
  const url = "/auth/sign-in"
  return await request(url, EHttpCode.OK, EHttpMethod.POST, body)
}

export const refreshToken = async ({ token }: IRefreshToken) => {
  const body = {
    refreshToken: token,
  }
  const url = "/auth/refresh-token"
  return await request(url, EHttpCode.OK, EHttpMethod.POST, body)
}
