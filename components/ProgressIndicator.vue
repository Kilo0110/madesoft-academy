<template>
  <div
    class="progress-indicator-container flex gap-10 mb-5"
    :class="props.statusLevel === 1 ? 'level-1' :
      props.statusLevel === 2 ? 'level-2' :
        props.statusLevel === 3 ? 'level-3' :
          ''"
  >
    <span
      class="progress-indicator border-2 border-theme-checkbox-clr w-5 h-5 rounded-full bg-white relative"
      v-for="n in 3"
    ></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  statusLevel: 1 | 2 | 3
}>()
</script>

<style lang="scss" scoped>
.progress-indicator-container.level-1 {
  .progress-indicator:first-of-type {
    &::before {
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
  }

  .progress-indicator:not(:first-of-type) {
    &::after {
      @apply bg-theme-icon-clr;

      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      opacity: .5;

      width: 43px;
      height: 2px;
    }
  }
}

.progress-indicator-container.level-2 {
  .progress-indicator:not(:last-of-type) {
    &::before {
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
  }

  .progress-indicator:first-of-type {
    &::after {
      @apply bg-theme-checkbox-clr;

      content: '';
      position: absolute;
      top: 50%;
      left: 100%;

      width: 43px;
      height: 2px;
    }
  }

  .progress-indicator:last-of-type {
    &::after {
      @apply bg-theme-icon-clr;

      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      opacity: .5;

      width: 43px;
      height: 2px;
    }
  }
}

.progress-indicator-container.level-3 {
  .progress-indicator {
    &::before {
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
  }

  .progress-indicator:not(:last-of-type) {
    &::after {
      @apply bg-theme-checkbox-clr;

      content: '';
      position: absolute;
      top: 50%;
      left: 100%;

      width: 43px;
      height: 2px;
    }
  }
}
</style>
