import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        supaBaseUrl: process.env.SUPABASE_URL,
        supaBasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
    },
    // privateRuntimeConfig: {
        
    // },
  
})
