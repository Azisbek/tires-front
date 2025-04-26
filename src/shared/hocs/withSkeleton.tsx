import { JSX } from 'react'

import {
  SkeletonComment,
  SkeletonNews,
  SkeletonProduct,
} from 'shared/ui/skeleton-components'

type SkeletonType = 'comments' | 'products' | 'news'

interface Props {
  isLoading: boolean
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type: SkeletonType,
) {
  const skeletonMap: Record<SkeletonType, () => JSX.Element> = {
    comments: () => (
      <>
        <SkeletonComment />
        <SkeletonComment />
        <SkeletonComment />
      </>
    ),
    products: () => (
      <>
        {[...Array(6)].map((_, i) => (
          <SkeletonProduct key={i} />
        ))}
      </>
    ),
    news: () => (
      <>
        <SkeletonNews />
        <SkeletonNews />
      </>
    ),
  }

  return function WithSkeletonWrapper(props: P & Props) {
    const { isLoading, ...restProps } = props
    return isLoading ? skeletonMap[type]() : <Component {...(restProps as P)} />
  }
}

export default withSkeleton
