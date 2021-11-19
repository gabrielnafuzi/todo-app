import { useState, useMemo } from 'react'

import { AnimatePresence, motion, PanInfo, useAnimation } from 'framer-motion'
import { MdDeleteOutline } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { Checkbox } from '@/components'
import { Todo, todoActions } from '@/store'

import * as S from './styles'

const INFO_OFFSET_X_NUMBER_TO_COMPLETE_ON_DRAG = 100

type ForcedStatus = 'checked' | 'unchecked' | 'indeterminate'

export type TodoItemProps = {
  completeOnDragEnd?: boolean
  showDelete?: boolean
  willDisappearWhenCompleted?: boolean
} & Todo

export const TodoItem = ({
  completeOnDragEnd = true,
  id,
  isCompleted,
  showDelete = false,
  text,
  willDisappearWhenCompleted = false
}: TodoItemProps) => {
  const [forcedStatus, setForcedStatus] =
    useState<ForcedStatus>('indeterminate')

  const theme = useTheme()
  const animation = useAnimation()

  const handleToggleCompleted = async () => {
    if (willDisappearWhenCompleted) {
      setForcedStatus(isCompleted ? 'unchecked' : 'checked')

      await animation.start(() => ({
        opacity: 0,
        x: 40,
        transition: { duration: 0.6 }
      }))
    }

    todoActions.toggleCompleted(id)
  }

  const handleDelete = async () => {
    await animation.start(() => ({
      opacity: 0,
      y: 200,
      rotate: 30,
      transition: { duration: 0.5 }
    }))

    todoActions.remove(id)
  }

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (
      completeOnDragEnd &&
      info.offset.x >= INFO_OFFSET_X_NUMBER_TO_COMPLETE_ON_DRAG
    ) {
      handleToggleCompleted()

      navigator.vibrate?.(50)
    }
  }

  const isChecked = useMemo(() => {
    if (forcedStatus === 'unchecked') return false

    return isCompleted || forcedStatus === 'checked'
  }, [forcedStatus, isCompleted])

  return (
    <AnimatePresence>
      <S.Wrapper
        drag="x"
        dragConstraints={{ left: 0, right: 1 }}
        dragElastic={{ right: 0.15, left: 0 }}
        onDragEnd={handleDragEnd}
        animate={animation}
      >
        <S.CheckboxTextWrapper>
          <Checkbox
            checked={isChecked}
            onClick={() => handleToggleCompleted()}
          />

          <S.Text
            initial={false}
            animate={{ x: isCompleted ? [0, 15, 0] : 0 }}
            transition={{ duration: 0.3 }}
            isCompleted={isCompleted}
          >
            {text}

            <S.LineThrough
              initial={false}
              animate={{ width: isCompleted ? '100%' : '0%' }}
              transition={{ duration: 0.15 }}
            />
          </S.Text>
        </S.CheckboxTextWrapper>

        {showDelete && (
          <motion.div
            style={{ color: theme.colors.border }}
            whileHover={{ scale: 1.1, color: theme.colors.red }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleDelete()}
          >
            <MdDeleteOutline size={24} cursor="pointer" />
          </motion.div>
        )}
      </S.Wrapper>
    </AnimatePresence>
  )
}
