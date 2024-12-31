import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { use } from 'react'
export default function useLogin() {
  const queryClient = useQueryClient()
  const { data: user, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {}
  })
  return { user, isLoading }
}
