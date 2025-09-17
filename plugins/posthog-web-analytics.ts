import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'
export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const posthogClient = posthog.init((runtimeConfig.public.posthogPublicKey as string), {
    api_host: (runtimeConfig.public.posthogHost as string),
    defaults: (runtimeConfig.public.posthogDefaults as any),
    person_profiles: 'always', // 'identified_only' or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug();
    }
  })

  return {
    provide: {
      posthog: () => posthogClient
    }
  }
})