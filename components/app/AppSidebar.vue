<template>
  <ul>
    <li v-for="(link, index) in links" :key="links.url + link.name" :class="{'mt-3': index? true: false}">
      <nuxt-link exact class="text-2xl"  active-class="font-semibold" :to="link.url">{{link.name}}</nuxt-link>
    </li>
    <li class="mt-4">
      <ui-button classes="w-2/3">
        Tweet
      </ui-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      links: [
        {
          url: '/',
          name: 'Home'
        },
        {
          url: '/profile',
          name: 'Profile',
        },
        {
          url: '/notifications',
          name: 'Notifications'
        }
      ]
    }
  }
}
</script>
