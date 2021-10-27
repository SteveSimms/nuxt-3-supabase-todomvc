<script setup>
const greeting = 'Nuxt 3 Supabase TodoMVC '
const log = console.log
const config = useRuntimeConfig()

const { supaBaseUrl } = config

log(config)




</script>


<template>
  <div>
<h1>{{ greeting }}</h1>
<p>Supabase URL: {{ supaBaseUrl }}</p>
  </div>
</template>
