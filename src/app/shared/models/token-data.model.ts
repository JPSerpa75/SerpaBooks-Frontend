export interface TokenData {
  decode: {
     exp: number
     id: number
     iss: string
     role: string
     sub: string
  }
  expire: Date
  isExpired: boolean
}
