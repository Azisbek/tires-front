export interface CartTypesApi {
  cart: CartType
  cart_items: CartItemType[]
}

export interface CartType {
  cart_Id: number
  ordered: boolean
  promotion_total: number
  subtotal: number
  total_price: number
  total_quantity: number
}

export interface CartItemType {
  image: string[]
  count: number
  in_stock: number
  price: number
  product_Id: number
  title: string
}
