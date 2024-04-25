export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
}

export interface ProductData {
  products: Product[]
  count: number
}