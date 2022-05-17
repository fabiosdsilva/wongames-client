import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />)

    // verificar se está renderizando os forms
    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirm password/)).toBeInTheDocument()

    // verificar se há um botão com sign in
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    // verificar se tem um link para se cadastrar
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
  })
})
