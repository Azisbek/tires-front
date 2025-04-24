export interface UserData {
  id: number
  email: string
  username: string
  phone: string
}

export interface OrderData {
  id_order: number
  total_price: number
  date_order: string
}

export interface OrderItem {
  product_title: string
  price: number
  count: number
}

export interface ProfileResponseApi {
  count: number
  next: string | null
  previous: string | null
  UserMe: {
    user: {
      id: number
      email: string
      username: string
      phone: string
    }
    order_history: OrderData[]
  }
}

export interface OrderDetails {
  order_id: number
  created_at: string
  total_quantity: number
  sub_total: number
  promotion_total: number
  total_price: number
  items: OrderItem[]
}
