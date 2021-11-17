import { AnimatePresence, motion } from 'framer-motion'

import { Todo } from '@/types'

import * as S from './styles'

import { TodoItem } from '..'

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}

const itemVariants = {
  hidden: {
    x: 160,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

type TodoListProps = {
  todos: Todo[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <AnimatePresence>
      <S.Wrapper variants={listVariants} initial="hidden" animate="show">
        {todos.map((todo) => (
          <motion.li key={todo.id} variants={itemVariants}>
            <TodoItem {...todo} />
          </motion.li>
        ))}
      </S.Wrapper>
    </AnimatePresence>
  )
}
