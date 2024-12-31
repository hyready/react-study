import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

export default function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { data: user, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      //缓存user数据
      queryClient.setQueryData(['user'], user.user)
      navigate('/dashboard', { replace: true })
    },
    onError: err => {
      console.log('ERROR', err)
      toast.error('账号或密码不正确')
    }
  })
  return { user, isLoading }
}
