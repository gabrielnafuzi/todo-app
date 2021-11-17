import styled, { css } from 'styled-components'

export const StickyWrapper = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    background: ${theme.colors.white};
    z-index: 2;
  `}
`
