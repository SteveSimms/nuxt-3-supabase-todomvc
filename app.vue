<script setup>
const greeting = 'Nuxt 3 Supabase TodoMVC '
const log = console.log



import { createClient } from '@supabase/supabase-js/dist/main/index.js'

const {supaBaseUrl, supaBasePublicKey} = useRuntimeConfig()

const supabase = createClient(supaBaseUrl, supaBasePublicKey)
log(supabase)


</script>


<template>
  <div>
<h1>{{ greeting }}</h1>
<p>Supabase URL: {{ supaBaseUrl }}</p>


  </div>
</template>
