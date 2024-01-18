<template>
 <Suspense>
  <AsyncMealTable/>
  <template #fallback>
    <MealSkeleton/>
  </template>
 </Suspense>
</template>

<script setup>
import AsyncMealTable from './AsyncMealTable.vue';
import MealSkeleton from './MealSkeleton.vue';
</script>