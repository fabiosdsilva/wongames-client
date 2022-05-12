import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'
import theme from '../../styles/theme'

describe('<Checkbox />', () => {
  it('renderizar label e input', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    // checkbox
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // checar o id do input e labelFor
    expect(screen.getByText(/check/i)).toHaveAttribute('for', 'check')
  })

  it('renderizar sem o checkbox', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('renderizar label com a cor preta', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
