import { ThemeProvider } from 'styled-components'

import { Header } from '@/components'
import { GlobalStyles, theme } from '@/styles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Header />
  </ThemeProvider>
)
