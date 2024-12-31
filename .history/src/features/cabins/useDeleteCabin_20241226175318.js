import { useMutation, useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()
const { isLoading: deleteLoading, mutate: deleteCabin } = useMutation({
  mutationFn: deleteCabinApi,
  onSuccess: () => {
    toast.success('Cabin successfully deleted')
    queryClient.invalidateQueries({ queryKey: ['cabins'] })
  },
  onError: err => toast.error(err.message)
})
