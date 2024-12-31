import supabase from './supabase'

export async function getCabins() {
  let { data: cabins, error } = await supabase.from('cabins').select('*')
  if (error) {
    console.error(error)
    throw new Error('请求错误')
  }
  return cabins
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
    console.error(error)
    throw new Error('请求错误')
  }
  return data
}

export async function createCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select()
}
