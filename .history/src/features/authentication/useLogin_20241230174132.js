import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'

export default function useLogin() {
  const queryClient = useQueryClient()
  const { data: user, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user)
    }
  })
  return { user, isLoading }
}