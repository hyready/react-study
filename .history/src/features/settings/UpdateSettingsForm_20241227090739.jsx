import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Spinner from '../../ui/Spinner'
import useGetSetting from './useGetSetting'
import useUpdateSetting from './useUpdateSetting.js'
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice
    } = {}
  } = useGetSetting()
  const { isUpdating, updateSetting } = useUpdateSetting()

  function updatingHandle(e, field) {
    const { value}=e.target
    if()
  }
  if (isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={e => updatingHandle(e, 'minBookingLength')}
          id='min-nights'
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          id='max-nights'
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          id='max-guests'
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          id='breakfast-price'
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
