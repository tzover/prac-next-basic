import { useRouter } from 'next/router'

function ArticleListByCategory(props) {
  const { articles, category } = props
  const router = useRouter()
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} : {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
            <button type='button' onClick={() => router.push('/news')}>
              Back
            </button>
          </div>
        )
      })}
    </>
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
  const { params, req, res, query } = context

  console.log(query)
  console.log(req.headers.cookie)

  res.setHeader('Set-Cookie', ['name=Vishwas2'])

  const { category } = params
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`,
  )
  const data = await response.json()

  return {
    props: {
      articles: data,
      category,
    },
  }
}
