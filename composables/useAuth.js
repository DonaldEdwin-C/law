export const useAuth = () => {
  const user = ref(null)

  const fetchUser = async () => {
    const token = localStorage.getItem('token')
    if (!token) return null

    try {
      const res = await $fetch('http://localhost:3001/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      user.value = res
      return res
    } catch {
      logout()
      return null
    }
  }

  const login = async (username, password) => {
    const res = await $fetch('http://localhost:3001/users/login', {
      method: 'POST',
      body: { username, password }
    })

    if (res.token) {
      localStorage.setItem('token', res.token)
      navigateTo('/home') // after login go to dashboard
    } else {
      throw new Error('Login failed')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    user.value = null
    navigateTo('/auth/')
  }

  const isLoggedIn = () => {
    return !!localStorage.getItem('token')
  }

  return { user, fetchUser, login, logout, isLoggedIn }
}
