import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
const queryClient = useQueryClient()
export default function useCheckout() {
  const { mutate: checkout, isLoading: checkoutLoading } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: 'checked-out'
      }),
    onSuccess: () => {
      toast.success(`Booking #${data.id} successfully checked out`)
      queryClient.invalidateQueries({
        queryKey: ['bookings']
      })
    }
  })
}
