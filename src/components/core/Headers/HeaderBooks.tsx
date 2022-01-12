import React from "react"
import { IHeaderBooksCoreProps } from "./@types"

const HeaderBooksCore = ({
  logo,
  userName,
  logoutIcon,
  logout,
}: IHeaderBooksCoreProps): React.ReactElement => {
  return (
    <>
      <h1>
        <img src={logo} alt="Logo da empresa ioasys" /> Books
      </h1>
      <h2>
        <p>
          Bem vindo, <strong>{`${userName}!`}</strong>
        </p>
        <button onClick={logout}>
          <img src={logoutIcon} alt="Botão para realizar logout" />
        </button>
      </h2>
    </>
  )
}

export default HeaderBooksCore
