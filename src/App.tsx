import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { Header, Container } from '@/components'
import { Home } from '@/pages/Home'
import { RegisterPW } from '@/RegisterSW'
import { useTheme } from '@/store'
import { GlobalStyles, theme, themeColors } from '@/styles'

export const App = () => {
  const { colorScheme } = useTheme()

  useEffect(() => {
    document.documentElement.style.setProperty('color-scheme', colorScheme)
  }, [colorScheme])

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: { ...themeColors[colorScheme] }
      }}
    >
      <GlobalStyles />

      <Container>
        <Header />

        <Home />
      </Container>

      <RegisterPW />
    </ThemeProvider>
  )
}
