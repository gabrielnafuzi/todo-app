import { ReactNode } from 'react'

import * as S from './styles'

type TabsProps = {
  children: ReactNode
}

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      stiffness: 100
    }
  }
}

export const Tabs = ({ children }: TabsProps) => {
  return (
    <S.Wrapper variants={container} initial="hidden" animate="show">
      {children}
    </S.Wrapper>
  )
}

export * from './components'
