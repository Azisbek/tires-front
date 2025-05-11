export interface SignUpFormTypes {
  username: string
  email: string
  phone: string
  password: string
  confirm_password: string
}

export interface SignInFormTypes {
  email: string
  password: string
}

export interface GetMeResponse {
  id: number
  email: string
  username: string
  phone: string
}

export interface SignInErrorTypes {
  error: string
  detail: string
}
