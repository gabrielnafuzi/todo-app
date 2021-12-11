import { motion } from 'framer-motion'
import styled, { css, DefaultTheme } from 'styled-components'

import { InputProps } from '.'

type WrapperProps = Pick<InputProps, 'isInvalid'>

const wrapperModifiers = {
  isInvalid: (theme: DefaultTheme) => css`
    background-color: rgba(255, 0, 0, 0.05);

    border-color: ${theme.colors.red};
    box-shadow: ${theme.colors.red} 0 0 0 1px;
  `
}

export const Wrapper = styled(motion.div)<WrapperProps>`
  height: 6.8rem;
  width: 100%;

  ${({ theme, isInvalid }) => css`
    > input {
      width: 100%;
      height: 4rem;
      border: 1px solid ${theme.colors.border};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.secondary};

      padding: 2.6rem 1rem;
      transition: 0.2s;
      outline: none;
      background-color: transparent;

      &:focus {
        border-color: ${theme.colors.primary};
        box-shadow: ${theme.colors.primary} 0 0 0 1px;
      }

      ${isInvalid && wrapperModifiers.isInvalid(theme)}
    }
  `}
`

export const ErrorMessage = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-top: 0.15rem;
    margin-left: 0.4rem;
  `}
`
