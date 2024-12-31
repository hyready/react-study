import { useMutation } from '@tanstack/react-query'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router'
export default function useLogout() {
  const navigate = useNavigate(0)
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {}
  })
  return { logout, isLoading }
}
