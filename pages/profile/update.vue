<template>
  <NuxtLayout
    name="auth-layout"
    imgSrc="/assets/img/3 51.png"
  >
    <div class="progress-indicator-container flex gap-10">
      <span class="span progress-indicator"></span>
      <span class="span progress-indicator"></span>
      <span class="span progress-indicator"></span>
    </div>
    <h1 class="main-heading">Complete your personal profile
      <span class="font-normal text-sm">We'd love to know more about you</span>
    </h1>

    <form
      action=""
      class="update-profile-form flex flex-col gap-3"
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
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.progress-indicator {
  @apply border-2 border-theme-checkbox-clr;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;

  &:not(:last-of-type)::before {
    @apply bg-theme-checkbox-clr;

    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;

    width: 43px;
    height: 2px;

    &:first-of-type {
      @apply bg-theme-checkbox-clr;
    }

    &:nth-of-type(2) {
      @apply bg-theme-icon-clr;
    }
  }
}
</style>
