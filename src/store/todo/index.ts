import { proxy, subscribe } from 'valtio'

import { TODOS_STORAGE_KEY } from './constants'
import { state } from './state'
import { Filter, Store } from './types'

export * as todoActions from './actions'
export * from './hooks'
export * from './types'

export const todoStore = proxy<Store>(state)

subscribe(todoStore, () => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoStore.todos))
})

export const filters: Filter[] = ['all', 'active', 'completed']
