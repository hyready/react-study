import { useQuery } from '@tanstack/react-query'

export default function useGetSetting() {
  const [isLoading, data: settings] = useQuery()
}
