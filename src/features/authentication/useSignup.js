import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth'
export default function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi
  })
  return { isLoading, signup }
}
