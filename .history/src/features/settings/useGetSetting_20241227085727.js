import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings'
export default function useGetSetting() {
  const { isLoading, data: settings } = useQuery({
    queryKey: ['setting'],
    queryFn: getSettings
  })
  return { isLoading, settings }
}
