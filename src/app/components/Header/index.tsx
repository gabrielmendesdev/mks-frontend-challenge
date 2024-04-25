import { Title } from '../Title'
import { motion } from 'framer-motion'
import cartShopping from '../../assets/cart-shopping.svg'
import './styles.scss'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className='w-100 h-20 header flex items-center justify-between px-20'>
      <div className='flex'>
        <Title className='text-white logo'>MKS</Title>
        <Title className='text-white ml-2 mt-4 font-light'>Sistemas</Title>
      </div>
      <div className='flex'>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className='shopping-cart w-20 h-10 bg-white m-auto border-0'
        >
          <div className='w-full h-full flex p-3'>
            <div className='w-1/2 flex items-center justify-center'>
              <Image priority src={cartShopping} alt='Cart shopping' width={20} />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
            0
            </div>
          </div>
        </motion.button>
      </div>
    </header>
  )
}
