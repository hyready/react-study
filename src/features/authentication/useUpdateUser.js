import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCurrentUser } from '../../services/apiAuth'

export default function useUpdateUser() {
  const queryClient = useQueryClient()
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user', user])
    }
  })
  return { isLoading, updateUser }
}
