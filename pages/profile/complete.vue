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
      <ProgressIndicator :status-level="2" />
      <h1 class="main-heading">Complete your personal profile
      </h1>
      <span class="font-normal text-sm text-theme-icon-clr">We'd love to know more about you</span>

      <form
        action=""
        class="update-profile-form flex flex-col gap-3 pt-5"
      >
        <div class="profile-image-container">
          <CustomFileInput
            type="file"
            id="photoUrl"
            name="photoUrl"
            label="Select your personal profile picture"
            placeholder=""
            required="true"
            accept="image/*"
          />
        </div>
        <CustomInput
          name="about"
          label="About"
          type="text"
          id="about"
          required="true"
          placeholder="Tell us about yourself"
        />
        <CustomInput
          name="specialties"
          label="Your Specialties"
          type="text"
          id="specialties"
          required="true"
          placeholder="What are your specialties"
        />
        <CallToAction text="Next" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MadeSoft Academy Technologies || Update Profile'
})
</script>

<style lang="scss" scoped>
.main-heading {
  @apply pb-0;
}
</style>
