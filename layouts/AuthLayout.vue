<template>
  <div class="auth-layout flex flex-col min-h-[80vh] md:flex-row">
    <div class="img-container w-full md:w-[45%]">
      <img
        :src="props.imgSrc"
        alt=""
        class="h-full object-cover w-full"
      >
    </div>
    <div class="content w-full flex flex-col justify-center px-10 py-10 md:w-[55%] lg:px-20">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imgSrc: string
}>()
</script>

<style lang="scss">
.main-heading {
  @apply text-theme-text-clr text-2xl font-bold max-w-[18ch] text-balance mb-10 md:text-4xl;
}
</style>
