<template>
  <button
    class="call-to-action-btn border w-fit px-5 py-3 font-bold text-sm outline-none rounded-xl focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-theme-checkbox-clr"
    :class="props.uncolored ? 'bg-transparent text-theme-text-clr border-2 border-theme-checkbox-clr' : 'bg-theme-fill-clr text-white'"
  >{{
    props.text
  }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  uncolored?: boolean
}>()
</script>

<style lang="scss" scoped>
</style>
