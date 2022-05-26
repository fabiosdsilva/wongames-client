import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import itemsMock from './mock'

describe('<ExploreSidebar />', () => {
  it('verificar se os títulos estão sendo renderizados', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} initialValues={{}} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('verificar se o radio e checkbox estão sendo renderizados', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} initialValues={{}} />)

    // checkbox
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    // radio
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  // verificar se o checkbox vai vir marcado
  it('verificar se o checkbox e radio estão marcados', () => {
    renderWithTheme(
      <ExploreSidebar
        items={itemsMock}
        initialValues={{ windows: true, sort_by: 'high-to-low' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })
})
