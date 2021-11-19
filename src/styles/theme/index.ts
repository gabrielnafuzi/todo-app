export const theme = {
  border: {
    radius: '1.2rem'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    normal: 500,
    semibold: 600,
    bold: 700,
    sizes: {
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xxlarge: '3.6rem'
    }
  },
  grid: {
    container: '60rem'
  },
  shadows: {
    base: '0 0 2px 0 #a1c6f7'
  },
  spacings: {
    small: '1.8rem',
    medium: '2.6rem',
    large: '3.2rem',
    xxlarge: '4.8rem'
  }
} as const

export * from './colors'
