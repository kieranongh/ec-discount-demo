import { createMuiTheme } from '@material-ui/core/styles'

import GorditaWoff from '../assets/fonts/gordita-bold.woff2'

const gordita = {
  fontFamily: 'Gordita',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Gordita-Bold'),
    url(${GorditaWoff}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1644'
    },
  },
  typography: {
    h1: {
      fontFamily: 'Gordita, sans-serif'
    },
    h2: {
      fontFamily: 'Gordita, sans-serif'
    },
    h3: {
      fontFamily: 'Gordita, sans-serif'
    },
    h4: {
      fontFamily: 'Gordita, sans-serif'
    },
    h5: {
      fontFamily: 'Gordita, sans-serif'
    },
    h6: {
      fontFamily: 'Gordita, sans-serif'
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gordita],
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
})

export default theme