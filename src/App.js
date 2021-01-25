import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './config/theme'
import Home from './pages/home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
