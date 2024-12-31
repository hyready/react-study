import supabase from './supabase'
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw new Error(error.message)
  return data
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()
  if (!session.session) return null

  const { data, error } = await supabase.auth.getUser()

  if (error) throw new Error(error.message)
  return data?.user
}

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: ''
      }
    }
  })

  if (error) throw new Error(error.message)

  return data
}

export async function updateUser({ password, fullName, avator }) {
  let updateData
  if (password) {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) throw new Error(error.message)
  }

  if (fullName) {
    const { error2 } = await supabase.auth.updateUser({
      data: {
        fullName
      }
    })
    if (error2) throw new Error(error2.message)
  }
}
