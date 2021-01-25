import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './config/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  )
}

export default App
