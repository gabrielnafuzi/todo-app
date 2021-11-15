import { motion, useMotionValue, useTransform } from 'framer-motion'

import { theme } from '@/styles'

import * as S from './styles'

type CheckboxProps = {
  checked?: boolean
  onClick?: () => void
}

export const Checkbox = ({ checked = false, onClick }: CheckboxProps) => {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <S.Wrapper
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        borderColor: checked ? theme.colors.primary : theme.colors.darkGray,
        backgroundColor: checked ? theme.colors.primary : theme.colors.white
      }}
      transition={{ type: 'spring' }}
      onTap={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4 13L9 18L20 5.5"
          stroke={theme.colors.white}
          strokeLinecap="round"
          strokeWidth="2.4"
          animate={{ pathLength: checked ? 1 : 0 }}
          style={{ pathLength: pathLength, opacity: opacity }}
        />
      </svg>
    </S.Wrapper>
  )
}
