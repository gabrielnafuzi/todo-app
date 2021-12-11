import { memo } from 'react'

import { AnimatePresence } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@/components'
import { todoActions } from '@/store'

import * as S from './styles'

type FormInputs = {
  text: string
}

const BaseCreateTodoForm = () => {
  const { register, handleSubmit, formState, resetField, setFocus } =
    useForm<FormInputs>()

  const handleAddTodo: SubmitHandler<FormInputs> = ({ text }) => {
    todoActions.add(text)

    resetField('text')
    setFocus('text')
  }

  return (
    <AnimatePresence key="create-todo-form">
      <S.Wrapper
        onSubmit={handleSubmit(handleAddTodo)}
        animate={{ y: [100, 0], opacity: [0, 1] }}
        exit={{ y: [0, -100], opacity: [1, 0] }}
        transition={{ duration: 0.4 }}
      >
        <Input
          key="create-todo-form-input"
          placeholder="do something..."
          isInvalid={!!formState.errors.text}
          errorMessage={formState.errors.text?.message}
          {...register('text', { required: 'field is required' })}
        />

        <S.Button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Add</span>
        </S.Button>
      </S.Wrapper>
    </AnimatePresence>
  )
}

export const CreateTodoForm = memo(BaseCreateTodoForm)
