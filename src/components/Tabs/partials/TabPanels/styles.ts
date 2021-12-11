import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    width: 100%;
    height: 100%;
    padding: 0rem 1.6rem;
  `}
`
