<template>
  <!-- footer section starts here -->
  <section class="bg-black">
    <div class="container-fluid">
      <div
        class="grid sm:grid-cols-4 my-20 md:grid-cols-8 lg:grid-cols-12 gap-6"
      >
        <div class="col-span-4 lg:col-span-6 leading-relaxed">
          <h3 class="text-3xl text-gray-300">DIET PLAN</h3>
          <p class="max-w-[450px] text-gray-500 my-2">
            Our comprehensive diet plan is designed to optimize your
            nutrition and support your health goals,ensuring a balanced and
            sustainable approach to eating
          </p>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h3 class="text-gray-300">PRODUCT</h3>
          <ul class="space-y-2">
              <li v-for="(product,index) in products" :key="index" class="mt-2 products text-gray-500 hover:scale-105 hover:text-gray-300 transition-colors duration-300">{{ product }}</li>
          </ul>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h3 class="text-gray-300">About</h3>
          <ul class="space-y-2">
              <li v-for="(about,index) in abouts" :key="index" class="mt-2 abouts text-gray-500 hover:scale-105 hover:text-gray-300 transition-colors duration-300">{{ about }}</li>
          </ul>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h3 class="text-gray-300">Contact</h3>
          <ul class="space-y-2" id="">
            <li class="mt-2 text-gray-500 hover:scale-105 hover:text-gray-300 transition-colors duration-300">MMS IT</li>
            <li class="text-gray-500 hover:scale-105 hover:text-gray-300 transition-colors duration-300">0925015208</li>
            <li class="text-gray-500 hover:scale-105 hover:text-gray-300 transition-colors duration-300">Shan kone Street</li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row justify-between items-center py-5"
      >
        <div class="text-gray-500">
          &copy;2023-MMSIT | All rights reserved
        </div>
        <div class="text-gray-500">MMSIT BUD</div>
      </div>
    </div>
  </section>
  <!-- footer section ends here -->
</template>

<script setup>
let products = ['How it works','Features','Pricing','Testimonials'];
let abouts = ['Our team','Careers','Press','Stores'];
</script>