import { Product, ProductData } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProductCard } from '../ProductCard'
import styles from './styles.module.scss'
import Loading from '../Loading'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  )
  return res.data
}

export function StoreContent() {
  const [divPosition, setDivPosition] = useState(0)

  const controls = useAnimation();
  const handleClick = async () => {
    await controls.start({ y: 100 }); // Inicia a animação
    await controls.start({ y: 100, transition: { delay: 2.5 } });
    await controls.start({ y: -100 }); // Torna a div invisível após a animação
  }

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
    <div className={`${styles.storeContainer} container h-max m-auto`}>
      <div className={`w-full ${styles.alertCointainer}`}>
        <motion.div
          initial={{ y: 0 }} // Posição inicial
          animate={controls}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
          className={`p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 fixed ${styles.alert}`}
          role='alert'
        >
          <span className='font-medium'>
            Parabéns! você adicionou um novo item ao carrinho com sucesso.
          </span>
        </motion.div>
      </div>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-0 h-max  pt-28'>
        {data.products.map(
          ({ id, name, photo, brand, description, price }: Product) => (
            <ProductCard
              key={id}
              product={{
                id: id,
                name: name,
                brand: brand,
                description: description,
                price: price,
                photo: photo,
              }}
              onClick={handleClick}
            />
          )
        )}
      </ul>
    </div>
  )
}
