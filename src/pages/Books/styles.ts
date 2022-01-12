import styled from "styled-components"

import BgBooks from "../../assets/images/bgBooks.png"

export const BooksContainer = styled.div`
  background-image: url(${BgBooks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;

  padding: 42px 0;
`

export const BookListContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  margin-left: 20px;

  transition: flex-wrap 0.3s;
`
