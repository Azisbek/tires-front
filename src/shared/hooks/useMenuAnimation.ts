import { useState } from 'react'

export function useMenuAnimation<T>(setFunc: (value: T | boolean) => void) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const openMenu = (value: T) => {
    if (timeoutId) clearTimeout(timeoutId)
    setFunc(value)
  }

  const closeMenu = () => {
    const id = setTimeout(() => {
      setFunc(false)
    }, 1000)
    setTimeoutId(id)
  }

  return {
    openMenu,
    closeMenu,
  }
}
