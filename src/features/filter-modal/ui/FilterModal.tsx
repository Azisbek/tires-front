import { useState } from 'react'

import { CatalogFilter } from 'widgets/catalog-filter'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'

import s from './FilterModal.module.scss'

interface FilterModalProps {
  refetch: () => void
}

export function FilterModal({ refetch }: FilterModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <AppButton
        variant="accent"
        onClick={openModal}
      >
        Фильтр
      </AppButton>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className={s.filterModal}
      >
        <CatalogFilter refetch={refetch} />
      </Modal>
    </>
  )
}
