import { ThemeSwitcher } from '@/components'

import * as S from './styles'

const container = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      bounce: 0.7
    }
  }
}

export const Header = () => (
  <S.Wrapper variants={container} initial="hidden" animate="show">
    <ThemeSwitcher />

    <S.Title>#todo</S.Title>
  </S.Wrapper>
)
