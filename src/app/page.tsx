'use client'

import { Header } from './components/Header'
import { StoreContent } from './components/StoreContent'
import { ProductProvider } from './components/context/ProductContextProvider'

export default function Home() {
  return (
    <ProductProvider>
        <Header />
        <StoreContent />
    </ProductProvider>
  )
}
