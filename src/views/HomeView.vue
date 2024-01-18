<template>
  <NavBar></NavBar>
  <!-- healthyfood and salad section starts here -->
  <section
    class="w-full min-h-[960px] bg-header-image-1 bg-no-repeat bg-center bg-cover"
  >
    <div class="container-fluid grid grid-cols-12">
      <div class="mt-10 lg:mt-48 col-span-12 lg:col-span-5">
        <h1 class="text-3xl sm:text-5xl font-medium leading-snug">
          Healthy Food <br class="hidden sm:block" />
          and Salad
        </h1>
        <p class="col-span-4 my-8 text-[#493B4E] font-semibold">
          We provide esential nutrients,vitamins and minerals that nourish the
          body and support overall well being.
        </p>
      </div>
      <div class="flex gap-10 items-center col-span-12">
        <div class="">
          <h1>100%</h1>
          <p class="font-bold">Organic</p>
        </div>
        <div class="">
          <h1>0%</h1>
          <p class="font-bold">Fat</p>
        </div>
        <div class="">
          <h1>+90%</h1>
          <p class="font-bold">Protein</p>
        </div>
      </div>
    </div>
  </section>
  <!-- healthyfood and salad section ends here -->
  <!-- product and services section starts here -->
  <section>
    <div class="container-fluid">
      <!-- seection header starts here -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div
          class="relative before:absolute before:-left-2 before:top-0 before:content-[''] before:block before:w-1 before:h-[2.3rem] before:bg-black"
        >
          <h1 class="text-2xl sm:text-4xl font-bold">Products and Services</h1>
          <p class="max-w-[500px] text-[#493B4E] mt-3 tracking-wide">
            We offers a wide range of high-quality products and services
            tailored to meet the diverse needs and preferences of our customers.
          </p>
        </div>
        <div class="my-10">
          <button
            class="w-48 px-10 py-3 bg-black hover-btn-black transition-colors duration-300 text-gray-300 rounded-2xl"
          >
            See More
          </button>
        </div>
      </div>
      <!-- section header ends here -->
      <!-- set menus cards section starts -->
      <div
        v-if="meals.length != 0"
        class="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 auto-rows-[1fr]  md:gap-[6rem] lg:gap-10"
        id="card-container"
      >
        <div class="card col-span-4 mt-28 " v-for="meal in meals" :key="meal.id">
          <div
            class="px-4 col-span-4 hover:scale-105 transition-transform duration-300 bg-black rounded-2xl"
          >
            <div class="relative tag">
              <div class="-mt-16 inline-block">
                <img
                  :src="meal.image"
                  class=" w-36 h-36 object-cover rounded-full "
                  alt=""
                />
                <div class="btn-secondary absolute top-28 right-0" v-if="meal.tags != null">{{ meal.tags }}</div>
              </div>
            </div>
            <div class="flex flex-col mt-5 gap-8">
              <h3 class="text-xl text-white font-bold">{{meal.name}}</h3>
              <div class="">
                <div class="flex items-center">
                  <div class="stars flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 fill-yellow-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  <span class="rating tracking-wide text-gray-300">{{meal.rating}} |</span>
                  <span class="review text-gray-300">{{meal.reviews.length}} Reviews</span>
                </div>
              </div>
              <p class="text-gray-300">{{meal.description}}</p>
              <div class="flex justify-between items-center">
                <span class="price text-white text-xl font-bold">{{ meal.price }} Ks</span>
                <span class="available text-white text-xl font-bold"
                  >+110 Available</span
                >
              </div>
              <button
                class="text-center mb-5 py-3 rounded-xl font-medium hover:bg-gray-500 hover:text-white transition-colors duration-300 bg-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- some dot circle starts here -->
      <div class="my-10 flex items-center gap-2 justify-center">
        <div class="w-3 h-3 rounded-full bg-black"></div>
        <div class="w-3 h-3 rounded-full bg-gray-400"></div>
        <div class="w-3 h-3 rounded-full bg-gray-400"></div>
      </div>
      <!-- some dot circle starts here -->
      <!-- set menus cards section ends -->
    </div>
  </section>
  <!-- product and service section ends here -->
  <!-- why choose us section starts here -->
  <section
    class="w-full min-h-[909px] flex items-center justify-center bg-healthy-juice bg-center bg-no-repeat bg-cover"
  >
    <div class="container-fluid">
      <div class="flex sm:justify-end items-center">
        <div class="sm:basis-2/5 flex flex-col justify-center space-y-8">
          <h1 class="font-dancing-script text-3xl font-bold">Why Choose Us?</h1>
          <h3 class="text-5xl sm:text-6xl font-bold">
            Refreshing <br class="hidden sm:block" />
            Fruit Juice
          </h3>
          <p class="text-[#493B4E] text-lg font-medium">
            Start your day with a burst of freshness, indulge in our
            invigorating range of fresh juices from finest fruits
          </p>
          <button
            class="w-48 px-10 py-3 bg-black hover-btn-black transition-colors duration-300 text-gray-300 rounded-2xl"
          >
            SHOW ALL
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- why choose us section section ends here -->
  <!-- signup section starts here -->
  <section>
    <!-- main flex container starts -->
    <div class="container-fluid">
      <div class="flex flex-col lg:flex-row justify-center items-center my-20">
        <div
          class="w-full lg:basis-1/2 flex flex-col relative before:absolute before:-left-2 before:top-0 before:content-[''] before:block before:w-1 before:h-[2.3rem] before:bg-black"
        >
          <h3 class="text-2xl sm:text-4xl font-bold">Start Using Today</h3>
          <p class="max-w-[450px] text-gray-400 font-medium my-3 text-lg">
            Sign up today and unlocks a world of exclusive benefits and exciting
            offers.
          </p>
        </div>
        <div
          class="my-3 w-full lg:basis-1/2 flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-5"
        >
          <button
            class="w-52 px-10 py-3 text-gray-300 hover-btn-black transition-colors duration-300 bg-black rounded-2xl"
          >
            SIGNUP NOW
          </button>
          <button
            class="w-52 px-10 py-3 font-medium text-gray-300 hover-btn-black transition-colors duration-300 bg-black ring-2 ring-black rounded-2xl"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- sign up section ends here -->
  <Footer></Footer>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import AuthService from "@/services/AuthService";
import axios from "axios";
import { ref, onMounted } from "vue";
const meals = ref([]);
onMounted(async function () {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  const response = await axios.get(
    "http://localhost:8000/api/meals?includeReviews=true"
  );
  for (let i = 0; i < response.data.data.length; i++) {
    response.data.data[
      i
    ].image = `http://localhost:8000/mealImage/${response.data.data[i].image}`;
    response.data.data[i].rating = parseFloat(response.data.data[i].rating);
  }
  meals.value = response.data.data;
  console.log(meals.value);
});
</script>
