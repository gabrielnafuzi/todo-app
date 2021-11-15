import { ReactNode } from 'react'

import { motion } from 'framer-motion'

export type TabPanelProps = {
  children: ReactNode
  tabKey: string
}

export const TabPanel = ({ children, tabKey }: TabPanelProps) => {
  return (
    <motion.div
      key={`tab-panel-${tabKey}`}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
      layoutId="tabpanel"
    >
      {children}
    </motion.div>
  )
}
