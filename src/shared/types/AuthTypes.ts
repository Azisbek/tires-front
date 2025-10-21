import { OrderData } from 'entities/personalAccount/types/types'

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

export interface GetMeApiResponse {
  UserMe: {
    order_history: OrderData[]
    user: UserTypes
  }
}

export interface UserTypes {
  id: number | null
  email: string
  username: string
  phone: string
}

export interface SignInErrorTypes {
  error: string
  detail: string
}
