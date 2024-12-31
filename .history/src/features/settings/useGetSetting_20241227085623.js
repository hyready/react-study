import { useQuery } from '@tanstack/react-query'
import { get} from '../../services/apiSettings'
export default function useGetSetting() {
  const [isLoading, data: settings] = useQuery({
    queryKey: ['setting'],
    queryFn:
  })
}
