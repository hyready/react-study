import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  let { data: cabins, error } = await supabase.from('cabins').select('*')
  if (error) {
    throw new Error('请求错误')
  }
  return cabins
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
    throw new Error('请求错误')
  }
  return data
}

export async function createCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
  //处理文件路径
  const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll(
    '/',
    ''
  )
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //新建
  let query = await supabase.from('cabins')
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }])
  }
  //更新
  if (id) {
    query.update({ ...newCabin, image: imagePath }).eq('id', id)
  }
  const { data, error } = await query.select().single()
  if (error) {
    throw new Error('请求错误')
  }

  //上传文件

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload('public/avatar1.png', avatarFile)

  if (error) {
    throw new Error('请求错误')
  }
  return data
}
