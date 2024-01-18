<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 animate-pulse">
    <div class="max-w-[85rem] py-10 lg:py-14 mx-auto">
      <!-- Card -->
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div
              class="bg-white ring-1 ring-sky-900/5 border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
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
                  <div
                    class="relative bg-gray-200 rounded-lg w-[150px] h-[30px]"
                  ></div>
                </div>
                <!-- End Input -->
                <div class="sm:col-span-2 md:grow">
                  <div class="flex justify-end gap-x-2">
                    <div
                      class="hs-dropdown relative inline-block bg-gray-200 rounded-lg w-[70px] h-[30px] [--placement:bottom-right]"
                    ></div>
                    <div
                      class="hs-dropdown relative inline-block bg-gray-200 rounded-lg w-[70px] h-[30px] [--placement:bottom-right]"
                    ></div>
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
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        >
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr
                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div class="flex items-center gap-x-4">
                          <div
                            class="h-[2.375rem] w-[2.375rem] rounded-lg bg-gray-200"
                          ></div>
                          <div>
                            <div
                              class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                            ></div>
                          </div>
                        </div>
                      </a>
                    </td>

                    <td class="h-px w-72 min-w-[18rem] align-top">
                      <a class="block p-6" href="#">
                        <div class="flex flex-col gap-3 mb-2">
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                        </div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div
                      ></a>
                    </td>
                  </tr>
                  <tr
                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div class="flex items-center gap-x-4">
                          <div
                            class="h-[2.375rem] w-[2.375rem] rounded-lg bg-gray-200"
                          ></div>
                          <div>
                            <div
                              class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                            ></div>
                          </div>
                        </div>
                      </a>
                    </td>

                    <td class="h-px w-72 min-w-[18rem] align-top">
                      <a class="block p-6" href="#">
                        <div class="flex flex-col gap-3 mb-2">
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                        </div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#"
                        ><div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div
                      ></a>
                    </td>
                  </tr>
                  <tr
                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div class="flex items-center gap-x-4">
                          <div
                            class="h-[2.375rem] w-[2.375rem] rounded-lg bg-gray-200"
                          ></div>
                          <div>
                            <div
                              class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                            ></div>
                          </div>
                        </div>
                      </a>
                    </td>

                    <td class="h-px w-72 min-w-[18rem] align-top">
                      <a class="block p-6" href="#">
                        <div class="flex flex-col gap-3 mb-2">
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                        </div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div
                      ></a>
                    </td>
                  </tr>
                  <tr
                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div class="flex items-center gap-x-4">
                          <div
                            class="h-[2.375rem] w-[2.375rem] rounded-lg bg-gray-200"
                          ></div>
                          <div>
                            <div
                              class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                            ></div>
                          </div>
                        </div>
                      </a>
                    </td>

                    <td class="h-px w-72 min-w-[18rem] align-top">
                      <a class="block p-6" href="#">
                        <div class="flex flex-col gap-3 mb-2">
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                          <div
                            class="text-xs bg-gray-200 w-[250px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                          ></div>
                        </div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div>
                      </a>
                    </td>
                    <td class="h-px w-px whitespace-nowrap align-top">
                      <a class="block p-6" href="#">
                        <div
                          class="text-xs bg-gray-200 w-[100px] h-[25px] rounded-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                        ></div
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End Table -->
              <!-- Footer -->
              <!-- <div
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
              </div> -->
              <!-- End Footer -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>

