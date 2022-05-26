import { useState } from 'react'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

// preciso fazer com que o front me entregue marcado o checkbox
// primeiro tenho que definir uma váriavel que vai receber o valor inicial
type InitialValue = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: Item[]
  initialValues?: InitialValue
}

export type Item = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

const ExploreSidebar = ({ items, initialValues = {} }: ExploreSidebarProps) => {
  const [value, setValue] = useState(initialValues)

  return (
    <S.Wrapper>
      {items?.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>
          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                labelColor="white"
                checked={!!value[field.name]}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === value[item.name]}
              />
            ))}
        </div>
      ))}
    </S.Wrapper>
  )
}

export default ExploreSidebar
