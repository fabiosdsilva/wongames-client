import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('renderizar heading do form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          Form <a href="#"></a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
