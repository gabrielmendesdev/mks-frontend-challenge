import { Product, ProductData } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProductCard } from '../ProductCard'
import styles from './styles.module.scss'
import Loading from '../Loading'

async function fetchProducts() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  )
  return res.data
}

export function StoreContent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  })

  if (isPending) {
    return (
      <div className='h-dvh flex items-center justify-center'>
        <Loading />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='h-dvh flex items-center justify-center'>
        <span className='mt-50'>Error: {error.message}</span>
      </div>
    )
  }

  return (
    <div className={`${styles.storeContainer} container pt-36 h-max m-auto`}>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-0 h-max'>
        {data.products.map(
          ({ id, name, photo, brand, description, price }: Product) => (
            <ProductCard
              key={id}
              photo={photo}
              name={name}
              brand={brand}
              description={description}
              id={id}
              price={price}
            />
          )
        )}
      </ul>
    </div>
  )
}
