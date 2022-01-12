import styled from "styled-components"

export const HeaderBooksContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  width: calc(100% - 10%);
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    font: 300 28px/40px "Heebo";

    color: #333333;

    img {
      margin-right: 17px;
    }
  }
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    font: normal 12px/16px "Heebo";
    strong {
      margin-left: 5px;
    }

    button,
    button:hover {
      cursor: pointer;

      margin-left: 16px;

      width: 32px;
      height: 32px;

      background: none;
      border: none;
    }
    @media (max-width: 520px) {
      p {
        display: none;
      }
    }
  }
`
