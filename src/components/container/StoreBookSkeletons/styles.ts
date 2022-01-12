import styled from "styled-components"

export const BookCardSkeletonContainer = styled.div`
  max-width: 272px;
  max-height: 160px;

  width: 100%;
  height: 100%;

  margin: 0 16px 16px 0;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  .ssc-square {
    height: 160px;
  }

  @media (max-width: 610px) {
    min-width: 272px;
    min-height: 160px;

    max-width: none;
    max-height: none;

    width: 100%;
    height: 100%;
  }
`
