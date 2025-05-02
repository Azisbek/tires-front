export interface ApplicationProduct {
  title: string
  total_price: number
}

export interface ApplicationData {
  id_order: number
  first_name: string
  last_name: string
  product: ApplicationProduct[]
}
