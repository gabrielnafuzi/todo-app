import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    button,
    input {
      font-family: ${theme.font.family};
    }

    body {
      background: ${theme.colors.background};
      overflow-x: hidden;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.secondary};
    }
  `}
`
