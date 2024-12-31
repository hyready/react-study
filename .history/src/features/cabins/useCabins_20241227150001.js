export default function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
}
