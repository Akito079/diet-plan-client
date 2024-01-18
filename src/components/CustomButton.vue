<script setup>
const props = defineProps(['value','color','type','classList']);

</script>

<template>
   <div class="mt-5 flex justify-center gap-x-2">
    <button
      :type="props.type"
      :class="props.classList"
    >
      Submit your project
    </button>
  </div>
</template>