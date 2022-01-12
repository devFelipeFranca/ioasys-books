import styled from "styled-components"

export const BookModalContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  position: absolute;

  z-index: 2;

  margin: -42px 0;
  padding: 16px;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

export const CloseButtonModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
`

export const BookModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 48px;
  margin: 0 auto;

  max-width: 769px;

  width: 100%;

  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;

  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`
export const ImageContainer = styled.div`
  max-width: 349px;
  max-height: 512px;

  width: 100%;
  height: 100%;

  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  margin-right: 48px;
  img {
    @media (max-width: 769px) {
      max-width: 349px;
      max-height: 512px;

      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 769px) {
    margin-right: 0;
  }
`

export const TitleContainer = styled.div`
  h1 {
    font: 500 28px/40px "Heebo";
    color: #333333;
  }
  h3 {
    font: 400 12px/20px "Heebo";
    color: #ab2680;
  }
`

export const InformationContainer = styled.div`
  margin-top: 32px;
  h2 {
    font: 500 12px/20px "Heebo";
    color: #333333;
    margin-bottom: 10px;
  }
`
export const InformationSubContainer = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h4 {
      font: 500 12px/28px "Heebo";
      color: #333333;
    }

    p {
      font: 400 12px/20px "Heebo";
      color: #999999;
    }
  }
`

export const ReadJoker = styled.div`
  h2 {
    margin-top: 15px;
    margin-bottom: 10px;
    font: 500 12px/30px "Heebo";
    color: #333333;
  }
  span {
    max-height: 130px;

    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 0 5px 5px 0;
    }
    &::-webkit-scrollbar-thumb {
      background: #ebebeb;
      border-radius: 5px;
      margin: 5px;
    }
    img {
      float: left;
      margin-right: 5px;
    }

    p {
      font: 400 12px/20px "Heebo";
      color: #999999;
    }
  }
`
