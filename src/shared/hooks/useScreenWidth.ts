import { useEffect } from 'react'

import { setWidth } from 'app/model/screen.slice'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'

export const useScreenWidth = () => {
  const dispatch = useAppDispatch()
  const width = useAppSelector((state) => state.screen.width)

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWidth(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])

  return {
    width,
    isMobile: width <= 768,
  }
}
