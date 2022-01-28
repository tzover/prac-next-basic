import Link from 'next/link'

function Product({ productId = 100 }) {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h2>
        <Link href='/product/1'>
          <a>Product1</a>
        </Link>
      </h2>
      <h2>
        <Link href='/product/2'>
          <a>Product2</a>
        </Link>
      </h2>
      <h2>
        <Link href='/product/3' replace>
          <a>Product3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product{productId}</a>
        </Link>
      </h2>
    </div>
  )
}

export default Product
