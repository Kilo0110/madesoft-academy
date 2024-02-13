<template>
  <main class="main min-h-screen flex flex-col justify-center gap-5">
    <p class="welcome-text text-center text-2xl"><span class="text-4xl block font-bold">Hi there!</span> It's nice to
      see you!</p>
    <div class="btn-container flex flex-col items-center justify-center gap-5 md:flex-row">
      <CallToAction
        text="Log in"
        @click="redirectToSignIn"
        :uncolored="true"
        class="px-6 w-full max-w-xs py-3 md:py-4"
      />
      <CallToAction
        text="Create new account"
        class="px-6 w-full max-w-xs py-3  md:py-4"
        @click="redirectToSignUp"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Log In / Sign Up'
})

const redirectToSignIn = () => {
  return navigateTo('/auth/login')
}
const redirectToSignUp = () => {
  return navigateTo('/auth/signup')
}
</script>

<style scoped lang="scss">
</style>
