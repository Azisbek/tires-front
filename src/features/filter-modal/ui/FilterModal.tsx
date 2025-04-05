import { useState } from 'react'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'
import { CatalogFilter } from 'widgets/catalog-filter'
import s from './FilterModal.module.scss'

interface FilterModalProps {}

export function FilterModal({}: FilterModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AppButton
        variant="accent"
        onClick={() => setIsOpen(true)}
      >
        Фильтр
      </AppButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={s.filterModal}
      >
        <CatalogFilter />
      </Modal>
    </>
  )
}
