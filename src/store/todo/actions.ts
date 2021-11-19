import { nanoid } from 'nanoid'

import { todoStore as store, Todo } from '.'

export const add = (text: string) => {
  const newTodo: Todo = {
    text,
    id: nanoid(),
    isCompleted: false
  }

  store.todos = [newTodo, ...store.todos]
}

export const toggleCompleted = (id: string) => {
  const selected = store.todos.find((todo) => todo.id === id)

  if (!selected) return

  selected.isCompleted = !selected.isCompleted
}

export const remove = (id: string) => {
  store.todos = store.todos.filter((todo) => todo.id !== id)
}

export const removeAllCompleted = () => {
  store.todos = store.todos.filter((todo) => !todo.isCompleted)
}
