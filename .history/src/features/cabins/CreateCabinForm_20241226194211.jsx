import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAndUpdateCabin as createCabinApi } from '../../services/apiCabins'
import toast from 'react-hot-toast'
function CreateCabinForm() {
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors }
  } = useForm()

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createCabinApi,
    onSuccess: () => {
      toast.success('创建成功')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    }
  })
  function handleCreateCabin(data) {
    createCabin({ ...data, image: data.image.at(0) })
  }

  return (
    <Form onSubmit={handleSubmit(handleCreateCabin)}>
      <FormRow
        label='Cabin name'
        error={errors?.name?.message}
      >
        <Input
          type='text'
          id='name'
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          defaultValue=''
          {...register('description', {
            required: 'This field is required'
          })}
        />
      </FormRow>

      <FormRow
        label='Cabin photo'
        error={errors?.image?.message}
      >
        <FileInput
          disabled={isCreating}
          id='image'
          accept='image/*'
          {...register('image',{
            required: 'This field is required'
          })})}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          disabled={isCreating}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
