import { ThemeProvider } from 'styled-components'

import { Header, Container } from '@/components'
import { GlobalStyles, theme } from '@/styles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Container>
      <Header />
    </Container>
  </ThemeProvider>
)
