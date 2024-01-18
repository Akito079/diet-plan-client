<script setup>
const props = defineProps(['modelValue','label','placeholder'])
const emits = defineEmits(['update:modelValue']);
</script>

<template>
   <label
    :for="props.label"
    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
  >
    {{ props.label }}
  </label>

  <textarea
    :id="props.label"
    class="py-2 px-3 block w-full border-gray-300 border-2 rounded-lg text-sm focus:border-gray-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
    rows="6"
    :placeholder="props.placeholder"
    @input="emits('update:modelValue',$event.target.value)"
  >{{ props.modelValue }}</textarea>
</template>