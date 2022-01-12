import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { getBookList } from "../../../services/providers/books"
import { useAuth } from "../auth"
import { IStoreBookContext, IStoreBookProvider } from "./@types"

const StoreBookContext = createContext<IStoreBookContext>(
  {} as IStoreBookContext
)

export const StoreBookProvider: React.FC<IStoreBookProvider> = ({
  children,
}) => {
  const [bookList, setBookList] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [pagesAmount, setPagesAmount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [bookDetails, setBookDetails] = useState<any>({})
  const [bookModal, setBookModal] = useState<boolean>(false)
  const [bookId, setBookId] = useState<string>("")

  const { authorized } = useAuth()

  const findBookById = useCallback(async () => {
    const book = bookList?.find((book) => book.id === bookId)
    setBookDetails(book)
    setBookModal(true)
  }, [bookId])

  const fetchBookList = useCallback(async () => {
    setIsLoading(true)

    const res = await getBookList({
      page: page,
      amount: 12,
    })

    if (res.success) {
      const { data, totalItems, totalPages } = res.data
      setBookList(data)
      setPagesAmount(Math.round(totalPages))
      setTotalCount(totalItems)
      setIsLoading(false)
    }
  }, [page])

  const cleanStoreBook = useCallback(async (clean: boolean) => {
    if (clean) {
      setBookList([])
      setPage(1)
      setTotalCount(0)
      setPagesAmount(0)
      setIsLoading(true)
    }
  }, [])

  const closeBookDetailsModal = () => {
    setBookModal(false)
    setBookDetails({})
    setBookId("")
  }

  useEffect(() => {
    if (bookId) {
      findBookById()
    }
  }, [bookId])

  useEffect(() => {
    if (authorized) fetchBookList()
  }, [authorized])

  useEffect(() => {
    if (page > 0 && page <= pagesAmount) {
      fetchBookList()
    }
  }, [page])

  return (
    <StoreBookContext.Provider
      value={{
        bookList,
        cleanStoreBook,
        isLoading,
        page,
        pagesAmount,
        setBookList,
        setPage,
        totalCount,
        setBookId,
        bookDetails,
        bookModal,
        closeBookDetailsModal,
      }}
    >
      {children}
    </StoreBookContext.Provider>
  )
}

export const useStoreBook = () => {
  const context = useContext(StoreBookContext)
  return context
}
