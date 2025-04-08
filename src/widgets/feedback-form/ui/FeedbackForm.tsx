// import { FeedbackFormTypes } from 'pages/contacts/types'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'
import { Input } from 'shared/ui/input-components'

import s from './FeedbackForm.module.scss'

export interface FeedbackFormTypes {
  name: string
  phone: string
  email: string
  message: string
}

interface Props {
  formData: FeedbackFormTypes
  onChange: (name: keyof FeedbackFormTypes, value: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  errors?: Partial<Record<keyof FeedbackFormTypes, string>>
  successMessage?: string
}

export function FeedbackForm({
  formData,
  onChange,
  onSubmit,
  errors = {},
  successMessage,
}: Props) {
  return (
    <section className={s.feedbackContainer}>
      <Title
        size="xl-40"
        className={s.title}
      >
        Расскажите нам о проблемах
      </Title>

      <form
        onSubmit={onSubmit}
        className={s.form}
      >
        <Input
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
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
          onChange={(e) => onChange('phone', e.target.value)}
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
          onChange={(e) => onChange('email', e.target.value)}
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
          onChange={(e) => onChange('message', e.target.value)}
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
