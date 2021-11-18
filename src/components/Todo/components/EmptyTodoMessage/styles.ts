import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: ${theme.spacings.small};
  `}
`

export const Message = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.text};
    text-align: center;
  `}
`
