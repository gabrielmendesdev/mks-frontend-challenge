'use client'

import axios from 'axios'
import { Header } from './components/Header'
import { useQuery } from '@tanstack/react-query'
import { Product, ProductData } from './types'

async function fetchProducts() {
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  )
  return res.data
}

function Products() {
  const result = useQuery<ProductData>({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  })

  const { data, status } = result

  if (status === 'pending') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error...</p>
  }

  return (
    <ul>
      {data.products.map((product: Product) => (
        <li key={product.id}>
          Nome: {product.name}, Marca: {product.brand}, Valor: {product.price}, Descrição: {product.description}
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  )
}
