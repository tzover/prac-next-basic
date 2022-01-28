import { useRouter } from 'next/router'
import Link from 'next/link'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <>
      <Link href='/'>Home</Link>

      <h2>Details about product {productId}</h2>
    </>
  )
}

export default ProductDetail
