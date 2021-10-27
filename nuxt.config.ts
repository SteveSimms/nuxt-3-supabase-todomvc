import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        supaBaseUrl: process.env.SUPABASE_URL,
    },
    privateRuntimeConfig: {
        supaBaseKey: process.env.SUPABASE_KEY,
    }
})
