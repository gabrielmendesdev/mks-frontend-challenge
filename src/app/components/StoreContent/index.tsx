import { Product, ProductData } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProductCard } from '../ProductCard'
import styles from './styles.module.scss'

async function fetchProducts() {
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  )
  return res.data
}

export const StoreContent: React.FC = (): JSX.Element => {
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
    <div className={`${styles.storeContainer} container pt-36 h-max m-auto`}>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-0 h-max'>
        {data.products.map(({ id, name, photo, brand, description, price }: Product) => (
          <ProductCard key={id} photo={photo} name={name} brand={brand} description={description} id={id} price={price}/>
        ))}
      </ul>
    </div>
  )
}