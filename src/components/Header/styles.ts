import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled(motion.header)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    padding: 0 ${theme.spacings.small};

    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: 'Raleway', sans-serif;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`
