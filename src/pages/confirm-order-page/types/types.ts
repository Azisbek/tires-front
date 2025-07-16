import { CartItemType } from 'shared/types/CartTypes'

export interface ConfirmOrderFormProps {
  first_name: string
  last_name: string
  phone: string
  email: string
  address: string
  payment_cash: boolean
  payment_online: boolean
  pickup: boolean
  delivery: boolean
}

export interface ConfirmOrderErrorProps {
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
}

export interface SuccessOrderDataTypes {
  address: string
  applications: boolean
  created_at: string
  delivery: boolean
  email: string
  first_name: string
  id: number
  items: CartItemType[]
  last_name: string
  payment_cash: boolean
  payment_online: boolean
  phone: string
  pickup: boolean
  user: number
}
