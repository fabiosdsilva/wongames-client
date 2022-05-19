import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Gallery />)
  })
})