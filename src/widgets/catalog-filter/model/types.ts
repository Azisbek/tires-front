export type FilterState = {
  width: string
  profile: string
  diameter: string
  minPrice: number
  maxPrice: number
  tiresType: string[]
  season: string[]
  condition: boolean
  manufacturer: string[]
  promotion: boolean
  runflat: boolean
  minLoadIndex: number
  maxLoadIndex: number
  minNoiseLevel: number
  maxNoiseLevel: number
  speedIndex: string
  fuel_efficiency: string[]
  off_road: boolean
  wet_grip: string[]
}

export interface FilterData {
  seasons: string[]
  manufacturers: string[]
  tire_types: string[]
  conditions: boolean[]
  fuel_efficiency: Record<string, string>
  wet_grip: Record<string, string>
  min_price: number
  max_price: number
  min_load_index: string
  max_load_index: string
  min_noise_level: number
  max_noise_level: number
  widths: string[]
  profiles: string[]
  diameters: string[]
  speed_indexes: string[]
  runflat: boolean[]
  off_road: boolean[]
  promotion: boolean[]
}
