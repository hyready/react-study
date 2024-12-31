import styled from 'styled-components'

import BookingDataBox from './BookingDataBox'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Tag from '../../ui/Tag'
import ButtonGroup from '../../ui/ButtonGroup'
import Button from '../../ui/Button'
import ButtonText from '../../ui/ButtonText'
import Spinner from '../../ui/Spinner'

import { useMoveBack } from '../../hooks/useMoveBack'
import { useBooking } from './useBooking'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import { useNavigate } from 'react-router'
import { useDeleteBooking } from './useDeleteBooking'

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

function BookingDetail() {
  const moveBack = useMoveBack()
  const navigate = useNavigate()
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver'
  }
  const { isLoading, booking = {} } = useBooking()
  const { deleteBooking, isDeleting } = useDeleteBooking()
  const { status, id: bookingId } = booking
  if (isLoading) return <Spinner />
  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && <Button>Check in</Button>}
        {status === 'checked-in' && <Button>Check out</Button>}

        <Modal>
          <Modal.Open opens='delete'>
            <Button>Delete</Button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='booking'
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1)
                })
              }
            ></ConfirmDelete>
          </Modal.Window>
        </Modal>
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

export default BookingDetail
