import React from "react"

import * as S from "./styles"
import * as SK from "../../core/Skeletons"

export const StoreBookSkeletons = (): React.ReactElement => {
  const renderArray = () => {
    const arr = Array(12).fill("lorem")
    return arr
  }

  return (
    <>
      {renderArray()?.map((item: string, index: number, arr: string[]) => {
        return (
          <S.BookCardSkeletonContainer key={`${item}:${index}`}>
            <SK.SquareCard />
          </S.BookCardSkeletonContainer>
        )
      })}
    </>
  )
}
