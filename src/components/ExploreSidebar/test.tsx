import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import itemsMock from './mock'

describe('<ExploreSidebar />', () => {
  it('verificar se os títulos estão sendo renderizados', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('verificar se o radio e checkbox estão sendo renderizados', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} />)

    // checkbox
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    // radio
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })
})
