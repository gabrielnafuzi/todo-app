import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { TabProps } from '.'

type WrapperProps = Pick<TabProps, 'active'>

const wrapperModifiers = {
  active: () => css`
    background: #eee;
  `
}

export const Wrapper = styled.li<WrapperProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.black};
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
    transition: 0.6s ease;

    ${active && wrapperModifiers.active()}
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
