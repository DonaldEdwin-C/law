import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = process.client ? localStorage.getItem('token') : null

      if (!token && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
   if (token && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }
})