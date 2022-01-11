import { LOCAL_STORAGE_NAME } from "../constants/localStorage"

export const saveLocalStorage = (key: string, value: any) => {
  localStorage.setItem(`${LOCAL_STORAGE_NAME}${key}`, value)
}

export const getLocalStorage = (key: string) =>
  localStorage.getItem(`${LOCAL_STORAGE_NAME}${key}`)

export const removeLocalStorage = (key: string) =>
  localStorage.removeItem(`${LOCAL_STORAGE_NAME}${key}`)

export const getTokenFromLocalStorage = () => {
  const token = getLocalStorage("token") || ""
  return token
}

export const saveTokenOnLocalStorage = (key: string, value: string) => {
  return saveLocalStorage(key, value)
}
