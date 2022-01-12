import React from "react"
import BookCard from "../../core/Cards/BookCard"
import { BookCardListProps } from "./@types"

const BookCardList = ({
  bookList,
  showInModal,
}: BookCardListProps): React.ReactElement => {
  return (
    <>
      {bookList?.map((book: any, index: number, arr: any[]) => {
        return (
          <BookCard
            id={book.id}
            showInModal={showInModal}
            key={`${book.id}:${index}`}
            imageUrl={book.imageUrl}
            title={book.title}
            authors={book.authors?.join(", ")}
            pageCount={book.pageCount}
            publisher={book.publisher}
            published={book.published}
          />
        )
      })}
    </>
  )
}

export default BookCardList
