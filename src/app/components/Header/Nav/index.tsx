import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import closeButton from '../../../assets/close-circle.svg'
import Image from 'next/image'
import { menuSlide } from '../anim'
import Curve from './Curve'
import { Title } from '../../Title'
import { useProductContext } from '../../context/ProductContextProvider'
import { Product } from '@/app/types'
import { Paragraph } from '../../Paragraph'
import CloseBlackButton from '../../../assets/close-black-circle.svg'
import CountButton from './CountButton'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface NavProps {
  onClose: () => void // Função de retorno de chamada para fechar a navegação
}

export const Nav = ({ onClose }: NavProps): JSX.Element => {
  const { selectedProducts, removeProduct } = useProductContext()
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity) // Atualiza a quantidade no estado do componente pai
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
              alt='Cart shopping'
              className='w-10 h-10 cursor-pointer'
              onClick={onClose}
            />
          </div>
        </div>
        <div className='overflow-x-hidden h-full flex flex-col'>
          <div className='p-6 overflow-y-auto'>
            {selectedProducts.map(
              ({ id, brand, name, price, photo }: Product) => (
                <>
                  <div className=''>
                    <Image
                      src={CloseBlackButton}
                      alt='Excluir mercadoria'
                      width={35}
                      height={35}
                      className={`ml-auto ${styles.exclueProduct} cursor-pointer`}
                      onClick={() => removeProduct(id)}
                    />
                  </div>
                  <div
                    key={id}
                    className='grid grid-cols-1 justify-center items-center md:grid-cols-4 bg-white rounded-lg md:items-center p-4'
                  >
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
                    <CountButton />
                    <Paragraph className='text-black font-extrabold m-auto'>
                      R${parseFloat(price) * quantity}{' '}
                    </Paragraph>
                  </div>
                </>
              )
            )}
          </div>
          <button
            className={`${styles.footer} w-full mt-auto`}
            onClick={() => window.location.reload()}
          >
            Finalizar Compra
          </button>
        </div>
      </div>

      <Curve />
    </motion.div>
  )
}
