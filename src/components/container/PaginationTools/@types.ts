export interface IPaginationTools {
  currentPage: number
  amountPages: number
  nextPage: () => void
  beforePage: () => void
}
