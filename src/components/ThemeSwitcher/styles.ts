import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isDarkMode: boolean
}

const wrapperModifiers = {
  isDarkMode: (theme: DefaultTheme) => css`
    color: ${theme.colors.yellow};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, isDarkMode }) => css`
    margin-left: auto;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.border};
    background: none;
    border: none;

    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    user-select: none;

    ${isDarkMode && wrapperModifiers.isDarkMode(theme)}
  `}
`
