import { useNavigate } from 'react-router-dom'

import { SignInForm } from 'widgets/sign-in-form'

import { SignInFormTypes } from 'shared/types/AuthTypes'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAuthUserMutation, useLazyGetMeQuery } from '../api'

import s from './SignIn.module.scss'

export function SignIn() {
  const [authUser, { isLoading }] = useAuthUserMutation()
  const [getUser] = useLazyGetMeQuery()
  const navigate = useNavigate()

  const handleSubmit = async (data: SignInFormTypes) => {
    try {
      await authUser(data).unwrap()
      await getUser().unwrap()
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className={s.signIn}>
      <SignInForm onSubmit={handleSubmit} />

      {isLoading && <LoaderFullScreen />}
    </section>
  )
}
