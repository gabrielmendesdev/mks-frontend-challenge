import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@/app/types'

interface ProductContextType {
  selectedProducts: Product[]
  addProduct: (product: Product) => void,
  removeProduct: (productId: number) => void
}

const ProductContext = createContext<ProductContextType>({
  selectedProducts: [],
  addProduct: () => {},
  removeProduct: () => {}
})

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product])
  }

  const removeProduct = (productId: any) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProduct, removeProduct}}>
      {children}
    </ProductContext.Provider>
  )
}
