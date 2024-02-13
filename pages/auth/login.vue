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
      <h1 class="main-heading font-bold max-w-[18ch] text-balance mb-10">Log In to
        Madesoft Academy
        of Technology</h1>
      <form
        action=""
        class="login-form flex flex-col gap-3"
      >
        <CustomInput
          name="email"
          label="Email"
          type="email"
          id="email"
          required="true"
          placeholder="Enter your email"
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          id="password"
          required="true"
          placeholder="Enter your password"
        />
        <CallToAction text="Log In" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Log In'
})
</script>

<style lang="scss" scoped>
</style>
