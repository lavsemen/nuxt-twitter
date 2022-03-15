<template>
  <div class="flex w-full items-center fixed pt-1 top-0 bg-black bg-opacity-60">
    <nuxt-link to="/" class="mr-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="white"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </nuxt-link>
    <div>
      <div class="text-2xl">{{ name }}</div>
      <div class="text-gray-400">{{ count }} Tweet</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProfileInfo',
  props: {
    name: String,
    count: Number,
  },
};
</script>
