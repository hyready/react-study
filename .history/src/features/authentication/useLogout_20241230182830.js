import { useMutation } from '@tanstack/react-query'
import { logout as logoutApi } from '../../services/apiAuth'
export default function useLogout() {
  const { mutate: logout, isLoading } = useMutation({})
}
