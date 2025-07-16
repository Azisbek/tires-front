import { useState } from 'react'

import { useChangeCountMutation, useDeleteCartItemMutation } from '../api'

export function useCartFunc(
  quantity: number,
  codeProduct: number,
  handleUpdateBasket?: () => void,
) {
  const [count, setCount] = useState(quantity)
  const [changeCount] = useChangeCountMutation()
  const [deleteCartItem, { isLoading }] = useDeleteCartItemMutation()

  const increment = async () => {
    setCount((prev) => prev + 1)
    await changeCount({
      productId: codeProduct,
      quantity: count,
    }).then(() => handleUpdateBasket?.())
  }

  const decrement = async () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev))
    await changeCount({
      productId: codeProduct,
      quantity: count,
    }).then(() => handleUpdateBasket?.())
  }

  const handleDelete = async () => {
    await deleteCartItem({ productId: codeProduct }).then(() =>
      handleUpdateBasket?.(),
    )
  }

  return { count, isLoading, increment, decrement, handleDelete }
}
