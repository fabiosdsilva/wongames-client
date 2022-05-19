import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameDatails, { GameDatailsProps } from '.'

const props: GameDatailsProps = {
  platforms: ['windows', 'linux', 'mac']
}

describe('<GameDatails />', () => {
  it('verificar se está renderizando o heading', () => {
    renderWithTheme(<GameDatails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
  })
})
