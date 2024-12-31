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
      queryClient.invalidateQueries({
        queryKey: ['bookings']
      })
    }
  })
}
