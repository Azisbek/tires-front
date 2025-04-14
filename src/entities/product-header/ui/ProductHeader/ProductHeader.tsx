import { Rating } from 'react-simple-star-rating'

import guaranteeIcon from 'shared/assets/icons/guarantee.svg'
import { ProductHeaderTypes } from 'shared/types/ProductDetailsTypes'
import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'
import { Text, Title } from 'shared/ui/Text'

import { TiresIcon } from '../TiresIcon/TiresIcon'

import s from './ProductHeader.module.scss'

export function ProductHeader({
  title,
  season,
  warranty,
  id,
  comments_count,
  average_rating,
}: ProductHeaderTypes) {
  return (
    <div className={s.productHeader}>
      <Title className={s.title}>{title}</Title>

      <div className={s.metaContent}>
        <TiresIcon season={season} />

        {warranty.trim().length > 0 && (
          <img
            src={guaranteeIcon}
            alt="guartantee"
          />
        )}

        <CommentCounter comments_count={comments_count} />

        <Rating
          initialValue={average_rating}
          size={18}
          allowFraction={true}
          readonly={true}
        />

        <Text size="sm-14">Код товара: {id}</Text>
      </div>
    </div>
  )
}
