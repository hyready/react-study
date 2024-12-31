import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import useGetSetting from './useGetSetting'

function UpdateSettingsForm() {
  const { isLoading, settings: { } } = useGetSetting()
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'



          defaultValue={}
          id='min-nights'
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'


          defaultValue={}
          id='max-nights'
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'

          defaultValue={}
          id='max-guests'
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          defaultValue={}
          id='breakfast-price'
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
