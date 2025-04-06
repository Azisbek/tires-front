import { FormEvent, useState } from 'react'

import { FeedbackFormTypes, FeedbackResponse } from 'pages/contacts/types'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'
import { Input } from 'shared/ui/input-components'

import s from './FeedbackForm.module.scss'

interface Props {
  onSubmit: (data: FeedbackFormTypes) => Promise<FeedbackResponse>
}

export function FeedbackForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FeedbackFormTypes>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof FeedbackFormTypes, string>>
  >({})

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (name: keyof FeedbackFormTypes, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSuccessMessage('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMessage('')

    try {
      const result = await onSubmit(formData)
      setFormData({ name: '', phone: '', email: '', message: '' })
      setErrors({})
      setSuccessMessage(result.message)
    } catch (err: any) {
      if (err?.data) {
        setErrors(err.data)
      }
    }
  }

  return (
    <section className={s.feedbackContainer}>
      <Title
        size="xl-40"
        className={s.title}
      >
        Расскажите нам о проблемах
      </Title>

      <form
        onSubmit={handleSubmit}
        className={s.form}
      >
        <Input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Ваше имя"
        />
        {errors.name && (
          <Text
            size="sm-14"
            color="red"
          >
            {errors.name}
          </Text>
        )}

        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="Телефон для связи"
        />
        {errors.phone && (
          <Text
            size="sm-14"
            color="red"
          >
            {errors.phone}
          </Text>
        )}

        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Электронная почта для ответа"
        />
        {errors.email && (
          <Text
            size="sm-14"
            color="red"
          >
            {errors.email}
          </Text>
        )}

        <textarea
          className={s.textarea}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Ваше сообщение"
        />
        {errors.message && (
          <Text
            size="sm-14"
            color="red"
          >
            {errors.message}
          </Text>
        )}

        {successMessage && (
          <Text
            size="sm-14"
            className={s.succes}
          >
            {successMessage}
          </Text>
        )}

        <AppButton variant="accent">Отправить сообщение</AppButton>
      </form>
    </section>
  )
}
