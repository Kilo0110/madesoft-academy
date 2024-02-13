<template>
  <div class="auth-layout flex flex-col min-h-[80vh] md:flex-row">
    <div class="img-container w-full md:w-[45%]">
      <img
        src="/assets/img/3 51.png"
        alt=""
        class="h-full object-cover w-full"
      >
    </div>
    <div class="content w-full flex flex-col px-10 pt-20 md:w-[55%] lg:px-20">
      <ProgressIndicator :status-level="3" />
      <h1 class="main-heading">Welcome to Madesoft Academy</h1>
      <p class="font-normal text-sm text-theme-icon-clr">We're so glad to have you join us!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Welcome'
})
</script>

<style lang="scss" scoped>
.main-heading {
  @apply pb-0;
}
</style>
