import dynamic from 'next/dynamic'

const CartPage = dynamic(() => import('../src/routes/CartPage'), { ssr: false })

function Home() {
  return <CartPage />
}

export default CartPage