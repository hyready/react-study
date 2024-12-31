import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
const queryClient = useQueryClient()
export default function useCheckout() {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ bookingId }) => updateBooking(bookingId, {})
  })
}
