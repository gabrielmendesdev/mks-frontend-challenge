import { Product, ProductData } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProductCard } from '../ProductCard'
import styles from './styles.module.scss'
import Loading from '../Loading'
import { useState } from 'react'
import { motion } from 'framer-motion'

async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  )
  return res.data
}

export function StoreContent() {
  const [divPosition, setDivPosition] = useState(0)
  const handleClick = () => {
    // Define a nova posição da div (descendo 200px)
    setDivPosition(280)

    // Após 2 segundos, volta para a posição inicial
    setTimeout(() => {
      setDivPosition(0)
    }, 2000) // Tempo em milissegundos (2000ms = 2 segundos)
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
    <div className={`${styles.storeContainer} container pt-28 h-max m-auto`}>
      <div className={`w-full items-center justify-center fixed ${styles.alertCointainer}`}>
        <motion.div
          initial={{ y: 0 }} // Posição inicial
          animate={{y: divPosition}}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          className={`p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 ${styles.alert}`}
          role='alert'
        >
          <span className='font-medium'>
            Parabéns! você adicionou um novo item ao carrinho com sucesso.
          </span>
        </motion.div>
      </div>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-0 h-max'>
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
