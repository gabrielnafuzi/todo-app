import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
  useCallback
} from 'react'

import { AnimatePresence, HTMLMotionProps } from 'framer-motion'

import * as S from './styles'

export type InputProps = {
  isInvalid?: boolean
  errorMessage?: string
  motionProps?: HTMLMotionProps<'div'>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & Omit<HTMLProps<HTMLInputElement>, 'ref' | 'children' | 'onChange'>

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { isInvalid = false, errorMessage, motionProps, ...props },
  ref
) => {
  return (
    <S.Wrapper {...motionProps} isInvalid={isInvalid}>
      <input ref={ref} {...props} />

      <AnimatePresence initial={false}>
        {!!errorMessage && (
          <S.ErrorMessage
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
          >
            {errorMessage}
          </S.ErrorMessage>
        )}
      </AnimatePresence>
    </S.Wrapper>
  )
}

export const Input = forwardRef(BaseInput)
