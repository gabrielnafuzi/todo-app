import { useState } from 'react'

import { MoonIcon, SunIcon } from './components'
import * as S from './styles'

export const ThemeSwitcher = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <S.Wrapper isOn={isOn} onClick={toggleSwitch}>
      {isOn ? <MoonIcon /> : <SunIcon />}
    </S.Wrapper>
  )
}
