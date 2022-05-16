import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Auth title="Auth">
        <input type="text" />
      </Auth>
    )

    // verificar se está renderizando o título
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // verificar se está renderizando o subtitulo
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    // verificar se está renderizando as logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verificar se tem o titulo do content
    expect(screen.getByRole('heading', { name: /auth/i })).toBeInTheDocument()
  })
})
