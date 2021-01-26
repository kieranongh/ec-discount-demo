import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './config/theme'
import Home from './pages/home'

import './baseStyles.scss'

const API_KEY = process.env.REACT_APP_API_KEY
const API_ID = process.env.REACT_APP_API_ID

const client = new ApolloClient({
  uri: 'https://j4cp52oiejhyxeuzsac3nkbp6a.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': API_KEY,
    Authorization: API_ID
  }
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Home />
        </main>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
