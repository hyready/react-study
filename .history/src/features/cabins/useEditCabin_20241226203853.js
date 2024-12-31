import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { createAndUpdateCabin } from '../../services/apiCabins'

export function useCreateCabin() {
  const queryClient = useQueryClient()

  const { mutate: editCabinHandle, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) =>
      createAndUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => toast.error(err.message)
  })

  return { isEditing, editCabinHandle }
}
