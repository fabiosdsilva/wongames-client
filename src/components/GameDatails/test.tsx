import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameDatails, { GameDatailsProps } from '.'

const props: GameDatailsProps = {
  developer: 'Gearbox Software',
  platforms: ['windows', 'linux', 'mac']
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
})
