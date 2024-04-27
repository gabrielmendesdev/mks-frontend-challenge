import { Paragraph } from '@/app/components/Paragraph'
import Image from 'next/image'
import CountButton from '../CountButton'
import { Product } from '@/app/types'
import CloseBlackButton from '../../../../assets/close-black-circle.svg'
import { useProductContext } from '@/app/components/context/ProductContextProvider'
import styles from './styles.module.scss'
import { useState } from 'react'

export const ProductCartShoppingCard = ({
  photo,
  brand,
  name,
  id,
  price,
}: Product) => {
  const { removeProduct } = useProductContext()

  const [quantity, setQuantity] = useState<number>(1)

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  return (
    <div key={id}>
      <Image
        src={CloseBlackButton}
        alt='Excluir mercadoria'
        width={35}
        height={35}
        className={`ml-auto ${styles.exclueProduct} cursor-pointer`}
        onClick={() => removeProduct(id)}
      />
      <div className='grid grid-cols-1 justify-center items-center md:grid-cols-4 bg-white rounded-lg md:items-center p-4'>
        <Image
          className='rounded-lg m-auto'
          src={photo}
          width={90}
          height={90}
          priority
          alt='Foto do produto'
        />
        <Paragraph className='text-black font-medium m-auto'>
          {brand} {name}
        </Paragraph>
        <CountButton
          quantity={quantity}
          decreaseQuantity={handleDecrease}
          increaseQuantity={handleIncrease}
        />
        <Paragraph className='text-black font-extrabold m-auto'>
          R${parseFloat(price) * quantity}
        </Paragraph>
      </div>
    </div>
  )
}
