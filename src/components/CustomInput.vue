<script setup>
import { reactive } from 'vue'
const props = defineProps(['modelValue','type','label','placeholder']);
const emits = defineEmits(['update:modelValue']);
const classObject = reactive({

})
</script>
<template>
  <label
    :for="props.label"
    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
  >
    {{props.label}}
  </label>
  <input
    :id="props.label"
    :type="props.type"
    :value="props.modelValue"
    @input="emits('update:modelValue',$event.target.value)"
    class="py-2 px-3 pe-11 block w-full border-2 outline-none 
    border-gray-300 focus:border-gray-500 shadow-sm rounded-lg text-sm 
    dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
    :placeholder="props.placeholder"
  />

</template>
