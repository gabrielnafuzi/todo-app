const dark = {
  primary: '#2F80ED',
  secondary: '#E0E0E0',
  background: '#252329',
  text: '#949494',
  border: '#BDBDBD',
  lightGray: '#ccc',
  red: '#EB5757',
  yellow: '#e8b339',
  white: '#fff',
  activeBackground: '#1e1c21'
} as const

const light = {
  primary: '#2F80ED',
  secondary: '#333',
  background: '#fff',
  text: '#828282',
  border: '#BDBDBD',
  lightGray: '#ccc',
  red: '#EB5757',
  yellow: '#e8b339',
  white: '#fff',
  activeBackground: '#eee'
} as const

export const themeColors = {
  dark,
  light
} as const
