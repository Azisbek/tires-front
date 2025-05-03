// import { $api } from 'shared/api/api'
// import { ApplicationData } from '../types/types'
// export const applicationsApi = $api.injectEndpoints({
//   endpoints: (build) => ({
//     getApplications: build.query<ApplicationData[], void>({
//       query: () => ({
//         url: '/cart/applications/',
//         method: 'GET',
//       }),
//     }),
//   }),
// })
// export const { useLazyGetApplicationsQuery } = applicationsApi
import { $api } from 'shared/api/api'

import { ApplicationData } from '../types/types'

export const applicationsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getApplications: build.query<ApplicationData[], void>({
      query: () => ({
        url: '/cart/applications/',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetApplicationsQuery } = applicationsApi
