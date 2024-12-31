import { useMutation } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
export default function useLogin() {
  const { data: user, isLoading } = useMutation({
    mutationFn: (email, password) => loginApi(email, password)
  })
}
