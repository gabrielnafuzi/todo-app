import { Todo } from '.'
import { TODOS_STORAGE_KEY } from './constants'
import { Store } from './types'

const storageTodos = localStorage.getItem(TODOS_STORAGE_KEY)
const initialTodosState: Todo[] = storageTodos ? JSON.parse(storageTodos) : []

export const state: Store = {
  todos: initialTodosState,
  filter: 'all'
}
