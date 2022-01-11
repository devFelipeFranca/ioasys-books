import { getTokenFromLocalStorage } from "./localStorage"

export const getTokenJwt = async () => {
  const token: string = getTokenFromLocalStorage()
  return token
}
