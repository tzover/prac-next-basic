import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Head>
        <title>NextJS</title>
      </Head>
      <main>
        <h1 className='text-4xl'>Hello NextJS !</h1>
      </main>
    </div>
  )
}

export default Home
