'use client'

import { Header } from './components/Header'
import { StoreContent } from './components/StoreContent'
import { ProductProvider } from './components/context/ProductContextProvider'
import { ReactQueryClientProvider } from './components/context/ReactQueryClientProvide'

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
