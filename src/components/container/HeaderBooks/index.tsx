import React from "react"
import HeaderBooksCore from "../../core/Headers/HeaderBooks"
import { IHeaderBooksProps } from "./@types"

import * as S from "./styles"

export default function HeaderBooks({
  logo,
  userName,
  logoutIcon,
  logout,
}: IHeaderBooksProps): React.ReactElement {
  return (
    <S.HeaderBooksContainer>
      <HeaderBooksCore
        logo={logo}
        userName={userName}
        logoutIcon={logoutIcon}
        logout={logout}
      />
    </S.HeaderBooksContainer>
  )
}
