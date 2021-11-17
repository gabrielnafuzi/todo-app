import { motion, PanInfo } from 'framer-motion'
import { MdDeleteOutline } from 'react-icons/md'

import { Checkbox } from '@/components'
import { theme } from '@/styles'
import { Todo } from '@/types'

import * as S from './styles'

const INFO_OFFSET_X_NUMBER_TO_COMPLETE_ON_DRAG = 120

export type TodoItemProps = {
  completeOnDragEnd?: boolean
  onComplete?: (id?: string) => void
  onDelete?: (id?: string) => void
} & Todo

export const TodoItem = ({
  isCompleted,
  text,
  id,
  completeOnDragEnd = true,
  onComplete,
  onDelete
}: TodoItemProps) => {
  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (
      completeOnDragEnd &&
      info.offset.x >= INFO_OFFSET_X_NUMBER_TO_COMPLETE_ON_DRAG &&
      onComplete
    ) {
      onComplete(id)

      navigator.vibrate?.(100)
    }
  }

  return (
    <S.Wrapper
      drag="x"
      dragConstraints={{ left: 0, right: 1 }}
      dragElastic={{ right: 0.15, left: 0 }}
      onDragEnd={handleDragEnd}
    >
      <S.CheckboxTextWrapper>
        <Checkbox checked={isCompleted} onClick={() => onComplete?.(id)} />

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

      {!!onDelete && (
        <motion.div
          style={{ color: theme.colors.gray }}
          whileHover={{ scale: 1.1, color: theme.colors.red }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete?.(id)}
        >
          <MdDeleteOutline size={24} cursor="pointer" />
        </motion.div>
      )}
    </S.Wrapper>
  )
}
