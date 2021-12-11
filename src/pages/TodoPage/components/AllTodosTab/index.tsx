import { useTodos } from '@/store/todo'

import { TodoList } from '..'

export const AllTodosTab = () => {
  const { getTodos } = useTodos()

  return <TodoList todos={getTodos()} />
}
