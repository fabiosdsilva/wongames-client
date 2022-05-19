import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameDatails, { GameDatailsProps } from '.'

const props: GameDatailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'linux', 'mac'],
  editor: 'Walkabout',
  rating: 'BR0',
  genres: ['Role-playing']
}

describe('<GameDatails />', () => {
  it('verificar se está renderizando o heading', () => {
    renderWithTheme(<GameDatails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /editor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('verificar se está renderizando os ícones', () => {
    renderWithTheme(<GameDatails {...props} />)

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('renderizar free rating quando BR0', () => {
    renderWithTheme(<GameDatails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('renderizar 18+ rating quando BR18', () => {
    renderWithTheme(<GameDatails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('renderizar data formatada', () => {
    renderWithTheme(<GameDatails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })
})
