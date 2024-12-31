import supabase from './supabase'

export async function getCabins() {
  let { data: cabins, error } = await supabase.from('cabins').select('*')
  if (error) {
    console.error(error)
    throw new Error(error)
  }
  return cabins
}
