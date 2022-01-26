import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'themes/GlobalStyles'
import { appTheme } from '../themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
