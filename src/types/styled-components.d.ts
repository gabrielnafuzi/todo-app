import { theme, themeColors } from '@/styles'

type Colors = {
  colors: typeof themeColors.dark | typeof themeColors.light
}

type Theme = typeof theme & Colors

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
