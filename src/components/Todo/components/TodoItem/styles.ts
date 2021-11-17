import { motion } from 'framer-motion'
import styled, { css, DefaultTheme, keyframes } from 'styled-components'

import { TodoItemProps } from '.'

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CheckboxTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

const colorAnimation = (theme: DefaultTheme) => keyframes`
  100% {
    color: ${theme.colors.darkGray};
  }
`

type TextProps = Pick<TodoItemProps, 'isCompleted'>

const textModifiers = {
  isCompleted: (theme: DefaultTheme) => css`
    animation: ${colorAnimation(theme)} 0.2s linear forwards;
    animation-delay: 0.7s;
  `
}

export const Text = styled(motion.span)<TextProps>`
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

export const LineThrough = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
`
