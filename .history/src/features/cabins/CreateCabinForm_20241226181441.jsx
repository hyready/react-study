import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <Form onSubmit={handleSubmit()}>
      <FormRow
        label='Cabin name'
        error={errors?.name?.message}
      >
        <Input
          type='text'
          id='name'
          {...register('name')}
        />
      </FormRow>

      <FormRow
        label='Maximum capacity'
        error={errors?.name?.message}
      >
        <Input
          type='number'
          id='maxCapacity'
          {...register('maxCapacity')}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='regularPrice'>Regular price</Label>
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice')}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='discount'>Discount</Label>
        <Input
          type='number'
          id='discount'
          {...register('discount')}
          defaultValue={0}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='description'>Description for website</Label>
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          {...register('description')}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='image'>Cabin photo</Label>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image')}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
        >
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
