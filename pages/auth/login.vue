<template>
  <NuxtLayout
    name="auth-layout"
    imgSrc="/assets/img/sign up.png"
  >
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
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
</style>
