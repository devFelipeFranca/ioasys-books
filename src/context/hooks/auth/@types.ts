export interface ISubmitFormData {
  email: string
  password: string
}

export interface IUserInfos {
  id: string
  name: string
  birthdate: string
  gender: string
}

export interface IAuthContext {
  submitForm: (data: ISubmitFormData) => void
  userInfos: IUserInfos
  isErrors: boolean
  setIsErrors: (value: boolean) => void
  authorized: boolean
}

export interface IAuthProvider {
  children: any
}
