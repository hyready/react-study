import styled from 'styled-components'
import BookingDataBox from '../../features/bookings/BookingDataBox'

import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import ButtonGroup from '../../ui/ButtonGroup'
import Button from '../../ui/Button'
import ButtonText from '../../ui/ButtonText'
import Checkbox from '../../ui/Checkbox'
import { useMoveBack } from '../../hooks/useMoveBack'
import { useBooking } from '../bookings/useBooking'
import { formatCurrency } from '../../utils/helpers'
import { useState } from 'react'
import useGetSetting from '../settings/useGetSetting'
import Spinner from '../../ui/Spinner'

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`

function CheckinBooking() {
  const [addBreakfast, setAddBreakfast] = useState(false)
  const [confirmPaid, setConfirmPaid] = useState(false)
  const moveBack = useMoveBack()
  const { isLoading, booking = {} } = useBooking()
  const { settings, isLoading: isLoadingSettings } = useGetSetting()
  const {} = useCheckin()
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights
  } = booking
  const optionalBreakfastPrice = settings.breakfastPrice * numGuests * numNights
  function handleCheckin() {
    //修改状态
  }
  if (isLoading || isLoadingSettings) return <Spinner />
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        {!hasBreakfast && (
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast(add => !add)
              setConfirmPaid(false)
            }}
            id='breakfast'
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        )}
      </Box>
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(confirm => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id='confirm'
        >
          I confirm that {guests.fullName} has paid the total amount of{' '}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button
          variation='secondary'
          onClick={moveBack}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default CheckinBooking
