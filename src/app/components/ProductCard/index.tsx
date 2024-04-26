import { Product } from '@/app/types'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import { PriceContent } from './PriceContent'
import shoppingBag from '../../assets/bag-shopping.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useProductContext } from '@/app/components/context/ProductContextProvider'

export const ProductCard = (product: Product): JSX.Element => {
  const { name, description, brand, photo, price } = product
  const { addProduct } = useProductContext()

  const handleBuyBlick = () => {
    addProduct(product)
  }

  return (
    <li
      className={`${styles.cardContainer} rounded-2xl flex flex-col bg-white m-auto max-w-72 md:max-w-72 h-full`}
    >
      <Image
        src={photo}
        alt='Foto da mercadoria'
        width={500}
        height={500}
        className={`${styles.cardImage} m-3 mx-auto`}
        priority
      />
      <div className='px-4'>
        <div className='grid grid-cols-2 lg:grid-cols-3'>
          <Title className='font-medium mb-2 card-font-color lg:col-span-2'>
            {brand} {name}
          </Title>
          <PriceContent price={price} />
        </div>
      </div>
      <Paragraph
        className={`${styles.cardDescription} text-gray-700 mb-2 card-font-color mt-auto px-3`}
      >
        {description}
      </Paragraph>
      <button
        className={`${styles.purchaseButton} w-full text-white rounded-b-2xl p-1`}
        onClick={handleBuyBlick}
      >
        <div className='flex text-center justify-center gap-2'>
          <Image
            src={shoppingBag}
            alt='Foto da mercadoria'
            width={24}
            height={24}
            priority
          />
          <Paragraph className='font-medium '>COMPRAR</Paragraph>
        </div>
      </button>
    </li>
  )
}
