import { useState } from 'react'

// import { CatalogFilter } from 'widgets/catalog-filter'

import { AppButton } from 'shared/ui/AppButton/AppButton'

// import { Modal } from 'shared/ui/Modal'

// import s from './FilterModal.module.scss'

export function FilterModal() {
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)

  return (
    <>
      <AppButton
        variant="accent"
        onClick={() => setIsOpen(true)}
      >
        Фильтр
      </AppButton>
      {/* <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={s.filterModal}
      >
        <CatalogFilter />
      </Modal> */}
    </>
  )
}
