import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { updateSetting as updateSettingApi } from '../../services/apiSettings'

export function useUpdateSetting() {
  const queryClient = useQueryClient()

  const { mutate: editCabinHandle, isLoading: isUpdatinging } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: ['setting'] })
    },
    onError: err => toast.error(err.message)
  })

  return { isUpdatinging, editCabinHandle }
}