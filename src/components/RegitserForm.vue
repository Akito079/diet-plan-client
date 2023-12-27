<template>
  <!-- Form -->
  <form @submit.prevent="handleRegister()" >
    <div class="grid gap-y-4">
      <!-- Form Group -->
      <div>
        <label for="name" class="block text-sm mb-2 dark:text-white"
          >Name</label
        >
        <div class="relative">
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            class=" py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-describedby="name-error"
          />
          <div
            class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
          >
            <svg
              :class="{'hidden':errorStatus}"
              class="h-5 w-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </div>
        <p :class="{'hidden':errorStatus}" class=" text-xs text-red-600 mt-2" id="email-error">
         {{ errorMessage }}
        </p>
      </div>
      <!-- End Form Group -->
      <!-- Form Group -->
      <div>
        <label for="email" class="block text-sm mb-2 dark:text-white"
          >Email address</label
        >
        <div class="relative">
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            required
            aria-describedby="email-error"
          />
          <div
            class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
          >
            <svg
              :class="{'hidden':errorStatus}"
              class="h-5 w-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </div>
        <p :class="{'hidden':errorStatus}" class=" text-xs text-red-600 mt-2" id="email-error">
         {{errorMessage}}
        </p>
      </div>
      <!-- End Form Group -->

      <!-- Form Group -->
      <div>
        <label for="password" class="block text-sm mb-2 dark:text-white"
          >Password</label
        >
        <div class="relative">
          <input
            v-model="form.password"
            type="password"
            id="password"
            name="password"
            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            required
            aria-describedby="password-error"
          />
          <div
            class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
          >
            <svg
              :class="{'hidden':errorStatus}"
              class="h-5 w-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </div>
        <p :class="{'hidden' : errorStatus}" class=" text-xs text-red-600 mt-2" id="password-error">
          {{errorMessage}}
        </p>
      </div>
      <!-- End Form Group -->
      <!-- Form Group -->
      <div>
        <label for="confirm-password" class="block text-sm mb-2 dark:text-white"
          >Confirm Password</label
        >
        <div class="relative">
          <input
          v-model="form.password_confirmation"
            type="password"
            id="confirm-password"
            name="confirm-password"
            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            required
            aria-describedby="confirm-password-error"
          />
          <div
            class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
          >
            <svg
             :class="{'hidden':errorStatus}"
              class="h-5 w-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </div>
        <p :class="{'hidden':errorStatus}" class=" text-xs text-red-600 mt-2" id="confirm-password-error">
         Password does not match the password
        </p>
      </div>
      <!-- End Form Group -->
      <!-- Checkbox -->
      <div class="flex items-center">
        <div class="flex">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="shrink-0 mt-0.5 border-2 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
        </div>
        <div class="ms-3">
          <label for="remember-me" class="text-sm dark:text-white"
            >I accept the
            <a
              class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              >Terms and Conditions</a
            ></label
          >
        </div>
      </div>
      <!-- End Checkbox -->
      <button
        type="submit"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Sign up
      </button>
    </div>
  </form>
  <!-- End Form -->
</template>

<script setup>
import { ref } from 'vue';
import AuthService from '@/services/AuthService';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = ref({
  name : '',
  email : '',
  password: '',
  password_confirmation : '',
});
const errorMessage = ref(null);
const errorStatus = ref(true);
async function handleRegister(){
 try {
  console.log(form.value);
  await AuthService.register(form.value);
  router.push('/login');
 } catch (error) {
  console.log(error);
  errorStatus.value = true;
  errorMessage.value = error.response.data.message
 }
}
</script>

