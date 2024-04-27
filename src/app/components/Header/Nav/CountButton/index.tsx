import { MouseEventHandler, useState } from 'react'
import styles from './styles.module.scss'

interface CountButtonProps {
  quantity: number
  decreaseQuantity: MouseEventHandler<HTMLButtonElement> | undefined
  increaseQuantity: MouseEventHandler<HTMLButtonElement> | undefined
}

const CountButton:React.FC<CountButtonProps> = ({quantity, increaseQuantity, decreaseQuantity}): JSX.Element => {

  return (
    <div className='flex items-center flex-col m-auto'>
      <label htmlFor='quantity' className={`mr-2 text-black self-start ${styles.qtdButton}`}>
        Qtd:
      </label>
      <div className='flex items-center border rounded-lg'>
        <button
          onClick={decreaseQuantity}
          className='px-3 py-1 bg-gray-200 rounded-l text-black'
        >
          -
        </button>
        <input
          type='text text-black'
          id='quantity'
          className={`w-8 text-center text-black `}
          value={quantity}
          readOnly
        />
        <button
          onClick={increaseQuantity}
          className='px-3 py-1 bg-gray-200 rounded-r text-black'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CountButton
