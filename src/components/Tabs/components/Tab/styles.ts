import { motion } from 'framer-motion'
import styled, { css, DefaultTheme } from 'styled-components'

import { TabProps } from '.'

type WrapperProps = Pick<TabProps, 'active'>

const wrapperModifiers = {
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.activeBackground};
  `
}

export const Wrapper = styled.li<WrapperProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};

    border-top-right-radius: 0.4rem;
    border-top-left-radius: 0.4rem;

    text-align: center;
    padding: 0.625rem 1rem 1.6rem;
    position: relative;
    cursor: pointer;
    height: 2.4rem;
    flex: 1;
    position: relative;
    user-select: none;
    height: 100%;

    @media screen and (max-width: 23rem) {
      font-size: ${theme.font.sizes.small};
    }

    ${active && wrapperModifiers.active(theme)}
  `}
`

export const Underline = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 0;
    right: 0;
    height: 0.4rem;
    background: ${theme.colors.primary};
    width: 9rem;
    margin-left: auto;
    margin-right: auto;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  `}
`
