import { Paragraph } from '../../Paragraph'
import styles from './styles.module.scss'

interface PriceContentProps {
  price: string
}

export const PriceContent = ({ price }: PriceContentProps): JSX.Element => {
  return (
    <div className={`${styles.priceContent} flex items-center justify-center h-8 min-w-max lg:col-span-1`}>
      <Paragraph className='text-white font-bold'>R${price}</Paragraph>
    </div>
  )
}
