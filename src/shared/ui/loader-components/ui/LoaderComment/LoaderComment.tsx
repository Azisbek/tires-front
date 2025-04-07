import { Loader } from '../Loader/Loader'

import s from './LoaderComment.module.scss'

interface Props {
  size?: number
}

export function LoaderComment({ size }: Props) {
  return (
    <div className={s.loaderComment}>
      <Loader size={size} />
    </div>
  )
}
