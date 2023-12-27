<template>
  <html class="h-full">
    <body class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <main class="w-full max-w-md mx-auto p-6">
        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <RouterLink :to="{name:'login'}" class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signin.html">
                  Sign in here
                </RouterLink>
              </p>
            </div>
            <div class="mt-5">
              <RegitserForm></RegitserForm>
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
</template>
<script setup>
import RegitserForm from '@/components/RegitserForm.vue';
import { RouterLink } from 'vue-router';
</script>
