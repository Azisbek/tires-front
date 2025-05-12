import { useState } from 'react'

import { AccordionSection } from 'shared/ui/Accordion'
import { RadioInput } from 'shared/ui/input-components'

import { OrderDataType } from '../types/types'

import { ContactInfoForm } from './ContactInfoForm/ContactInfoForm'
import { DeliverySelector } from './DeliverySelector/DeliverySelector'
import s from './OrderForm.module.scss'

interface OrderFormProps {
  data: OrderDataType
  error: Partial<Record<keyof OrderDataType, string>>
  onChange: (
    key: keyof OrderDataType,
  ) => (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

export function OrderForm({ data, onChange, error }: OrderFormProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    contactInfo: true,
    pickupOrDelivery: false,
    payment: false,
    consultation: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }
  return (
    <form>
      <AccordionSection
        title="Контактная информация"
        isOpen={openSections.contactInfo}
        onToggle={() => toggleSection('contactInfo')}
      >
        <ContactInfoForm
          error={error}
          onChange={onChange}
          data={data}
        />
      </AccordionSection>

      <AccordionSection
        title="Способ получения"
        isOpen={openSections.pickupOrDelivery}
        onToggle={() => toggleSection('pickupOrDelivery')}
        isValid={!!error.address}
      >
        <DeliverySelector
          data={data}
          error={error}
          onChange={onChange}
        />
      </AccordionSection>

      <AccordionSection
        title="Способ оплаты"
        isOpen={openSections.payment}
        onToggle={() => toggleSection('payment')}
        isValid={!!error.payment}
      >
        <div className={s.wrapper}>
          <RadioInput
            name="payment"
            onChange={onChange('payment')}
            value="Наличными"
            selectedValue={data.payment}
          />
          <RadioInput
            name="payment"
            onChange={onChange('payment')}
            value="Банковской картой"
            selectedValue={data.payment}
          />
          {error && <p className={s.error}>{error.payment}</p>}
        </div>
      </AccordionSection>

      <AccordionSection
        title="Консультация специалиста"
        isOpen={openSections.consultation}
        onToggle={() => toggleSection('consultation')}
      >
        <div className={s.wrapper}>
          <RadioInput
            name="delivery"
            onChange={onChange('consultation')}
            value="Мне требуется консультация менеджера"
            selectedValue={data.consultation}
          />
          <RadioInput
            name="delivery"
            onChange={onChange('consultation')}
            value="Я уверен в выбранных товарах, консультация менеджера мне не нужна"
            selectedValue={data.consultation}
          />
        </div>
      </AccordionSection>
    </form>
  )
}
