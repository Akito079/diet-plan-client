<template>
  <Dashboard/>
  <!-- Card Section -->
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="bg-white border rounded-xl shadow-sm sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <div class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
      <img class="w-full h-full absolute top-0 start-0 object-cover" :src="meal.image" alt="Image Description">
    </div>
    <div class="flex flex-wrap">
      <div class="p-4 flex flex-col h-full sm:p-7">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          {{meal.name}}
        </h3>
        <p class="mt-1 text-gray-500 dark:text-gray-400">
         {{meal.description}}
        </p>
        <div class="mt-5 sm:mt-auto">
          <p class="text-xs text-gray-500 dark:text-gray-500">
           {{meal.price}} Kyats
          </p>
        </div>
        <div class="mt-5 sm:mt-auto">
          <p class="text-xs text-gray-500 dark:text-gray-500">
           {{meal.createdDate}}
          </p>
        </div>

      </div>
    </div>
  </div>  </div>
  <!-- End Card Section -->
</template>

<script setup>
import Dashboard from "@/components/Dashboard.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const mealId = route.params.mealId;
const meal = ref([]);
onMounted(async function () {
  try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const response = await axios.get(
      `http://localhost:8000/api/meals/${mealId}?includeReviews=true`
    );
    if(response.data.data.image != null) {
      response.data.data.image = `http://localhost:8000/mealImage/${response.data.data.image}`
    }

   meal.value = response.data.data;
  console.log(meal.value)
  } catch (error) {

  }
});
</script>
