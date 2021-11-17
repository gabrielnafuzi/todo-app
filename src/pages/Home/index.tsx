import { useEffect, useRef, useState } from 'react'

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TodoItem,
  Input
} from '@/components'

const tabs = ['All', 'Active', 'Completed'] as const
type TabsType = typeof tabs[number]

const searchParams = new URLSearchParams(window.location.search)
const tabParam = searchParams.get('tab') as TabsType
const initialTab = tabs.includes(tabParam) ? tabParam : 'All'

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState<TabsType>(initialTab)
  const [isCompleted, setIsCompleted] = useState(false)
  const todoTextInput = useRef<HTMLInputElement | null>(null)

  const handleSetSelectedTab = (tab: TabsType) => {
    setSelectedTab(tab)

    window.history.pushState(null, '', `?tab=${tab}`)
  }

  return (
    <Tabs>
      <TabList>
        {tabs.map((item) => (
          <Tab
            key={item}
            label={item}
            active={item === selectedTab}
            onClick={() => handleSetSelectedTab(item)}
          />
        ))}
      </TabList>

      <TabPanels activeTab={selectedTab}>
        <TabPanel tabKey="all">
          <Input placeholder="add details" ref={todoTextInput} />

          <TodoItem
            text="DAR UMA OLHADA EM COMO TÁ FUNCIONANDO O DRAG TO COMPLETE"
            isCompleted={isCompleted}
            onComplete={() => setIsCompleted(!isCompleted)}
            onDelete={() => console.log('delete')}
          />
        </TabPanel>

        <TabPanel tabKey="active">second panel</TabPanel>
        <TabPanel tabKey="completed">third panel</TabPanel>
      </TabPanels>
    </Tabs>
  )
}
