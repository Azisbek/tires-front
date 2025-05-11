import { $api } from 'shared/api/api'

export const feedbackApi = $api.injectEndpoints({
  endpoints: (build) => ({
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
