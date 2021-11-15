import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    width: 100%;
    height: 100%;

    border-bottom: 1px solid ${theme.colors.gray};
  `}
`
