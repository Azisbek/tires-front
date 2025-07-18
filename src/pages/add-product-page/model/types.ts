export interface AddProductState {
  title: string
  model_description: string
  image1: File | null
  image2: File | null
  image3: File | null
  image4: File | null
  image5: File | null
  image6: File | null
  image7: File | null

  price: string
  negotiable: boolean

  promotion: string
  promotion_end_date: string

  in_stock: number
  profile: string
  diameter: string
  speed_index: string
  load_index: string
  load_index_for_double: string

  manufacturer: string
  model: string
  generation: string
  modification: string
  promotionCategory: string

  width: string
  fuel_efficiency: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  wet_grip: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  external_noise_level: number

  condition: boolean
  season: number
  tire_type: number
  body_type: number
  runflat: boolean
  off_road: boolean

  warranty: string
}
