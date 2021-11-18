import { motion } from 'framer-motion'
import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isOn: boolean
}

const wrapperModifiers = {
  isOn: (theme: DefaultTheme) => css`
    justify-content: flex-end;
    color: ${theme.colors.lightGray};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, isOn }) => css`
    margin-left: auto;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.yellow};
    background: none;
    border: none;

    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    user-select: none;

    ${isOn && wrapperModifiers.isOn(theme)}
  `}
`

export const Thumb = styled(motion.div)`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    background: ${theme.colors.white};
    border-radius: 9999px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.4rem;
  `}
`
