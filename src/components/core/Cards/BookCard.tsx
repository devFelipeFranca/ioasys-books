import React from "react"
import { IBookCard } from "./@types"

import * as S from "./styled"

const BookCard = ({
  id,
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
  showInModal,
}: IBookCard): React.ReactElement => {
  return (
    <S.BookCardContainer id={id} onClick={showInModal} className="fade-in">
      {imageUrl && (
        <S.ImageContainer id={id}>
          <img src={imageUrl} id={id} alt="imagem da capa do livro" />
        </S.ImageContainer>
      )}
      <S.InfosContainer id={id}>
        <S.BookInfos id={id}>
          <h1 id={id}>{title}</h1>
          <h3 id={id}>{authors}</h3>
        </S.BookInfos>
        <S.BookDetails id={id}>
          <p id={id}>{pageCount} páginas</p>
          <p id={id}>{publisher}</p>
          <p id={id}>Publicado em {published}</p>
        </S.BookDetails>
      </S.InfosContainer>
    </S.BookCardContainer>
  )
}

export default BookCard
