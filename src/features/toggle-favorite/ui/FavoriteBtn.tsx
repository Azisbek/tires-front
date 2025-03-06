import { isFavoriteType } from 'entities/product/model/types'

import { AppButton } from 'shared/ui/AppButton/AppButton'

export const FavoriteBtn = ({ isFavorite }: { isFavorite: isFavoriteType }) => {
  return (
    <AppButton variant="borderWhite">
      {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M0 4C0 7 1.5 10 7 14C12.5 10 14 7 14 4C14 1 12 0 10 0C8 0 7 2 7 2C7 2 6 0 4 0C2 0 0 1 0 4Z"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
          />
          <path
            d="M6.36 1.11C5.86 0.58 5.08 0 4 0C2 0 0 1 0 4C0 7 1.5 10 7 14C12.5 10 14 7 14 4C14 1 12 0 10 0C8.91 0 8.13 0.58 7.63 1.11C7.21 1.57 7 2 7 2C7 2 6.78 1.57 6.36 1.11ZM7 12.75Q8.57 11.56 9.71 10.45Q10.96 9.23 11.72 8.07Q12.41 7.02 12.72 5.98Q13 5.03 13 4Q13 2.53 12.26 1.78Q12.19 1.71 12.1 1.64Q11.72 1.32 11.18 1.16Q10.64 1 10 1Q9.82 1 9.65 1.03Q9.01 1.14 8.45 1.7Q8.21 1.94 8.01 2.24Q7.92 2.37 7.89 2.44L7 4.23L6.1 2.44Q6.07 2.37 5.98 2.24Q5.78 1.94 5.54 1.7Q4.98 1.14 4.34 1.03Q4.17 1 4 1Q3.35 1 2.81 1.16Q2.27 1.32 1.89 1.64Q1.8 1.71 1.73 1.78Q1 2.53 1 4Q1 5.03 1.27 5.98Q1.58 7.02 2.27 8.07Q3.03 9.23 4.28 10.45Q5.42 11.56 7 12.75Z"
            fill="#FF7E00"
            fillOpacity="1"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M0 4C0 7 1.5 10 7 14C12.5 10 14 7 14 4C14 1 12 0 10 0C8 0 7 2 7 2C7 2 6 0 4 0C2 0 0 1 0 4Z"
            fill="#FF7E00"
            fillOpacity="1"
            fillRule="evenodd"
          />
          <path
            d="M6.36 1.11C5.86 0.58 5.08 0 4 0C2 0 0 1 0 4C0 7 1.5 10 7 14C12.5 10 14 7 14 4C14 1 12 0 10 0C8.91 0 8.13 0.58 7.63 1.11C7.21 1.57 7 2 7 2C7 2 6.78 1.57 6.36 1.11ZM7 12.75Q8.57 11.56 9.71 10.45Q10.96 9.23 11.72 8.07Q12.41 7.02 12.72 5.98Q13 5.03 13 4Q13 2.53 12.26 1.78Q12.19 1.71 12.1 1.64Q11.72 1.32 11.18 1.16Q10.64 1 10 1Q9.82 1 9.65 1.03Q9.01 1.14 8.45 1.7Q8.21 1.94 8.01 2.24Q7.92 2.37 7.89 2.44L7 4.23L6.1 2.44Q6.07 2.37 5.98 2.24Q5.78 1.94 5.54 1.7Q4.98 1.14 4.34 1.03Q4.17 1 4 1Q3.35 1 2.81 1.16Q2.27 1.32 1.89 1.64Q1.8 1.71 1.73 1.78Q1 2.53 1 4Q1 5.03 1.27 5.98Q1.58 7.02 2.27 8.07Q3.03 9.23 4.28 10.45Q5.42 11.56 7 12.75Z"
            fill="#FF7E00"
            fillOpacity="1"
            fillRule="evenodd"
          />
        </svg>
      )}
    </AppButton>
  )
}
