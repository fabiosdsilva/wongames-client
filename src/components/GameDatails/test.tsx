import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameDatails from '.'

describe('<GameDatails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDatails />)

    expect(
      screen.getByRole('heading', { name: /GameDatails/i })
    ).toBeInTheDocument()
  })
})
