import { useCallback, useMemo, useState } from 'react'

export function useValidation<T>(initialErrors: Partial<T> = {}) {
  const [validationErrors, setValidationErrors] =
    useState<Partial<T>>(initialErrors)

  const resetValidation = useCallback(() => {
    setValidationErrors({})
  }, [])

  return useMemo(
    () => ({
      errors: validationErrors,
      resetValidation,
      setValidationErrors,
    }),
    [validationErrors, resetValidation],
  )
}
