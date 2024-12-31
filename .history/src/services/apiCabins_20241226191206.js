import supabase from './supabase'

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
  const imageName = newCabin?.image?.name
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()
  if (error) {
    throw new Error('请求错误')
  }
  return data
}
