import { $api } from 'shared/api/api'

// import { FeedbackFormTypes, FeedbackResponse } from '../types'

export const feedbackApi = $api.injectEndpoints({
  endpoints: (build) => ({
    // sendFeedback: build.mutation<FeedbackResponse, FeedbackFormTypes>({
    sendFeedback: build.mutation({
      query: (body) => ({
        url: '/users/support/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSendFeedbackMutation } = feedbackApi
