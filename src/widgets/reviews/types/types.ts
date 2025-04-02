export interface CommentTypes {
  id: number
  productId: number
  comment: string
  rating: number
  created_at: string
}

export interface ProductCommentsResponse {
  count: number
  next: string | null
  previous: string | null
  results: CommentTypes[]
}
