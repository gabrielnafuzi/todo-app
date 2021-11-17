export type Todo = {
  id: string
  text: string
  isCompleted: boolean
}

export type Filter = 'all' | 'active' | 'completed'

export type Store = {
  todos: Todo[]
  filter: Filter
}
