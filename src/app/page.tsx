'use client'

import { Header } from './components/Header'
import { StoreContent } from './components/StoreContent'
import { ProductProvider } from './context/ProductContextProvider'
import { ReactQueryClientProvider } from './context/ReactQueryClientProvide'

export default function Home() {
  return (
    <ReactQueryClientProvider>
      <ProductProvider>
        <Header />
        <StoreContent />
      </ProductProvider>
    </ReactQueryClientProvider>
  )
}
