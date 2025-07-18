import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { useNavigate } from 'react-router-dom'

import { SignInForm } from 'widgets/sign-in-form'

import { useValidation } from 'shared/hooks/useValidation'
import { SignInErrorTypes, SignInFormTypes } from 'shared/types/AuthTypes'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAuthUserMutation } from '../api'

import s from './SignIn.module.scss'

export function SignIn() {
  const [authUser, { isLoading }] = useAuthUserMutation()
  const navigate = useNavigate()

  const { errors, setValidationErrors } = useValidation<SignInErrorTypes>()

  const handleSubmit = async (data: SignInFormTypes) => {
    try {
      await authUser(data).unwrap()
      navigate('/')
    } catch (error) {
      const err = error as FetchBaseQueryError

      if ('data' in err) {
        const validationErrors = err.data as SignInErrorTypes

        if (validationErrors) {
          setValidationErrors(validationErrors)
          return
        }
      }

      console.error('Непредвиденная ошибка:', error)
    }
  }

  return (
    <section className={s.signIn}>
      <SignInForm
        onSubmit={handleSubmit}
        errors={errors}
      />

      {isLoading && <LoaderFullScreen />}
    </section>
  )
}
