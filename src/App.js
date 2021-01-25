import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './config/theme'
import Home from './pages/home'

import './baseStyles.scss'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
