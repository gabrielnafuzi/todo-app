import { FormEvent, useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import { Input } from '@/components'
import { todoActions } from '@/store'

import * as S from './styles'

export const CreateTodoForm = () => {
  const [todoText, setTodoText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value)
    setIsInvalid(false)
    setErrorMessage('')
  }

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!todoText) {
      setIsInvalid(true)
      setErrorMessage('field is required')

      return
    }

    todoActions.add(todoText)
    setTodoText('')
  }

  return (
    <AnimatePresence key="create-todo-form">
      <S.Wrapper
        onSubmit={handleAddTodo}
        animate={{ y: [100, 0], opacity: [0, 1] }}
        exit={{ y: [0, -100], opacity: [1, 0] }}
        transition={{ duration: 0.4 }}
      >
        <Input
          key="create-todo-form-input"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={handleOnChange}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
        />

        <S.Button
          type="submit"
          disabled={!todoText}
          whileHover={{ scale: todoText ? 1.04 : 1 }}
          whileTap={{ scale: todoText ? 0.96 : 1 }}
        >
          <span>Add</span>
        </S.Button>
      </S.Wrapper>
    </AnimatePresence>
  )
}
