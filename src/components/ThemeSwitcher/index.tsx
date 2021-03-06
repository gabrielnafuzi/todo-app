import { themeActions, useTheme } from '@/store'

import { MoonIcon, SunIcon } from './partials'
import * as S from './styles'

export const ThemeSwitcher = () => {
  const { colorScheme } = useTheme()

  const isDarkMode = colorScheme === 'dark'

  return (
    <S.Wrapper isDarkMode={isDarkMode} onClick={themeActions.toggleColorScheme}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </S.Wrapper>
  )
}
