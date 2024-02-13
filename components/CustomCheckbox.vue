<template>
  <div class="checkbox-input-container w-full flex items-center gap-2">
    <input
      type="checkbox"
      :name="props.name"
      :id="props.id"
      :required="props.required"
      class="w-5 h-5 text-theme-checkbox-clr bg-gray-100 border-gray-300 rounded-lg focus:ring-theme-fill-clr focus:ring-2"
    >
    <label
      :for="props.id"
      class="text-theme-icon-clr"
    >{{ props.label }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string,
  id: string,
  name: string,
  required?: 'true' | 'false'
}>()
</script>

<style lang="scss" scoped>
input:checked {
  @apply bg-theme-fill-clr text-gray-100
}
</style>
