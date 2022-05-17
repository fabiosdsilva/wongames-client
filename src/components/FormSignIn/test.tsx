import { getByPlaceholderText, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignIn />)

    // verificar se está renderizando os forms
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    // verificar se há um botão com sign in
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()

    // verificar se tem um link para se cadastrar
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
  })
})
