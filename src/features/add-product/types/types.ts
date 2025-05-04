export interface ProductFormState {
  title: string
  price: string
  negotiable: boolean
  promotion: string
  promotion_end_date: string
  model_description: string
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
  fuel_efficiency: string
  wet_grip: string
  external_noise_level: number
  condition: number
  season: number
  tire_type: string
  body_type: string
  runflat: boolean
  off_road: boolean
  warranty: string
  image1: File | null
  image2: File | null
  image3: File | null
  image4: File | null
  image5: File | null
  image6: File | null
  image7: File | null
}
