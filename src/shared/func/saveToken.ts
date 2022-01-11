import { saveTokenOnLocalStorage } from "./localStorage"

export const saveToken = async (key: string, value: string) => {
  return saveTokenOnLocalStorage(key, value)
}
