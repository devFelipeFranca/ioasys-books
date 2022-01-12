import styled from "styled-components"

export const BookCardContainer = styled.section`
  cursor: pointer;

  max-width: 272px;
  max-height: 160px;

  width: 100%;
  height: 100%;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-space-between;
  align-items: center;

  padding: 16px;

  margin: 0 16px 16px 0;
  @media (max-width: 610px) {
    min-width: 272px;
    min-height: 160px;

    max-width: none;
    max-height: none;

    width: 100%;
    height: 100%;
  }
`

export const ImageContainer = styled.picture`
  max-width: 81px;
  max-height: 122px;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));

  margin-right: 16px;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    color: transparent;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-height: 125px;
  height: 100%;
`

export const BookInfos = styled.div`
  h1 {
    font: 500 14px/20px "Heebo";
    color: #333333;
  }
  h3 {
    font: 400 12px/20px "Heebo";
    color: #ab2680;
  }
`

export const BookDetails = styled.div`
  p {
    font: 400 12px/20px "Heebo";
    color: #999999;
  }
`
