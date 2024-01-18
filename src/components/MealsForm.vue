<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CustomInput from "./CustomInput.vue";
import TextArea from "./TextArea.vue";
import CustomButton from "./CustomButton.vue";
import FileUpload from "primevue/fileupload";
const router = useRouter();
const form = ref({
  name: "",
  description: "",
  image: "",
  tags: "",
  price: "",
});
const errors = ref([]);
function onFilePicked(event) {
  const file = event.files[0];
  form.value.image = file;
}
async function createMeals() {
  console.log(form.value);
  try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    await axios.post(" http://localhost:8000/api/meals", form.value, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    router.push({ name: "mealShow" });
  } catch (error) {
    errors.value = error.response.data.errors;
    console.log(errors.value);
  }
}
</script>


<template>
  <!-- Card Section -->
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <form @submit.prevent="createMeals()" enctype="multipart/form-data">
      <!-- Card -->
      <div
        class="bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-900"
      >
        <div class="pt-0 p-4 sm:pt-0 sm:p-7">
          <!-- Grid -->
          <div class="space-y-4 sm:space-y-6">
            <div class="space-y-2">
              <CustomInput
                v-model="form.name"
                type="text"
                placeholder="Enter the Product Name"
                label="Product Name"
              >
              </CustomInput>
            </div>

            <div class="space-y-2">
              <CustomInput
                v-model="form.price"
                type="number"
                placeholder="Enter the price"
                label="Price"
              ></CustomInput>
            </div>

            <!-- upload file -->
            <div class="card flex justify-content-center">
              <FileUpload
                mode="basic"
                :unstyled="false"
                :pt="{root:{class:'bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700'}}"
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                customUpload
                @uploader="onFilePicked"
              />
            </div>
            <!-- <div class="space-y-2">
              <label
                for="af-submit-app-upload-images"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Preview image
              </label>

              <label
                for="af-submit-app-upload-images"
                class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
              >
                <input
                  id="af-submit-app-upload-images"
                  name="af-submit-app-upload-images"
                  type="file"
                  class="sr-only"
                  accept="image/*"
                  @change="onFilePicked"
                />
                <svg
                  class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  />
                  <path
                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                  />
                </svg>
                <span
                  class="mt-2 block text-sm text-gray-800 dark:text-gray-200"
                  id="dropzone"
                >
                  Browse your device or
                  <span class="group-hover:text-blue-700 text-blue-600"
                    >drag 'n drop'</span
                  >
                </span>
                <span class="mt-1 block text-xs text-gray-500">
                  Maximum file size is 2 MB
                </span>
              </label>
            </div> -->

            <div class="space-y-2">
              <CustomInput
                v-model="form.tags"
                label="Tags"
                placeholder="Eg.hot items"
                type="text"
              ></CustomInput>
            </div>

            <div class="space-y-2">
              <TextArea
                v-model="form.description"
                label="Description"
                placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
              ></TextArea>
            </div>

            <CustomButton
              value="Submit your product"
              type="submit"
              classList ="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            ></CustomButton>
          </div>
          <!-- End Grid -->
        </div>
      </div>
      <!-- End Card -->
    </form>
  </div>
  <!-- End Card Section -->
</template>

