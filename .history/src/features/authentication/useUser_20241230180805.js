import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../services/apiAuth'
export default function useUser() {
  const {} = useQuery({
    queryFn: getCurrentUser,
    queryKey: ['user']
  })
}
