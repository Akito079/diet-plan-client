<template>
  <!-- Table Section -->
  <div
    class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72"
    v-if="meals.length != 0"
  >
    <div class="max-w-[85rem] py-10 lg:py-14 mx-auto">
      <!-- Card -->
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div
              class="bg-white ring-1 ring-slate-900/5 shadow-lg rounded-xl overflow-hidden dark:bg-slate-900 dark:border-gray-700"
            >
              <!-- Header -->
              <div
                class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700"
              >
                <!-- Input -->
                <div class="sm:col-span-1">
                  <label for="hs-as-table-product-review-search" class="sr-only"
                    >Search</label
                  >
                  <div class="relative">
                    <input
                      type="text"
                      id="hs-as-table-product-review-search"
                      name="hs-as-table-product-review-search"
                      class="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Search"
                    />
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4"
                    >
                      <svg
                        class="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- End Input -->
                <div class="sm:col-span-2 md:grow">
                  <div class="flex justify-end gap-x-2">
                    <div
                      class="hs-dropdown relative inline-block [--placement:bottom-right]"
                    >
                      <router-link
                        :to="{ name: 'mealCreate' }"
                        id="hs-as-table-table-export-dropdown"
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span class="material-symbols-outlined"> add </span>
                        Add Meal
                      </router-link>
                    </div>
                    <div
                      class="hs-dropdown relative inline-block [--placement:bottom-right]"
                      data-hs-dropdown-auto-close="inside"
                    >
                      <button
                        id="hs-as-table-table-filter-dropdown"
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          class="flex-shrink-0 w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M7 12h10" />
                          <path d="M10 18h4" />
                        </svg>
                        Filter
                        <span
                          class="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200 dark:border-gray-700 dark:text-blue-500"
                        >
                          1
                        </span>
                      </button>
                      <div
                        class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                        aria-labelledby="hs-as-table-table-filter-dropdown"
                      >
                        <div
                          class="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                          <label
                            for="hs-as-filters-dropdown-all"
                            class="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-all"
                              checked
                            />
                            <span
                              class="ms-3 text-sm text-gray-800 dark:text-gray-200"
                              >All</span
                            >
                          </label>
                          <label
                            for="hs-as-filters-dropdown-published"
                            class="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-published"
                            />
                            <span
                              class="ms-3 text-sm text-gray-800 dark:text-gray-200"
                              >Published</span
                            >
                          </label>
                          <label
                            for="hs-as-filters-dropdown-pending"
                            class="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-pending"
                            />
                            <span
                              class="ms-3 text-sm text-gray-800 dark:text-gray-200"
                              >Pending</span
                            >
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Header -->
              <!-- Table -->
              <table
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <thead class="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                          Products
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                          Description
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                          Date
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                          Price
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                          Actions
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr
                    v-for="meal in meals"
                    :key="meal.id"
                    @click="mealDetail(meal.id)"
                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div class="flex items-center gap-x-4">
                          <img
                            class="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-lg object-cover"
                            :src="meal.image"
                            alt="Image Description"
                          />
                          <div>
                            <span
                              class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                              >{{ meal.name }}</span
                            >
                          </div>
                        </div>
                      </a>
                    </td>

                    <td class="h-px w-72 min-w-[18rem] align-top">
                      <a class="block p-6" href="#">
                        <Stars :rating="meal.rating"></Stars>
                       
                        <span
                          class="block w-[400px] my-1 truncate text-sm font-semibold text-gray-800 dark:text-gray-200"
                        
                          ></span
                        >
                        <span class="block  text-sm text-gray-500">{{
                          meal.description
                        }} </span>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <span class="text-sm text-gray-600 dark:text-gray-400"
                          >{{meal.createdDate}}</span
                        >
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#"> {{ meal.price }} Kyats </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top ">
                      <a class="inline-block py-6 px-3" href="#"> <i class="fa-solid fa-pen-to-square text-blue-500"></i></a>
                      <a class="inline-block py-6 px-3" href="#"> <i class="fa-solid fa-trash text-red-500"></i> </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End Table -->
              <!-- Footer -->
              <div
                class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
              >
                <div class="max-w-sm space-y-3">
                  <select
                    class="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option selected>5</option>
                    <option>6</option>
                  </select>
                </div>
                <div>
                  <div class="inline-flex gap-x-2">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        class="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Next
                      <svg
                        class="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- End Footer -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Table Section -->

  <!-- Fallback ui if there is no data -->
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72" v-else>
    <header class="mb-auto flex justify-center z-50 w-full py-4">
      <nav class="px-4 sm:px-6 lg:px-8" aria-label="Global">
        <a
          class="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
          href="#"
          aria-label="Brand"
        ></a>
      </nav>
    </header>

    <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1
        class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white"
      ></h1>
      <h1 class="block text-2xl font-bold text-white"></h1>
      <p class="mt-3 text-gray-600 dark:text-gray-400">
        Oops, something went wrong.
      </p>
      <p class="text-gray-600 dark:text-gray-400">
        Sorry, we couldn't load the datas
      </p>
      <div
        class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
      >
        <a
          class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          Contact Admin
        </a>
        <a
          class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="../examples.html"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to home
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Stars from "./Stars.vue";
const router = useRouter();
const meals = ref([]);
function mealDetail(id) {
  router.push({
    name: "mealUpdate",
    params: { mealId: id },
  });
}
const getMeals = async () => {
  try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const response = await axios.get("http://localhost:8000/api/meals?includeReviews=true");
    for (let i = 0; i < response.data.data.length; i++) {
      if (response.data.data[i].image != null) {
        response.data.data[
          i
        ].image = `http://localhost:8000/mealImage/${response.data.data[i].image}`;
      }
      if(response.data.data[i].rating != 0) {
        response.data.data[i].rating = parseFloat( response.data.data[i].rating);
      }
    }
    meals.value = response.data.data;
   console.log(meals.value);
  } catch (error) {
    console.log(error);
  }
};

await getMeals();
</script>
