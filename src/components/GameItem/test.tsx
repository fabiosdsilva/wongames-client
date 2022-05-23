import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from '.'

const props: GameItemProps = {
  img: 'image',
  title: 'A simple title',
  price: '250'
}

describe('<GameItem />', () => {
  it('verificar se tudo está sendo renderizado corretamente', () => {
    renderWithTheme(<GameItem {...props} />)

    // verificar se a imagem está renderizando
    // verificar se o title e preço estão renderizando

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(/250/)).toBeInTheDocument()
  })

  it('verificar se o ícone de download', () => {
    const downloadLink = 'https://www.google.com.br/'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
