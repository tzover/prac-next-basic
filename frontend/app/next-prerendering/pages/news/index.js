function NewsList(props) {
  const { articles } = props
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} : {article.title} : {article.category}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}
export default NewsList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      articles: data,
    },
  }
}
