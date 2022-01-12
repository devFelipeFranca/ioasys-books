export interface ISignInHeader {
  logo: string
}

export interface IHeaderBooksCoreProps {
  logo: string
  userName: string
  logoutIcon: string
  logout: () => Promise<void>
}
