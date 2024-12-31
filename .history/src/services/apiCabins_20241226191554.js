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
  const imageName = Math.random() + newCabin?.image?.name
  const image = `${supabaseUrl}/storage/v1/object/public/cabin-images/`
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()
  if (error) {
    throw new Error('请求错误')
  }
  return data
}
