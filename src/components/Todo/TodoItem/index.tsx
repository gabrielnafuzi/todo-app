import { motion } from 'framer-motion'
import { MdDeleteOutline } from 'react-icons/md'

import { Checkbox } from '@/components'
import { theme } from '@/styles'

import * as S from './styles'

export type TodoItemProps = {
  isCompleted: boolean
  text: string
  id?: string
  onComplete?: (id?: string) => void
  onDelete?: (id?: string) => void
}

export const TodoItem = ({
  isCompleted,
  text,
  id,
  onComplete,
  onDelete
}: TodoItemProps) => {
  return (
    <S.Wrapper
      drag="x"
      dragConstraints={{ left: -2, right: 0 }}
      dragElastic={{ right: 0, left: 0.1 }}
      onDragEnd={(e, { offset }) => {
        if (offset.x < -240) onComplete?.(id)
      }}
    >
      <S.CheckboxTextWrapper>
        <Checkbox checked={isCompleted} onClick={() => onComplete?.(id)} />

        <S.Text isCompleted={isCompleted}>{text}</S.Text>
      </S.CheckboxTextWrapper>

      {!!onDelete && (
        <motion.div
          style={{ color: theme.colors.gray }}
          whileHover={{ scale: 1.1, color: theme.colors.red }}
          whileTap={{ scale: 0.9 }}
        >
          <MdDeleteOutline size={24} cursor="pointer" />
        </motion.div>
      )}
    </S.Wrapper>
  )
}
