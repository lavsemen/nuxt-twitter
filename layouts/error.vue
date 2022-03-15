<template>
  <div class="flex items-center flex-col justify-center h-full">
    <h1 class="text-4xl uppercase" v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p class="text-l mt-4 text-gray-500">Try to use another url or go to home</p>
    <div class="mt-5">
    <ui-button routeLink="/">
      Home
    </ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from '~/components/ui/UiButton.vue';
export default {
  components: { UiButton },
  props: ['error'],
  layout: 'empty' // you can set a custom layout for the error page
}
</script>
