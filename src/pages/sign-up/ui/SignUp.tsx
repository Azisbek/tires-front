import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { useNavigate } from 'react-router-dom'

import { SignUpForm } from 'widgets/sign-up-form'

import { useValidation } from 'shared/hooks/useValidation'
import { SignUpFormTypes } from 'shared/types/AuthTypes'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useRegisterUserMutation } from '../api'

import s from './SignUp.module.scss'

export function SignUp() {
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const navigate = useNavigate()

  const { errors, setValidationErrors } = useValidation<SignUpFormTypes>()

  const handleSubmit = async (formData: SignUpFormTypes) => {
    try {
      await registerUser(formData).unwrap()
      navigate('/')
    } catch (error) {
      // Временное решения пока не найду лучше решения, не трогать !
      const err = error as FetchBaseQueryError

      if ('data' in err) {
        const validationErrors = (
          err.data as { error: Record<string, string[]> }
        )?.error
        if (validationErrors) {
          setValidationErrors(validationErrors)
          return
        }
      }

      console.error('Непредвиденная ошибка:', error)
    }
  }

  return (
    <section className={s.signUp}>
      <SignUpForm
        onSubmit={handleSubmit}
        errors={errors}
      />

      {isLoading && <LoaderFullScreen />}
    </section>
  )
}
