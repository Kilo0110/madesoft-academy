<template>
  <div class="auth-layout flex flex-col min-h-[80vh] md:flex-row">
    <div class="img-container w-full md:w-[45%]">
      <img
        src="/assets/img/sign up.png"
        alt=""
        class="h-full object-cover w-full"
      >
    </div>
    <div class="content w-full flex flex-col px-10 pt-20 md:w-[55%] lg:px-20">
      <h1 class="main-heading max-w-[18ch] text-balance mb-5">Sign up to
        Madesoft Academy
        of Technology</h1>
      <ProgressIndicator :status-level="1" />
      <form
        @submit.prevent="handleSubmit"
        action=""
        class="signup-form flex flex-col gap-3 relative"
      >
        <div class="name-input-container flex justify-between items-center gap-2">
          <CustomInput
            name="first_name"
            label="First Name"
            type="text"
            id="first_name"
            required="true"
            placeholder="Enter your first name"
            v-model='firstName'
          />

          <CustomInput
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            required="true"
            placeholder="Enter your last name"
            v-model='lastName'
          />
        </div>
        <CustomInput
          name="email"
          label="Email"
          type="email"
          id="email"
          required="true"
          placeholder="Enter your email"
          v-model='email'
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          id="password"
          required="true"
          placeholder="Enter your password"
          v-model='password'
        />
        <CustomCheckbox
          name="privacy_agreement"
          label="I have read and agree to the Terms of Service"
          id="privacy_agreement"
          required="true"
        />

        <div class="call-to-action-container flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <CallToAction text="Create Account" />
          <p class="text-theme-icon-clr text-sm">Already have an account? <NuxtLink
              class="text-theme-fill-clr font-bold"
              to="/auth/login"
            >Sign In Now</NuxtLink>
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
  title: 'MadeSoft Academy Technologies || Sign Up'
})

const ScaleLoader = resolveComponent('ScaleLoader');
const showLoader = ref(false);

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const apiEndpoint = 'https://live.api.madesoftacademy.com/v1/auth/register'

const handleSubmit = async () => {
  showLoader.value = true

  try {
    const { data, error } = await useFetch<{ data: string, status: number }>(apiEndpoint, {
      method: 'POST',
      body: {
        first_name: firstName.value,
        last_name: lastName.value,
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
      navigateTo('/profile/complete')
    }
  } catch (error) {
    showLoader.value = false
    alert('An error occurred')
  }
}
</script>

<style lang="scss" scoped>
</style>
