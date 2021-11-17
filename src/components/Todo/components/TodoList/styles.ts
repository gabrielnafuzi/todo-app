import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled(motion.ul)`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    margin-top: ${theme.spacings.small};
  `}
`
