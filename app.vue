<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  @apply font-display-font;
}

.main-heading {
  @apply text-theme-text-clr text-2xl font-bold md:text-3xl;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from {
  transform: translateX(250px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}
</style>
