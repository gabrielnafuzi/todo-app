import { Children, ReactElement } from 'react'

import { AnimatePresence } from 'framer-motion'

import { TabPanelProps } from '../TabPanel'
import * as S from './styles'

type TabPanelsProps = {
  children: ReactElement<TabPanelProps>[]
  activeTab: string
}

export const TabPanels = ({ children, activeTab }: TabPanelsProps) => {
  const arrayChildren = Children.toArray(
    children
  ) as ReactElement<TabPanelProps>[]

  const renderChildren = (child: ReactElement<TabPanelProps>) => {
    return child?.props.tabKey.toLowerCase() === activeTab.toLowerCase()
  }

  return (
    <S.Wrapper>
      <AnimatePresence exitBeforeEnter>
        {arrayChildren.map((child) => (renderChildren(child) ? child : null))}
      </AnimatePresence>
    </S.Wrapper>
  )
}
