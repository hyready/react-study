import { useForm } from 'react-hook-form'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'
function CreateCabinForm({ onCloseModal, editCabin = {} }) {
  const editId = editCabin.id
  const isEdit = Boolean(editCabin.id)

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: isEdit ? editCabin : {}
  })

  const { isCreating, createCabin } = useCreateCabin()
  const { isEditing, editCabinHandle } = useEditCabin()
  const isWorking = isEditing || isCreating
  function handleCreateCabin(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEdit)
      editCabinHandle(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          }
        }
      )
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          }
        }
      )
  }

  return (
    <Form
      onSubmit={handleSubmit(handleCreateCabin)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow
        label='Cabin name'
        error={errors?.name?.message}
      >
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', { required: 'This name is required' })}
        />
      </FormRow>

      <FormRow
        label='Maximum capacity'
        error={errors?.maxCapacity?.message}
      >
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1'
            }
          })}
        />
      </FormRow>

      <FormRow
        label='Regular price'
        error={errors?.regularPrice?.message}
      >
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1'
            }
          })}
        />
      </FormRow>

      <FormRow
        label='Discount'
        error={errors?.discount?.message}
      >
        <Input
          type='number'
          id='discount'
          disabled={isWorking}
          {...register('discount', {
            required: 'This field is required',
            validate: value =>
              value <= getValues().regularPrice ||
              'Discount should be less than regular price'
          })}
          defaultValue={0}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          disabled={isWorking}
          defaultValue=''
          {...register('description', {
            required: 'This description is required'
          })}
        />
      </FormRow>

      <FormRow
        label='Cabin photo'
        error={errors?.image?.message}
      >
        <FileInput
          disabled={isWorking}
          id='image'
          accept='image/*'
          {...register('image', {
            required: isEdit ? false : 'This field is required'
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEdit ? 'Edit cabin' : 'Add new cabin'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
