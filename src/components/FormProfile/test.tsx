import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('verificar se tudo está sendo renderizando no Form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    // inputs
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    // password
    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
