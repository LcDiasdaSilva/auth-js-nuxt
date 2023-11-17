export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth()
  if (!to.meta.noAuth && status.value === 'unauthenticated') {
    return navigateTo('/login')
  }

  if (to.fullPath === '/login' && status.value === 'authenticated') {
    return navigateTo('/admin')
  }

  return nextTick()
})