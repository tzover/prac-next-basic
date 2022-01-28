import Head from 'next/head'

function Blog(props) {
  const { title, description } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' description={description} />
      </Head>
      <div className='content-col'>
        <h2>Env DB User :{process.env.DB_USER}</h2>
        <h2>Env DB Password :{process.env.DB_PASSWORD}</h2>
        <h2>Env Analytics: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
        <h1>Article</h1>
      </div>
    </>
  )
}

export default Blog

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(
    `Connecting to database with username ${user} and password ${password}`,
  )
  return {
    props: {
      title: 'Article Codevolution',
      description: 'Article description',
    },
  }
}
