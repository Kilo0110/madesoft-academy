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
      <h1 class="main-heading">Sign up to
        Madesoft Academy
        of Technology</h1>
      <form
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
          />

          <CustomInput
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            required="true"
            placeholder="Enter your last name"
          />
        </div>
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
        <CustomCheckbox
          name="privacy_agreement"
          label="I have read and agree to the Terms of Service"
          id="privacy_agreement"
          required="true"
        />

        <div class="call-to-action-container flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <CallToAction text="Create Account" />
          <p class="">Already have an account? <NuxtLink
              class="text-theme-fill-clr font-bold"
              to="/auth/login"
            >Sign In Now</NuxtLink>
          </p>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Sign Up'
})
</script>

<style lang="scss" scoped>
</style>
