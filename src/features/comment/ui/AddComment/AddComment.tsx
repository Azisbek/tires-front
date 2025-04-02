import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAddProductCommentMutation } from 'widgets/reviews/api'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { LoaderComment } from 'shared/ui/loader-components'

import { CommentForm } from '../CommentForm/CommentForm'

interface Props {
  productId: string
  refetch: () => void
}

export function AddComment({ productId, refetch }: Props) {
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')
  const [required, setRequired] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  const [addComment, { isLoading }] = useAddProductCommentMutation()

  const handleSubmit = async (event: React.FormEvent) => {
    event?.preventDefault()

    if (comment.trim().length > 0 && rating !== 0) {
      try {
        setIsOpen(false)
        await addComment({
          product_id: Number(productId),
          rating,
          comment,
        }).unwrap()
        refetch()
        setComment('')
        setRating(0)
        setRequired(false)
      } catch (err) {
        console.log(err)
        navigate('/sign-in')
      }
    } else {
      setRequired(true)
    }
  }

  return (
    <>
      <div>
        <AppButton
          variant="accent"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Добавить отзыв
        </AppButton>
      </div>

      {isLoading && <LoaderComment />}

      {isOpen && (
        <CommentForm
          onSubmit={handleSubmit}
          rating={rating}
          comment={comment}
          required={required}
          setComment={setComment}
          setRating={setRating}
        />
      )}
    </>
  )
}
