import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const StickyWrapper = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    background: ${theme.colors.white};
    z-index: 2;
  `}
`

export const ClearCompletedButton = styled(motion.button)`
  ${({ theme }) => css`
    background: ${theme.colors.red};
    border: none;
    border-radius: 0.4rem;
    width: 12.4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: auto;
    margin-top: ${theme.spacings.xxlarge};

    > span {
      margin-left: 0.5rem;
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.white};
    }
  `}
`
