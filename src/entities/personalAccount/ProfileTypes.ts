export interface ProfileDetailFromApi {
  id: number
  email: string
  username: string
  phone: string | null
}

export interface ProfileResponse extends ProfileDetailFromApi {}
