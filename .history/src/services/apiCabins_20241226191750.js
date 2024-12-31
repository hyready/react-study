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

export async function createCabin(newCabin) {
  //处理文件路径
  const imageName = (Math.random() + newCabin?.image?.name).replace('/', '')
  const image = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  newCabin.image = image
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()

  //上传文件

  if (error) {
    throw new Error('请求错误')
  }
  return data
}
