import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { Header, Container } from '@/components'
import { TodoPage } from '@/pages/TodoPage'
import { RegisterPW } from '@/RegisterSW'
import { useTheme } from '@/store'
import { GlobalStyles, theme, themeColors } from '@/styles'

export const App = () => {
  const { colorScheme } = useTheme()

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeColors[colorScheme].background)

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

        <TodoPage />
      </Container>

      <RegisterPW />
    </ThemeProvider>
  )
}
