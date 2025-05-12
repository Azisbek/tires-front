interface CartItem {
  product: {
    product_Id: number
    title: string
    price: number
  }
  count: number
  image: (string | null)[]
  in_stock: number
  price: number
  product_Id: number
  title: string
}

interface Cart {
  cart_Id: number
  total_price: number
  subtotal: number
  promotion_total: number
  total_quantity: number
}

export interface CartData {
  cart: Cart
  cart_items: CartItem[]
}
