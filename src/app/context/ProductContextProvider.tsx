import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@/app/types'

interface ProductContextType {
  selectedProducts: Product[]
  addProduct: (product: Product) => void | boolean
  removeProduct: (productId: number) => void
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const ProductContext = createContext<ProductContextType>({
  selectedProducts: [],
  addProduct: () => {},
  removeProduct: () => {},
  setSelectedProducts: () => []
})

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    // Verifica se o produto já está na lista
    const isProductAlreadySelected = selectedProducts.some(
      (selectedProduct) => selectedProduct.id === product.id
    )
  
    // Se o produto já estiver na lista, não o adiciona novamente
    if (!isProductAlreadySelected) {
      setSelectedProducts((prevProducts) => [...prevProducts, product]);
      return true
    } else {
      alert('Produto já está no carrinho')
      return false
    }
  }

  const removeProduct = (productId: any) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    )
  }

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, removeProduct, setSelectedProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}
