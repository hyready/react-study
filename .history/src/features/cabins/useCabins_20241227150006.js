import { useQuery } from '@tanstack/react-query'

export default function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
}
