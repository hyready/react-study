import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { updateSetting as updateSettingApi } from '../../services/apiSettings'

export default function useUpdateSetting() {
  const queryClient = useQueryClient()

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('更新成功')
      queryClient.invalidateQueries({ queryKey: ['setting'] })
    },
    onError: err => toast.error(err.message)
  })

  return { isUpdating, updateSetting }
}
