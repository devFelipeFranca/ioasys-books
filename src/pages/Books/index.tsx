import React from "react"

import Logo from "../../assets/icons/LogoBlack.svg"
import Logout from "../../assets/icons/Logout.svg"
import BookCardList from "../../components/container/BookCardList"
import BookModal from "../../components/container/BookModal"
import HeaderBooks from "../../components/container/HeaderBooks"
import { PaginationTools } from "../../components/container/PaginationTools"
import { StoreBookSkeletons } from "../../components/container/StoreBookSkeletons"
import { useAuth } from "../../context/hooks/auth"
import { useStoreBook } from "../../context/hooks/books"

import * as S from "./styles"

export const Books = (): React.ReactElement => {
  const { userInfos, logoutUser } = useAuth()
  const {
    bookList,
    isLoading,
    pagesAmount,
    page,
    setPage,
    cleanStoreBook,
    setBookId,
    bookDetails,
    bookModal,
    closeBookDetailsModal,
  } = useStoreBook()

  const nextPage = () => {
    if (page < pagesAmount) {
      const aux: number = page + 1
      setPage(aux)
    }
  }

  const beforePage = () => {
    if (page > 1) {
      const aux: number = page - 1
      setPage(aux)
    }
  }

  const showInModal = (e: any) => {
    const { id } = e.target
    setBookId(id)
  }

  return (
    <S.BooksContainer>
      {bookModal && (
        <BookModal data={bookDetails} close={closeBookDetailsModal} />
      )}

      <HeaderBooks
        userName={userInfos.name}
        logo={Logo}
        logoutIcon={Logout}
        logout={async () => {
          cleanStoreBook(true)
          logoutUser()
        }}
      />
      <S.BookListContainer>
        {!isLoading ? (
          <BookCardList
            showInModal={(e) => showInModal(e)}
            bookList={bookList}
          />
        ) : (
          <StoreBookSkeletons />
        )}
      </S.BookListContainer>
      <PaginationTools
        currentPage={page}
        amountPages={pagesAmount}
        nextPage={nextPage}
        beforePage={beforePage}
      />
    </S.BooksContainer>
  )
}

export default Books
