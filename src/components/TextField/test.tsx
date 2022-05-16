import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('renderizar o input', () => {
    renderWithTheme(<TextField />)
  })
})
