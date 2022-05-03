import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  describe('<Logo/>', () => {
    it('renderizar label na cor branca',() => {
      renderWithTheme(<Logo/>)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({ color: '#FAFAFA' })
    })

    it('renderizar label na cor preta',() => {
      renderWithTheme(<Logo color='black'/>)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({ color: '#030517' })
    })
  })
})
