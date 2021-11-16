import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps
} from 'react'

import { AnimatePresence } from 'framer-motion'

import * as S from './styles'

export type InputProps = {
  isInvalid?: boolean
  errorMessage?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & Omit<HTMLProps<HTMLInputElement>, 'ref' | 'children' | 'onChange'>

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { isInvalid = false, errorMessage, onChange, ...props },
  ref
) => {
  return (
    <S.Wrapper isInvalid={isInvalid}>
      <input {...props} ref={ref} onChange={onChange} />

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
