import { request } from "../../api"
import { IApiResult } from "../../api/@types"
import { IGetBookById, IGetBookList } from "./@types"

export const getBookList = async ({
  page = "1",
  amount = "",
  category = "",
}: IGetBookList): Promise<IApiResult> => {
  const queryAmount = amount ? `&amount=${amount}` : ""
  const queryCategory = category ? `&category=${category}` : ""
  const url = `/books?page=${page}${queryAmount}${queryCategory}`
  return await request(url)
}

export const getBookById = async ({
  bookId = "",
}: IGetBookById): Promise<IApiResult> => {
  const url = `/books/${bookId}`
  return await request(url)
}
