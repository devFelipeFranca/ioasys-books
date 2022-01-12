export interface IBookCard {
  id: string
  imageUrl: string
  title: string
  authors: string[]
  pageCount: number
  publisher: string
  published: number
  showInModal: (e: any) => void
}
