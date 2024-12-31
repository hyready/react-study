import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router'

export default function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { data: user, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user)
      navigate('/das')
    }
  })
  return { user, isLoading }
}
