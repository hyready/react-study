import { useMutation } from '@tanstack/react-query'
import { updateCurrentUser } from '../../services/apiAuth'
export default function useUpdateUser() {
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser
  })
  return { isLoading, updateUser }
}
