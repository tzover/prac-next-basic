import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})
