import { useNavigate } from 'react-router-dom'

import { SignUpForm } from 'widgets/sign-up-form'

import { SignUpFormTypes } from 'shared/types/AuthTypes'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useRegisterUserMutation } from '../api'

import s from './SignUp.module.scss'

export function SignUp() {
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const navigate = useNavigate()

  const handleSubmit = async (formData: SignUpFormTypes) => {
    try {
      await registerUser(formData).unwrap()
      navigate('/')
    } catch (error) {
      console.error('Ошибка регистрации:', error)
    }
  }

  return (
    <section className={s.signUp}>
      <SignUpForm onSubmit={handleSubmit} />

      {isLoading && <LoaderFullScreen />}
    </section>
  )
}
