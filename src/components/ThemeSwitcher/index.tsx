import { themeActions, useTheme } from '@/store'

import { MoonIcon, SunIcon } from './components'
import * as S from './styles'

export const ThemeSwitcher = () => {
  const { colorScheme } = useTheme()

  const isDarkMode = colorScheme === 'dark'

  return (
    <S.Wrapper isDarkMode={isDarkMode} onClick={themeActions.toggleColorScheme}>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </S.Wrapper>
  )
}
