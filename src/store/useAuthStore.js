import { create } from 'zustand'
import Cookies from 'js-cookie'

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData) => {
    Cookies.set('user', JSON.stringify(userData), { expires: 1 })
    set({ user: userData, isAuthenticated: true })
  },
  logout: () => {
    Cookies.remove('user')
    set({ user: null, isAuthenticated: false })
  },
  initialize: () => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      const userData = JSON.parse(userCookie)
      set({ user: userData, isAuthenticated: true })
    }
  },
}))

export default useAuthStore