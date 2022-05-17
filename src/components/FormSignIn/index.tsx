import * as S from './styles'

import TextField from 'components/TextField'
import { Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
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
    </form>

    <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

    <Button size="large" fullWidth>
      Sign in now
    </Button>

    <FormLink>
      Don't have an account?
      <Link href="/sign-up">
        <a> Sign up</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignIn
