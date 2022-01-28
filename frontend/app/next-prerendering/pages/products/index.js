import Link from 'next/link'

function ProductList(props) {
  const { products } = props
  return (
    <>
      <h1>List of Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <div>
                <h2>
                  {product.id} : {product.title} : {product.price}
                </h2>
                <p>{product.description}</p>
              </div>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}
export default ProductList

export async function getStaticProps() {
  console.log('Generating / Regenerating ProductList')
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return {
    props: {
      products: data,
    },
    revalidate: 3,
  }
}
