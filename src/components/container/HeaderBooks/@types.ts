export interface IHeaderBooksProps {
  logo: string
  userName: string
  logoutIcon: string
  logout: () => Promise<void>
}
