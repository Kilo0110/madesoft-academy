<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
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
