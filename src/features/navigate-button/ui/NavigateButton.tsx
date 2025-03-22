import { AppButton } from 'shared/ui/AppButton/AppButton'

interface Props {
  children: React.ReactNode
  className?: string
}

export function NavigateBtn({ children, className }: Props) {
  return (
    <AppButton
      variant="border"
      className={className}
    >
      {children}
    </AppButton>
  )
}
