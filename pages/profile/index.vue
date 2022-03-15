<template>
  <div class="px-3 pb-3 border-b w-full border-gray-400 ">
    <profile-info name="Семен Лаврентьев" :count="3"/>

    <profile-card class="pt-20"/>
  </div>
</template>


<script>
import ProfileInfo from '~/components/profile/ProfileInfo.vue'
import ProfileCard from '~/components/profile/ProfileCard.vue'
export default {
  components: {
    ProfileInfo,
    ProfileCard
  }
}
</script>
