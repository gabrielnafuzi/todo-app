import { ReactNode } from 'react'

import * as S from './styles'

type TabListProps = {
  children: ReactNode
}

export const TabList = ({ children }: TabListProps) => {
  return (
    <nav>
      <S.List>{children}</S.List>
    </nav>
  )
}
