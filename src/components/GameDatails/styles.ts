import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);

    ${media.greaterThan('medium')`
            grid-template-columns: repeat(3, 1fr);
        `}

    ${media.greaterThan('large')`
            grid-template-columns: repeat(6, 1fr);
        `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Block = styled.div``

export const IconWrapper = styled.div``

export const Icon = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: inline-block;
    margin-right: ${theme.spacings.xxsmall};
  `}
`
