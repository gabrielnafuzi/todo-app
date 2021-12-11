import { useTodos } from '@/store'

import { TodoList } from '..'

export const ActiveTodosTab = () => {
  const { getTodos } = useTodos()

  return (
    <TodoList
      todos={getTodos('active')}
      emptyMessage="you don't have any active todo, why not take a break?"
      willDisappearWhenCompleted
    />
  )
}
