import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import closeButton from '../../../assets/close-circle.svg'
import cartXMark from '../../../assets/cart-xmark.svg'
import Image from 'next/image'
import { menuSlide } from '../anim'
import Curve from './Curve'
import { Title } from '../../Title'
import { useProductContext } from '../../../context/ProductContextProvider'
import { Product } from '@/app/types'
import { ProductCartShoppingCard } from './ProductCartShoppingCard'
import { useState } from 'react'
import { Paragraph } from '../../Paragraph'

interface NavProps {
  onClose: () => void // Função de retorno de chamada para fechar a navbar
}

export const Nav = ({ onClose }: NavProps): JSX.Element => {
  const { selectedProducts, setSelectedProducts } = useProductContext()
  const [totalValueProductList, setTotalValueProductList] = useState({})

  //Armazena o preço total de cada produto por seu id
  const updateTotalValueById = (id: number, totalValue: number) => {
    setTotalValueProductList((prevTotalValues) => ({
      ...prevTotalValues,
      [id]: totalValue,
    }))
  }

  //Soma o valor de todos os produtos dentro do objeto totalValueProductListe retorna o valor total
  const getTotalSum = () => {
    const totalValues = Object.values(totalValueProductList)
    return totalValues.reduce((accumulator: number, currentValue: unknown) => {
      if (typeof currentValue === 'number') {
        return accumulator + currentValue
      }
      return accumulator
    }, 0)
  }

  const clearCartShopping = () => {
    setSelectedProducts([])
    setTotalValueProductList({})
  }

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={`${styles.body}`}>
        <div className='flex w-full p-5'>
          <div
            className={`${styles.header} flex items-center justify-center w-1/2`}
          >
            <Title className={styles.title}>Carrinho de compras</Title>
          </div>
          <div className='w-1/2 flex items-center justify-end'>
            <Image
              priority
              src={closeButton}
              alt='Fechar o carrinho de compras'
              className='w-10 h-10 cursor-pointer'
              onClick={onClose}
            />
          </div>
        </div>
        <div className='overflow-x-hidden h-full flex flex-col'>
          <div
            onClick={() => clearCartShopping()}
            className='flex items-center justify-center cursor-pointer w-max m-5 p-1 border rounded-lg'
          >
            <Image
              priority
              src={cartXMark}
              alt='Fechar o carrinho de compras'
              className='w-6 h-6 cursor-pointer mx-2'
              onClick={onClose}
            />
            <p className='text-xs'>REMOVER TODOS OS PRODUTOS</p>
          </div>
          <div className='px-6 overflow-y-auto'>
            {selectedProducts.map(
              ({ id, brand, name, price, photo, description }: Product) => (
                <ProductCartShoppingCard
                  key={id}
                  product={{
                    brand,
                    description,
                    name,
                    price,
                    photo,
                    id,
                  }}
                  updateTotalValueById={updateTotalValueById}
                />
              )
            )}
          </div>
          <div className='mt-auto'>
            <div className='p-6 flex justify-between'>
              <Paragraph className='max-w-max text-xl'>Total:</Paragraph>
              <Paragraph className='max-w-max text-xl'>R${getTotalSum()}</Paragraph>
            </div>
            <button
              className={`${styles.footer} w-full mt-auto`}
              onClick={() => window.location.reload()}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>

      <Curve />
    </motion.div>
  )
}
