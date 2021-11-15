import { motion } from 'framer-motion'
import styled, { css, DefaultTheme, keyframes } from 'styled-components'

import { TodoItemProps } from '.'

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between; ;
`

export const CheckboxTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

const strikeAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

type TextProps = Pick<TodoItemProps, 'isCompleted'>

const textModifiers = {
  isCompleted: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkGray};

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.black};

      animation: ${strikeAnimation} 0.2s linear 1 forwards;
    }
  `
}

export const Text = styled.span<TextProps>`
  ${({ theme, isCompleted }) => css`
    user-select: none;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};

    margin-left: 0.7rem;
    position: relative;
    transition: 0.3s ease;

    ${isCompleted && textModifiers.isCompleted(theme)}
  `}
`
