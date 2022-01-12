import { removeLocalStorage } from "./localStorage"

export const removeTokenFromLocalStorage = () => {
  removeLocalStorage("token")
  removeLocalStorage("refresh-token")
}
