<template>
  <div class="container grid grid-cols-3 h-full">
    <div class="col-span-1 h-full border-r border-gray-500">
      <div class="mt-3">
        <AppSidebar/>
      </div>
    </div>
    <div class="col-span-2 h-full">
       <div class="mt-3">
        <Nuxt/>
       </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from '../components/app/AppSidebar.vue'
export default {
  components: {
    AppSidebar
  }
}
</script>
