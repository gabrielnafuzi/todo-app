import { ThemeProvider } from 'styled-components'

import { Header, Container } from '@/components'
import { Home } from '@/pages/Home'
import { GlobalStyles, theme } from '@/styles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Container>
      <Header />

      <Home />
    </Container>
  </ThemeProvider>
)
