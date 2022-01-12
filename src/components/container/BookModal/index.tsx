import React from "react"
import { IBookModalProps } from "./@types"
import { CloseButton } from "../../core/Buttons/CloseButton"

import CloseIcon from "../../../assets/icons/Close.svg"
import Quotes from "../../../assets/icons/Quotes.svg"

import * as S from "./styles"
import InformationItem from "../../core/InformationItem"

const BookModal = ({ data, close }: IBookModalProps): React.ReactElement => {
  return (
    <S.BookModalContainer>
      <S.CloseButtonModalContainer>
        <CloseButton closeIcon={CloseIcon} handleClick={close} />
      </S.CloseButtonModalContainer>
      <S.BookModal>
        <S.ImageContainer>
          <img src={data?.imageUrl} />
        </S.ImageContainer>
        <div>
          <S.TitleContainer>
            <h1>{data?.title}</h1>
            <h3>{data?.authors?.join(", ")}</h3>
          </S.TitleContainer>
          <S.InformationContainer>
            <h2>INFORMAÇÕES</h2>
            <S.InformationSubContainer>
              <InformationItem
                text={"Páginas"}
                information={`${data?.pageCount} páginas`}
              />
              <InformationItem text={"Editora"} information={data?.publisher} />
              <InformationItem
                text={"Publicação"}
                information={data?.published}
              />
              <InformationItem text={"Idioma"} information={data?.language} />
              <InformationItem
                text={"Título Original"}
                information={data?.title}
              />
              <InformationItem text={"ISBN-10"} information={data?.isbn10} />
              <InformationItem text={"ISBN-13"} information={data?.isbn13} />
            </S.InformationSubContainer>
          </S.InformationContainer>
          <S.ReadJoker>
            <h2>RESENHA DA EDITORA</h2>
            <span>
              <img src={Quotes} />
              <p>{data?.description}</p>
            </span>
          </S.ReadJoker>
        </div>
      </S.BookModal>
    </S.BookModalContainer>
  )
}

export default BookModal
