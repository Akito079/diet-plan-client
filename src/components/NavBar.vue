<template>
  <!-- nav section starts here -->
  <nav class="ring-1 ring-slate-900/5 shadow-lg">
    <div class="container-fluid flex items-center justify-between">
      <!-- left nav-flex-item starts here -->
      <div class="font-bold">DIET PLAN</div>
      <!-- left nav-flex-item ends here -->
      <!-- right nav-item starts here -->
      <div class="hidden md:block">
        <ul class="flex items-center gap-5" >
         <li>
          <RouterLink to="/">Home</RouterLink>
         </li>
         <li>
            <RouterLink to="/products">Products</RouterLink>
           </li>
           <li>
            <RouterLink to="/contact">Contact us</RouterLink>
           </li>
           <li>
            <RouterLink to="/about">About us</RouterLink>
           </li>
          <li>
            <!-- <span class="material-symbols-outlined"> account_circle </span> -->
            <div class="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-trigger"
                type="button"
                class="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img class="w-8 h-auto rounded-full" src="../../images/AhnYujin.jpg" alt="user" />
                <span
                  class="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400"
                  >{{authStore.user.name}}</span
                >
                <svg
                  class="hs-dropdown-open:rotate-180 w-4 h-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                aria-labelledby="hs-dropdown-custom-trigger"
              >
                <a
                  class="flex items-center gap-x-1 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                  href="#"
                >
                <span class="material-symbols-outlined">
                  account_circle
                  </span>
                   Profile
                </a>
                <a
                  class="flex items-center gap-x-1 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                  href="#"
                >
                <span class="material-symbols-outlined">
                  dark_mode
                  </span>
                  Dark Mode
                </a>
                <a
                  class="flex items-center gap-x-1 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                  href="#"
                >
                <span class="material-symbols-outlined">
                  settings
                  </span>
                  Setting
                </a>
                <a 
                  @click="handleLogout()"
                  class="flex items-center gap-x-1 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                  href="#"
                >
                <span class="material-symbols-outlined">
                logout
                </span>
                 Sign Out
                </a>
              </div>
            </div>
          </li>
          <li class="cursor-pointer">
            <span class="material-symbols-outlined">
              notifications_active
            </span>
          </li>
          <li class="cursor-pointer">
            <span class="material-symbols-outlined"> shopping_cart </span>
          </li>
        </ul>
      
      </div>
      <!-- right nav-item ends here -->
      <!-- resp humburger menu starts -->
      <div
        class="md:hidden flex justify-center items-center"
        data-hs-overlay="#hs-overlay-right"
      >
        <i class="fa-solid fa-bars"></i>
      </div>
      <!-- resp humburger menu ends -->
    </div>
    <div
      id="hs-overlay-right"
      class="p-5 hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] text-gray-300 bg-gray-700 border-s dark:bg-gray-800 dark:border-gray-700 hidden"
      tabindex="-1"
    >
      <div
        class="flex justify-between items-center py-2 border-b dark:border-gray-700"
      >
        <div class="flex items-start gap-2">
          <div class="">
            <img
              src="../../images/AhnYujin.jpg"
              class="w-10 h-10 rounded-full object-cover shrink-0"
              alt=""
            />
          </div>
          <div class="">
            <h3>{{authStore.user.name}}</h3>
            <h3>{{authStore.user.email}}</h3>
          </div>
        </div>
        <button
          type="button"
          class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-overlay-right"
        >
          <span class="sr-only">Close modal</span>
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul class="mt-5 flex flex-col gap-2">
          <li data-hs-overlay="#hs-overlay-right">
            <RouterLink to="/"
              >Home</RouterLink
            >
          </li>
          <li data-hs-overlay="#hs-overlay-right">
            <RouterLink
              :to="{ name: 'products' }"
             
              >Products</RouterLink
            >
          </li>
          <li data-hs-overlay="#hs-overlay-right">
            <RouterLink to="/about"
              >About-Us</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" 
              >Contact-Us</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- nav section ends here -->
</template>

<script setup>
import AuthService from '@/services/AuthService';
import axios from 'axios';
import { ref,onMounted } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { userStore } from '@/stores/userStore';
const authStore = userStore();
const router = useRouter();
async function handleLogout(){
  try {
    await axios.post('http://localhost:8000/logout');
    localStorage.removeItem('user');
    router.push('/login');
  } catch (error) {
    console.log(error);
  }
}
onMounted(
  async function (){
   await authStore.getUser();
    console.log(authStore.user)
  }
)
</script>
<style scoped>
.router-link-active,.routerlink-exact-active{
  font-weight: 600;
}
</style>