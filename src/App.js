import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './config/theme'
import Home from './pages/home'

import styles from './styles.scss'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
