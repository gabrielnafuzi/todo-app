import { MdOutlineDelete } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { todoActions, useTodos } from '@/store'

import { TodoList } from '..'

import * as S from './styles'

export const CompletedTodosTab = () => {
  const { getTodos } = useTodos()
  const theme = useTheme()

  return (
    <>
      <TodoList
        todos={getTodos('completed')}
        showDelete
        emptyMessage="you don't have any completed todo, let's get back to work!"
        willDisappearWhenCompleted
      />

      {!!getTodos('completed').length && (
        <S.ClearCompletedButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => todoActions.removeAllCompleted()}
        >
          <MdOutlineDelete size={14} color={theme.colors.white} />

          <span>delete all</span>
        </S.ClearCompletedButton>
      )}
    </>
  )
}
