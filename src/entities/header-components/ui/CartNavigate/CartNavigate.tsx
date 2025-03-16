import clsx from 'clsx'

import cartIcon from 'shared/assets/icons/cart.webp'

import s from './CartNavigate.module.scss'

interface Props {
  className?: string
  to?: string
}

export function CartNavigate({ className, to = '' }: Props) {
  return (
    <button className={clsx(s.btn, className)}>
      <a href={to}>
        <img
          src={cartIcon}
          alt="cart-icon"
          width={16}
          height={16}
        />
      </a>
    </button>
  )
}
