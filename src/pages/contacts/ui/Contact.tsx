import { Contacts } from 'widgets/contacts'
import { FeedbackForm } from 'widgets/feedback-form'

import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useSendFeedbackMutation } from '../api'
import { FeedbackFormTypes, FeedbackResponse } from '../types'

import s from './Contact.module.scss'

export function Contact() {
  const [sendFeedback, { isLoading }] = useSendFeedbackMutation()

  const handleSubmit = async (
    data: FeedbackFormTypes,
  ): Promise<FeedbackResponse> => {
    try {
      const response = await sendFeedback(data).unwrap()
      return response
    } catch (err) {
      throw err
    }
  }

  return (
    <div className={s.container}>
      <Contacts />
      <FeedbackForm onSubmit={handleSubmit} />
      {isLoading && <LoaderFullScreen />}
    </div>
  )
}
