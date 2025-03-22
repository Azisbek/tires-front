import { Rating } from 'react-simple-star-rating'

import { ProductHeaderProps } from 'entities/product-header/types/types'

import guaranteeIcon from 'shared/assets/icons/guarantee.svg'
import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'
import { Text, Title } from 'shared/ui/Text'

import { TiresIcon } from '../TiresIcon/TiresIcon'

import s from './ProductHeader.module.scss'

export function ProductHeader({
  title,
  tiresType,
  hasGuarantee = false,
  productCode,
  commentQuantity,
  productRating,
}: ProductHeaderProps) {
  return (
    <div className={s.productHeader}>
      <Title className={s.title}>{title}</Title>

      <div className={s.metaContent}>
        <TiresIcon tiresType={tiresType} />

        {hasGuarantee && (
          <img
            src={guaranteeIcon}
            alt="guartantee"
          />
        )}

        <CommentCounter commentQuantity={commentQuantity} />

        <Rating
          initialValue={productRating}
          size={18}
          allowFraction={true}
          readonly={true}
        />

        <Text size="sm-14">Код товара: {productCode}</Text>
      </div>
    </div>
  )
}
