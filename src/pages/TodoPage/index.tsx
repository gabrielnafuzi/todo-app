import { useCallback, useRef, useState } from 'react'

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components'
import { Filter, useTodos } from '@/store'

import {
  ActiveTodosTab,
  AllTodosTab,
  CompletedTodosTab,
  CreateTodoForm
} from './components'
import * as S from './styles'

const tabs = ['All', 'Active', 'Completed'] as const
type TabsType = typeof tabs[number]

const searchParams = new URLSearchParams(window.location.search)
const tabParam = searchParams.get('tab') as TabsType
const initialTab = tabs.includes(tabParam) ? tabParam : 'All'

export const TodoPage = () => {
  const scrollToTopRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const [selectedTab, setSelectedTab] = useState<TabsType>(initialTab)
  const { getTodos } = useTodos()

  const handleScrollIntoStickyView = useCallback(() => {
    const stickyRect = stickyRef.current?.getBoundingClientRect()

    if (stickyRect?.top === 0) {
      scrollToTopRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleSetSelectedTab = useCallback((tab: TabsType) => {
    setSelectedTab(tab)

    window.history.pushState(null, '', `?tab=${tab}`)
  }, [])

  const getFilteredTodosLength = useCallback(
    (tabType: TabsType) => getTodos(tabType.toLowerCase() as Filter).length,
    [getTodos]
  )

  return (
    <Tabs>
      <div ref={scrollToTopRef} />

      <S.StickyWrapper ref={stickyRef}>
        <TabList>
          {tabs.map((item) => (
            <Tab
              key={item}
              label={`${item} (${getFilteredTodosLength(item)})`}
              active={item === selectedTab}
              onClick={() => {
                handleSetSelectedTab(item)
                handleScrollIntoStickyView()
              }}
            />
          ))}
        </TabList>
      </S.StickyWrapper>

      <S.TabsPanelsWrapper>
        {selectedTab !== 'Completed' && <CreateTodoForm />}

        <TabPanels activeTab={selectedTab}>
          <TabPanel tabKey="all">
            <AllTodosTab />
          </TabPanel>

          <TabPanel tabKey="active">
            <ActiveTodosTab />
          </TabPanel>

          <TabPanel tabKey="completed">
            <CompletedTodosTab />
          </TabPanel>
        </TabPanels>
      </S.TabsPanelsWrapper>
    </Tabs>
  )
}
