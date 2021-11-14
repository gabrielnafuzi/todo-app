import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '@/styles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <span>App</span>
  </ThemeProvider>
)
