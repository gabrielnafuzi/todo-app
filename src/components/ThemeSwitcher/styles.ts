import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isOn: boolean
}

const wrapperModifiers = {
  isOn: (theme: DefaultTheme) => css`
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
