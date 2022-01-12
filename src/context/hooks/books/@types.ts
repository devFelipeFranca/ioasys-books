export interface IStoreBookContext {
  bookList: any[]
  setBookList: (value: any[]) => void
  isLoading: boolean
  totalCount: number
  pagesAmount: number
  setPage: (value: number) => void
  page: number
  cleanStoreBook: (clean: boolean) => void
  setBookId: (bookId: string) => void
  bookDetails: any
  bookModal: boolean
  closeBookDetailsModal: () => void
}

export interface IStoreBookProvider {
  children: any
}
