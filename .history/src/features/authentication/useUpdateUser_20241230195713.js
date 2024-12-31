import { useMutation } from '@tanstack/react-query'

export default function useUpdateUser() {
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: () => {}
  })
  return { isLoading, updateUser }
}
