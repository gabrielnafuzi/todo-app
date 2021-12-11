import { useCallback, useRef, useState } from 'react'

import { MdOutlineDelete } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components'
import { Filter, useTodos, todoActions } from '@/store'

import { CreateTodoForm, TodoList } from './components'
import * as S from './styles'

const tabs = ['All', 'Active', 'Completed'] as const
type TabsType = typeof tabs[number]

const searchParams = new URLSearchParams(window.location.search)
const tabParam = searchParams.get('tab') as TabsType
const initialTab = tabs.includes(tabParam) ? tabParam : 'All'

export const TodoPage = () => {
  const theme = useTheme()

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
            willDisappearWhenCompleted
          />
        </TabPanel>

        <TabPanel tabKey="completed">
          <TodoList
            todos={getTodos('completed')}
            showDelete
            emptyMessage="you don't have any completed todo, let's get back to work!"
            willDisappearWhenCompleted
          />

          {!!getFilteredTodosLength('Completed') && (
            <S.ClearCompletedButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => todoActions.removeAllCompleted()}
            >
              <MdOutlineDelete size={14} color={theme.colors.white} />
              <span>delete all</span>
            </S.ClearCompletedButton>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
