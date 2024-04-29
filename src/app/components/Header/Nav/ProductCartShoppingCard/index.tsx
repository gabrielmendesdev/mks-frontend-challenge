/* eslint-disable react-hooks/exhaustive-deps */
import { Paragraph } from '@/app/components/Paragraph'
import Image from 'next/image'
import CountButton from '../CountButton'
import { Product } from '@/app/types'
import CloseBlackButton from '../../../../assets/close-black-circle.svg'
import { useProductContext } from '@/app/context/ProductContextProvider'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

interface ProductCartShoppingCardProps {
  product: Product
  updateTotalValueById: (id: number, totalValue: number) => void
}

export const ProductCartShoppingCard: React.FC<ProductCartShoppingCardProps> = ({ product, updateTotalValueById }) => {
  const { removeProduct } = useProductContext()
  const { brand, id, name, photo, price } = product

  const [quantity, setQuantity] = useState<number>(1)

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  let totalValue = parseFloat(price) * quantity

  useEffect(() => {
    // Chama a função de atualização do componente pai
    updateTotalValueById(id, totalValue)
  }, [totalValue])

  //Remove o produto da lista e corrige o valor total do carrinho
  const removeProductUpdateValues = (id: number) => {
    updateTotalValueById(id, 0)
    removeProduct(id)
  }

  return (
    <div key={id}>
      <Image
        src={CloseBlackButton}
        alt='Excluir mercadoria'
        width={35}
        height={35}
        className={`ml-auto ${styles.exclueProduct} cursor-pointer`}
        onClick={() => removeProductUpdateValues(id)}
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
          R${totalValue}
        </Paragraph>
      </div>
    </div>
  )
}
