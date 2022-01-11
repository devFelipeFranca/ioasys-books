import axios, { AxiosInstance } from "axios"
import { getTokenJwt } from "../../shared/func/getTokenJwt"
import { REACT_APP_API_URL } from "../environment"
import { EHttpCode, EHttpMethod, IApiResult } from "./@types"

const createApi = async (): Promise<AxiosInstance> => {
  const tokenJWT = await getTokenJwt()
  const api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${tokenJWT}`,
    },
  })
  return api
}

export const request = async (
  resource: string,
  successCode: EHttpCode = EHttpCode.OK,
  method: EHttpMethod = EHttpMethod.GET,
  body?: any
): Promise<IApiResult> => {
  const api: any = await createApi()

  const result = <IApiResult>{}

  try {
    const res = await api[method](resource, body)
    result.success = res.status === successCode
    result.code = res.status
    result.description = res.statusText
    result.headers = res?.headers
    result.data = res?.data
  } catch (err) {
    const error: any = err
    result.success = false
    result.code = error.response.status
    result.description = error.message
    result.headers = null
    result.data = error.response.data
    console.log(result)
  } finally {
    return result
  }
}
