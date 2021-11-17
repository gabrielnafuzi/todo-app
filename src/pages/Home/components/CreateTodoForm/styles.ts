import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled(motion.form)`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${theme.spacings.medium};
  `}
`

export const Button = styled(motion.button)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 10rem;
    height: 5.4rem;
    border: none;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    box-shadow: ${theme.shadows.base};
    transition: 0.25s background ease;

    &:disabled {
      background-color: ${theme.colors.gray};
      cursor: not-allowed;
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      font-weight: ${theme.font.semibold};
    }
  `}
`
