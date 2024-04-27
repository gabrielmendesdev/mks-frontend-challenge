import { Title } from '../Title'
import { AnimatePresence, motion } from 'framer-motion'
import cartShopping from '../../assets/cart-shopping.svg'
import Image from 'next/image'
import { useState } from 'react'
import styles from './styles.module.scss'
import { Nav } from './Nav'
import { useProductContext } from '../context/ProductContextProvider'

export const Header: React.FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  

  const handleNavClose = () => {
    setIsActive(false)
  }

  const { selectedProducts } = useProductContext()

  return (
    <>
      <header className='w-full h-20 header flex items-center justify-between px-10 md:px-20 fixed'>
        <div className='flex'>
          <Title className='text-white logo'>MKS</Title>
          <Title className='text-white ml-2 mt-4 font-light'>Sistemas</Title>
        </div>
        <div className='flex'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${styles.shoppingCart} w-20 h-10 bg-white m-auto border-0`}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => setIsActive(!isActive)}
          >
            <div className='w-full h-full flex p-3'>
              <div className='w-1/2 flex items-center justify-center'>
                <Image
                  priority
                  src={cartShopping}
                  alt='Cart shopping'
                  className='w-full h-full'
                />
              </div>
              <div className='w-1/2 flex items-center justify-center'>{selectedProducts.length}</div>
            </div>
          </motion.button>
        </div>
      </header>
      <AnimatePresence mode='wait'>
        {isActive && <Nav onClose={handleNavClose} />}
      </AnimatePresence>
    </>
  )
}
