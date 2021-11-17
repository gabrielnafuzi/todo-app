import { useRegisterSW } from 'virtual:pwa-register/react'

export const RegisterPW = () => {
  useRegisterSW({
    onRegistered(r) {
      r?.update()
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    }
  })

  return null
}
