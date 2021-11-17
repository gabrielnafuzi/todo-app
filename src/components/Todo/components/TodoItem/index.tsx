import { AnimatePresence, motion, PanInfo } from 'framer-motion'
import { MdDeleteOutline } from 'react-icons/md'

import { Checkbox } from '@/components'
import { Todo, todoActions } from '@/store'
import { theme } from '@/styles'

import * as S from './styles'

const INFO_OFFSET_X_NUMBER_TO_COMPLETE_ON_DRAG = 100

export type TodoItemProps = {
  completeOnDragEnd?: boolean
  showDelete?: boolean
} & Todo

export const TodoItem = ({
  isCompleted,
  text,
  id,
  showDelete = false,
  completeOnDragEnd = true
}: TodoItemProps) => {
  const handleToggleCompleted = () => {
    todoActions.toggleCompleted(id)
  }

  const handleDelete = () => {
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

      navigator.vibrate?.(100)
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <S.Wrapper
        drag="x"
        dragConstraints={{ left: 0, right: 1 }}
        dragElastic={{ right: 0.15, left: 0 }}
        onDragEnd={handleDragEnd}
      >
        <S.CheckboxTextWrapper>
          <Checkbox
            checked={isCompleted}
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
            style={{ color: theme.colors.gray }}
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