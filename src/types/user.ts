export enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  SELLER = 'seller',
}

export interface User {
  id: string
  name: string
  email: string
  role: Role
}
