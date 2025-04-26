import { useState } from 'react'

import { Contacts } from 'widgets/contacts'
import { FeedbackForm } from 'widgets/feedback-form'

import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useSendFeedbackMutation } from '../api'

import s from './Contact.module.scss'

interface FeedbackFormTypes {
  name: string
  phone: string
  email: string
  message: string
}

interface FeedbackError {
  data: Record<string, string>
}

export function Contact() {
  const [formData, setFormData] = useState<FeedbackFormTypes>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [sendFeedback, { isLoading }] = useSendFeedbackMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setSuccessMessage('')

    try {
      const res = await sendFeedback(formData).unwrap()
      setSuccessMessage(res.message)
      setFormData({ name: '', phone: '', email: '', message: '' }) // Очищаем после успеха
    } catch (err) {
      const error = err as FeedbackError
      if (error?.data) {
        setErrors(error?.data)
      }
    }
  }

  const handleChange = (name: keyof FeedbackFormTypes, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSuccessMessage('')
  }

  return (
    <div className={s.container}>
      <Contacts />
      <FeedbackForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
        successMessage={successMessage}
      />
      {isLoading && <LoaderFullScreen />}
    </div>
  )
}
