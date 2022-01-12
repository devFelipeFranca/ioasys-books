export interface IGetBookList {
  page: number
  amount?: number
  category?: string
}

export interface IGetBookById {
  bookId: string
}
