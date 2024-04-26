import { useState } from 'react'
import styles from './styles.module.scss'

const CountButton = () => {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

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
