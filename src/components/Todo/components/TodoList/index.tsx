import { AnimatePresence, motion } from 'framer-motion'

import { EmptyTodoMessage, TodoItem } from '@/components'
import { Todo } from '@/store'

import * as S from './styles'

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: {
    x: 20,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

type TodoListProps = {
  todos: Todo[]
  showDelete?: boolean
  emptyMessage?: string
  willDisappearWhenCompleted?: boolean
}

export const TodoList = ({
  todos,
  showDelete = false,
  willDisappearWhenCompleted = false,
  emptyMessage
}: TodoListProps) => {
  console.log('TodoList render')

  return (
    <AnimatePresence>
      <S.Wrapper variants={listVariants} initial="hidden" animate="show">
        {todos.length ? (
          todos.map((todo) => (
            <motion.li key={todo.id} variants={itemVariants}>
              <TodoItem
                {...todo}
                showDelete={showDelete}
                willDisappearWhenCompleted={willDisappearWhenCompleted}
              />
            </motion.li>
          ))
        ) : (
          <EmptyTodoMessage message={emptyMessage} />
        )}
      </S.Wrapper>
    </AnimatePresence>
  )
}
