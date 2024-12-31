import { useMutation } from '@tanstack/react-query'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router'
export default function useLogout() {
  const navigate = useNavigate()
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate('/login')
    }
  })
  return { logout, isLoading }
}