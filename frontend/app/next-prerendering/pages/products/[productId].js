import { useRouter } from 'next/router'

function Product(props) {
  const { product } = props
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>
        {product.id} : {product.title} : {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
      <button type='button' onClick={() => router.push('/products')}>
        Back
      </button>
    </div>
  )
}

export default Product

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`,
  )
  const data = await response.json()

  return {
    props: {
      product: data,
    },
    revalidate: 3,
  }
}
