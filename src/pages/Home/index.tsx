import { useCallback, useRef, useState } from 'react'

import { Tabs, TabList, Tab, TabPanels, TabPanel, TodoList } from '@/components'
import { Filter, useTodos } from '@/store'

import { CreateTodoForm } from './components'
import * as S from './styles'

const tabs = ['All', 'Active', 'Completed'] as const
type TabsType = typeof tabs[number]

const searchParams = new URLSearchParams(window.location.search)
const tabParam = searchParams.get('tab') as TabsType
const initialTab = tabs.includes(tabParam) ? tabParam : 'All'

export const Home = () => {
  const scrollToTopRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const [selectedTab, setSelectedTab] = useState<TabsType>(initialTab)
  const { getTodos } = useTodos()

  const handleSetSelectedTab = useCallback((tab: TabsType) => {
    setSelectedTab(tab)

    window.history.pushState(null, '', `?tab=${tab}`)

    const stickyRect = stickyRef.current?.getBoundingClientRect()

    if (stickyRect?.top === 0) {
      scrollToTopRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
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
              onClick={() => handleSetSelectedTab(item)}
            />
          ))}
        </TabList>
      </S.StickyWrapper>

      <TabPanels activeTab={selectedTab}>
        <TabPanel tabKey="all">
          <CreateTodoForm />

          <TodoList todos={getTodos()} />
        </TabPanel>

        <TabPanel tabKey="active">
          <CreateTodoForm />

          <TodoList
            todos={getTodos('active')}
            emptyMessage="you don't have any active todo, why not take a break?"
            willDesappearWhenCompleted
          />
        </TabPanel>

        <TabPanel tabKey="completed">
          <TodoList
            todos={getTodos('completed')}
            showDelete
            emptyMessage="you don't have any completed todo, let's get back to work!"
            willDesappearWhenCompleted
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
