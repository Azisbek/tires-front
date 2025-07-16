import { useState } from 'react'

import { resetState } from 'pages/add-product-page/model/add-product.slice'

import {
  AddProductCheckboxes,
  AddProductImages,
  AddProductSelects,
  AddProudctInputs,
} from 'features/add-product-components'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import {
  useCreateProductMutation,
  useGetBodyTypeQuery,
  useGetTireTypeQuery,
} from '../api'

import s from './AddProductForm.module.scss'

export function AddProductForm() {
  const [isOpen, setIsOpen] = useState(false)

  const [addProduct, { isLoading, isSuccess }] = useCreateProductMutation()
  const { data: tireType } = useGetTireTypeQuery()
  const { data: bodyType } = useGetBodyTypeQuery()

  const dispatch = useAppDispatch()
  const form = useAppSelector((state) => state.addProduct)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value)
        }
      })

      await addProduct(formData).unwrap()
      setIsOpen(true)
      dispatch(resetState())
    } catch (error) {
      console.log(error)
    }
  }

  const handleReset = async () => {
    dispatch(resetState())
  }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      {isLoading && <LoaderFullScreen size={50} />}

      <div className={s.content}>
        <AddProudctInputs />

        <AddProductCheckboxes />

        <AddProductSelects
          tireType={tireType || []}
          bodyType={bodyType || []}
        />
      </div>

      <div className={s.content}>
        <AddProductImages />

        <div className={s.btns}>
          <AppButton
            variant="accent"
            type="submit"
          >
            Сохранить
          </AppButton>
          <AppButton
            variant="border"
            onClick={handleReset}
          >
            Сбросить
          </AppButton>
        </div>
      </div>

      {isSuccess && isOpen && (
        <Modal
          isOpen
          onClose={() => setIsOpen(false)}
        >
          Продукт успешно добавлен
        </Modal>
      )}
    </form>
  )
}
