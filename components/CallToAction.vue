<template>
  <button
    class="call-to-action-btn border w-fit px-5 py-3 font-bold text-sm bg-theme-fill-clr text-white outline-none rounded-xl focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-theme-checkbox-clr"
  >{{
    props.text
  }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<style lang="scss" scoped>
</style>
