<template>
  <div class="auth-layout flex flex-col min-h-[80vh] md:flex-row">
    <div class="img-container w-full md:w-[45%]">
      <img
        src="/assets/img/sign up.png"
        alt=""
        class="h-full object-cover w-full"
      >
    </div>
    <div class="content w-full flex flex-col justify-center px-10 py-10 md:w-[55%] lg:px-20">
      <h1 class="main-heading">Welcome to Madesoft Academy</h1>
      <p>We're so glad to have you join us!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Welcome'
})
</script>

<style lang="scss" scoped>
</style>
