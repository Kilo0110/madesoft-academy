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
      <h1 class="main-heading font-bold max-w-[18ch] text-balance mb-10">Sign In</h1>
      <form
        @submit.prevent="handleSubmit"
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
          v-model="email"
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          id="password"
          required="true"
          placeholder="Enter your password"
          v-model="password"
        />
        <CustomCheckbox
          name="remember_me"
          label="Remember me"
          id="remember_me"
        />
        <div class="call-to-action-container flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <CallToAction text="Log In" />
          <p class="text-theme-icon-clr text-sm">Don't have an account? <NuxtLink
              class="text-theme-fill-clr font-bold"
              to="/auth/signup"
            >Sign Up Now</NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </div>
  <div
    class="loading-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-40 flex justify-center items-center"
    v-if="showLoader"
  >
    <component :is="ScaleLoader" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Log In'
})

const ScaleLoader = resolveComponent('ScaleLoader');
const showLoader = ref(false);

const email = ref('')
const password = ref('')


const apiEndpoint = 'https://live.api.madesoftacademy.com/v1/auth/login'

const handleSubmit = async () => {
  showLoader.value = true
  try {
    const { data, error } = await useFetch<{ data: string, status: number }>(apiEndpoint, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    if (error.value) {
      showLoader.value = false
      alert('An error occurred')
    }

    if (data.value) {
      showLoader.value = false
      navigateTo('/profile/welcome')
    }
  } catch (error) {
    showLoader.value = false
    alert('An error occurred')
  }
}
</script>

<style lang="scss" scoped>
</style>
