function News(props) {
  const { data } = props
  return <h1 className='content'>{data}</h1>
}

export default News

export async function getStaticProps(context) {
  console.log('Running getStaticProps', context.previewData)
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles',
    },
  }
}

// preview mode         : http://localhost:3000/api/preview?redirect=/news
// preview mode disable : http://localhost:3000/api/disable-preview
