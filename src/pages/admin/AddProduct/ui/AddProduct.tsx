import { useNavigate } from 'react-router-dom'

import { useAddProductForm } from 'features/add-product/hook/useAddProductForm'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Modal } from 'shared/ui/Modal'
import {
  AdminCheckbox,
  AdminInputBlock,
  AdminSelectBlock,
  ImageUploader,
} from 'shared/ui/admin-components'

import s from './AddProduct.module.scss'

export function AddProduct() {
  const navigate = useNavigate()
  const {
    form,
    setForm,
    TireTypeData,
    BodyTypeData,
    selectValue,
    error,
    isOpen,
    setIsOpen,
    handleAddImages,
    handleRemoveImage,
    handleReplaceImage,
    selectChange,
    handleInputChange,
    handleSubmit,
    data,
  } = useAddProductForm()

  return (
    <div className={s.root}>
      <Modal
        className={s.successModal}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {data?.message && <h3>{data.message}</h3>}
        {data?.product_id && (
          <AppButton
            variant="accent"
            onClick={() => navigate(`/catalog/${data.product_id}`)}
          >
            Посмотреть на товар
          </AppButton>
        )}
      </Modal>
      <h1 className={s.title}>Добавить товар</h1>

      <form
        className={s.formWrapper}
        onSubmit={handleSubmit}
      >
        <div className={s.inputsGroup}>
          <AdminInputBlock
            label="Название шины*"
            value={form.title}
            onChange={handleInputChange('title')}
            error={error.title}
          />
          <AdminInputBlock
            label="Название модели*"
            value={form.model}
            onChange={handleInputChange('model')}
            error={error.model}
          />
          <AdminInputBlock
            label="Описание модели*"
            value={form.model_description}
            onChange={handleInputChange('model_description')}
            error={error.model_description}
          />
          <AdminInputBlock
            label="Модификация*"
            value={form.modification}
            onChange={handleInputChange('modification')}
            error={error.modification}
          />
          <AdminInputBlock
            label="Поколение*"
            value={form.generation}
            onChange={handleInputChange('generation')}
            error={error.generation}
          />
          <AdminInputBlock
            label="Ширина*"
            value={form.width}
            onChange={handleInputChange('width')}
            error={error.width}
          />
          <AdminInputBlock
            label="Профиль*"
            value={form.profile}
            onChange={handleInputChange('profile')}
            error={error.profile}
          />
          <AdminInputBlock
            label="Диаметр*"
            value={form.diameter}
            onChange={handleInputChange('diameter')}
            error={error.diameter}
          />

          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Цена"
              type="number"
              disabled={form.negotiable}
              value={form.price}
              onChange={handleInputChange('price')}
              error={error.price}
            />
            <AdminInputBlock
              label="Скидка"
              type="number"
              disabled={form.negotiable}
              value={form.promotion}
              onChange={handleInputChange('promotion')}
              error={error.promotion}
            />
            <AdminCheckbox
              className={s.formLabelPosition}
              label="Договорная"
              checked={form.negotiable}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  negotiable: e.target.checked,
                  price: '',
                  promotion: '',
                  promotion_end_date: '',
                }))
              }
            />
          </div>

          {form.promotion && (
            <AdminInputBlock
              label="Дата окончания скидки*"
              type="date"
              value={form.promotion_end_date}
              onChange={handleInputChange('promotion_end_date')}
              error={error.promotion_end_date}
            />
          )}

          <AdminSelectBlock
            label="Тип шины*"
            options={TireTypeData?.map((el) => el.label) || []}
            error={error.tire_type}
            onChange={(value) => selectChange('tire_type', value)}
          />
          <AdminSelectBlock
            label="Тип кузова*"
            options={BodyTypeData?.map((el) => el.label) || []}
            error={error.body_type}
            onChange={(value) => selectChange('body_type', value)}
          />
          <AdminSelectBlock
            label="Сезонность*"
            options={selectValue.season}
            error={error.season}
            onChange={(value) => selectChange('season', value)}
          />
          <AdminInputBlock
            label="Производитель*"
            value={form.manufacturer}
            onChange={handleInputChange('manufacturer')}
            error={error.manufacturer}
          />

          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Только новые"
              value={form.condition}
              type="number"
              onChange={handleInputChange('condition')}
              error={error.condition}
            />
            {/* <AdminCheckbox
              label="Только новые"
              checked={form.condition}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, condition: e.target.checked }))
              }
            /> */}
            <AdminCheckbox
              label="Runflat"
              checked={form.runflat}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, runflat: e.target.checked }))
              }
            />
            <AdminCheckbox
              label="Off-Road"
              checked={form.off_road}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, off_road: e.target.checked }))
              }
            />
          </div>

          <AdminInputBlock
            label="Индекс скорости*"
            value={form.speed_index}
            error={error.speed_index}
            onChange={handleInputChange('speed_index')}
          />
          <div className={s.flexGroup}>
            <AdminInputBlock
              label="Индекс нагрузки*"
              value={form.load_index}
              onChange={handleInputChange('load_index')}
              error={error.load_index}
            />
            <AdminInputBlock
              label="Двойной индекс*"
              value={form.load_index_for_double}
              onChange={handleInputChange('load_index_for_double')}
              error={error.load_index_for_double}
            />
          </div>

          <AdminSelectBlock
            label="Топливная экономность*"
            options={selectValue.efficiency}
            error={error.fuel_efficiency}
            onChange={(value) => selectChange('fuel_efficiency', value)}
          />
          <AdminSelectBlock
            label="Сцепление с мокрой поверхностью*"
            options={selectValue.wetGrip}
            error={error.wet_grip}
            onChange={(value) => selectChange('wet_grip', value)}
          />

          <AdminInputBlock
            label="Уровень внешнего шума*"
            type="number"
            value={form.external_noise_level}
            onChange={handleInputChange('external_noise_level')}
            error={error.external_noise_level}
          />
          <AdminInputBlock
            label="В наличии"
            type="number"
            value={form.in_stock}
            onChange={handleInputChange('in_stock')}
            error={error.in_stock}
          />
          <AdminInputBlock
            label="Гарантия на шину"
            value={form.warranty}
            onChange={handleInputChange('warranty')}
            error={error.in_stock}
          />
        </div>

        <div className={s.inputsGroup}>
          <div className={s.inputBlock}>
            <ImageUploader
              images={[
                form.image1,
                form.image2,
                form.image3,
                form.image4,
                form.image5,
                form.image6,
                form.image7,
              ]}
              error={error.image1}
              onAddImages={handleAddImages}
              maxImages={6}
              onRemoveImage={handleRemoveImage}
              onReplaceImage={handleReplaceImage}
            />
          </div>

          <div className={s.inputBlock}>
            <AppButton
              className={s.buttonSubmit}
              variant="accent"
            >
              Сохранить
            </AppButton>
          </div>
          <div className={s.inputBlock}>
            <AppButton
              className={s.buttonSubmit}
              variant="white"
            >
              Сбросить
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  )
}
