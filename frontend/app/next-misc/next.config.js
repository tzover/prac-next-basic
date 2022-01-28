module.exports = {
  reactStrictMode: true,

  // redirect
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: true,
      },
    ]
  },
}
