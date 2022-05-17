import TextField from 'components/TextField'
import { Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField name="name" placeholder="Name" type="text" icon={<Email />} />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />
    </form>

    <Button size="large" fullWidth>
      Sign up now
    </Button>

    <FormLink>
      Already have an account?
      <Link href="/sign-in">
        <a> Sign in</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignUp
