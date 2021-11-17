import { useSnapshot } from 'valtio'

import { Filter, store } from '.'

export const useTodos = () => {
  const snapshot = useSnapshot(store)

  const getTodos = (filter: Filter = 'all') => {
    switch (filter) {
      case 'all':
        return snapshot.todos
      case 'active':
        return snapshot.todos.filter((todo) => !todo.isCompleted)
      case 'completed':
        return snapshot.todos.filter((todo) => todo.isCompleted)
    }
  }

  return { getTodos }
}
