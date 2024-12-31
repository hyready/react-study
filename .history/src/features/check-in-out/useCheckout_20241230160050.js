import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

export default function useCheckout() {
  const queryClient = useQueryClient()
  const { mutate: checkout, isLoading: checkoutLoading } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: 'checked-out'
      }),
    onSuccess: data => {
      toast.success(`Booking #${data.id} successfully checked out`)
      queryClient.invalidateQueries({ active: true })
    }
  })
  return { checkout, checkoutLoading }
}