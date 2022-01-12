import styled from "styled-components"

import BgSignIn from "../../assets/images/bgSignIn.png"

export const SignInContainer = styled.div`
  background-image: url(${BgSignIn});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

export const Main = styled.main`
  padding-top: 35vh;
  margin-left: 10%;

  transition: margin-left 0.3s;

  width: 100%;

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    font: 300 28px/40px "Heebo";

    color: #ffffff;

    img {
      margin-right: 17px;
    }
  }
  @media (max-width: 540px) {
    margin-left: 5%;
    transition: margin-left 0.3s;
  }
`
