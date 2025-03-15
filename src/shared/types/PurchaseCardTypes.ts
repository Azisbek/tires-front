export interface PurchaseCardProps {
  id?: number
  price: number
  promotion: number
  quantity: number
  guarantee: string
  children?: React.ReactNode
  className?: string
}
