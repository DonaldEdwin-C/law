<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <!-- Breadcrumb -->
  <div
    class="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden"
  >
    <div class="flex items-center py-2">
      <!-- Navigation Toggle -->
      <button
        type="button"
        class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-application-sidebar"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-application-sidebar"
      >
        <span class="sr-only">Toggle Navigation</span>
        <svg
          class="shrink-0 size-4"
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
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 3v18" />
          <path d="m8 9 3 3-3 3" />
        </svg>
      </button>
      <!-- End Navigation Toggle -->

      <!-- Breadcrumb -->
      <ol class="ms-3 flex items-center whitespace-nowrap">
        <li class="flex items-center text-sm text-gray-800">
          Application Layout
          <svg
            class="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </li>
        <li
          class="text-sm font-semibold text-gray-800 truncate"
          aria-current="page"
        >
          Transactions
        </li>
      </ol>
      <!-- End Breadcrumb -->
    </div>
  </div>
  <!-- End Breadcrumb -->

  <!-- Sidebar -->
  <div
    id="hs-application-sidebar"
    class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-65 h-full hidden fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
    role="dialog"
    tabindex="-1"
    aria-label="Sidebar"
  >
    <div class="relative flex flex-col h-full max-h-full">
      <!-- Content -->
      <div
        class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <nav
          class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul class="flex flex-col space-y-1" data-hs-scrollspy="#scrollspy">
            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 hs-scrollspy-active:bg-gray-100 active"
                href="#dashboard"
              >
                <svg
                  class="shrink-0 size-4"
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </a>
            </li>

            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 hs-scrollspy-active:bg-gray-100"
                href="#users"
              >
                <svg
                  class="shrink-0 size-4"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Transactions
              </a>
            </li>

            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 hs-scrollspy-active:bg-gray-100"
                href="#account"
              >
                <svg
                  class="shrink-0 mt-0.5 size-4"
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
                  <circle cx="18" cy="15" r="3" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                  <path d="m21.7 16.4-.9-.3" />
                  <path d="m15.2 13.9-.9-.3" />
                  <path d="m16.6 18.7.3-.9" />
                  <path d="m19.1 12.2.3-.9" />
                  <path d="m19.6 18.7-.4-1" />
                  <path d="m16.8 12.3-.4-1" />
                  <path d="m14.3 16.6 1-.4" />
                  <path d="m20.7 13.8 1-.4" />
                </svg>
                Goals
              </a>
            </li>

            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 hs-scrollspy-active:bg-gray-100"
                href="#projects"
              >
                <svg
                  class="shrink-0 size-4"
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
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Milestones
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Sidebar -->

  <!-- Content -->
  <div class="lg:ps-65">
    <div class="min-h-300 p-4 md:p-8">
      <!-- your content goes here ... -->

      <!-- Content -->
      <div id="scrollspy" class="space-y-10 md:space-y-16">
        <div id="dashboard" class="min-h-[100vh] scroll-mt-24">
          <h2 v-if="user" class="text-lg font-semibold text-gray-800">
            Welcome, {{ user.username }}
          </h2>
          <div class="p-6">
            <div v-if="user">
              <button
                class="mt-6 bg-red-500 text-white px-4 py-2 rounded"
                @click="logout"
              >
                Logout
              </button>
            </div>
          </div>

          <!-- Card Section -->
          <div class="max-w-[100vw] px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <!-- Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <!-- Card -->
              <div
                class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl"
              >
                <div class="inline-flex justify-center items-center">
                  <span
                    class="size-2 inline-block bg-gray-500 rounded-full me-2"
                  ></span>
                  <span class="text-xs font-semibold uppercase text-gray-600"
                    >Balance</span
                  >
                </div>

                <div class="text-center">
                  <h3
                    class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800"
                  >
                    {{ balance }}
                  </h3>
                </div>
              </div>
              <!-- End Card -->

              <!-- Card -->
              <div
                class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl"
              >
                <div class="inline-flex justify-center items-center">
                  <span
                    class="size-2 inline-block bg-green-500 rounded-full me-2"
                  ></span>
                  <span class="text-xs font-semibold uppercase text-gray-600"
                    >Goals</span
                  >
                </div>

                <div class="text-center">
                  <h3
                    class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800"
                  >
                    {{ totalGoals }}
                  </h3>
                </div>
              </div>
              <!-- End Card -->

              <!-- Card -->
              <div
                class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl"
              >
                <div class="inline-flex justify-center items-center">
                  <span
                    class="size-2 inline-block bg-red-500 rounded-full me-2"
                  ></span>
                  <span class="text-xs font-semibold uppercase text-gray-600"
                    >Streaks</span
                  >
                </div>

                <div class="text-center">
                  <h3
                    class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800"
                  >
                    4
                  </h3>
                </div>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Grid -->
          </div>
          <!-- End Card Section -->
          <!-- Transaction Section -->
          <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <!-- Card -->
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-xs p-4 sm:p-7"
            >
              <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
                  Transactions
                </h2>
                <p class="text-sm text-gray-600">Manage your transactions</p>
              </div>

              <form @submit.prevent="addPayments">
                <!-- Section -->
                <div v-if="message" class="mb-4 text-blue-600">
                  {{ message }}
                </div>

                <div
                  class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                >
                  <label
                    for="af-payment-billing-address"
                    class="inline-block text-sm font-medium"
                  >
                    Payments
                  </label>

                  <div class="mt-2 space-y-3">
                    <input
                      v-model="description"
                      id="af-payment-billing-address"
                      type="text"
                      class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Description"
                    />
                    <input
                      v-model="amount"
                      type="text"
                      class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Amount"
                    />
                    <div class="flex flex-col sm:flex-row gap-3">
                      <select
                        v-model="type"
                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option>Income</option>
                        <option>expense</option>
                      </select>
                      <select
                        v-model="category"
                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option>Food</option>
                        <option>Health</option>
                        <option>Utilities</option>
                        <option>Transport</option>
                        <option>Others</option>
                      </select>
                      <select
                        v-model="modeOfPayment"
                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Payment Method</option>
                        <option>Cash</option>
                        <option>Credit Card</option>
                        <option>Mpesa</option>
                      </select>
                    </div>
                    <select
                      v-model="selectedGoalId"
                      class="py-1.5 px-3 border rounded-lg w-full"
                    >
                      <option :value="null">No Goal</option>
                      <option
                        v-for="goal in goals"
                        :key="goal.id"
                        :value="goal.id"
                      >
                        {{ goal.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- End Section -->

                <div class="mt-5 flex justify-end gap-x-2">
                  <button
                    type="submit"
                    class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Add Record
                  </button>
                </div>
              </form>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Transaction Section -->
        </div>

        <div id="users" class="scroll-mt-24">
          <h2 class="text-lg font-semibold text-gray-800">Transactions</h2>
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Catogory
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Mode of payment
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      v-for="p in payments"
                      :key="p.id"
                      class="divide-y divide-gray-200"
                    >
                      <tr>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                        >
                          {{ p.description }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {{ p.amount }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {{ p.type }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {{ p.category }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {{ p.mode_of_payment }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {{ p.payment_date }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Goals -->
        <div id="account" class="scroll-mt-24">
          <h2 class="text-lg font-semibold text-gray-800">Goals</h2>
          <!-- goals Section -->
          <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <!-- Card -->
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-xs p-4 sm:p-7"
            >
              <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
                  Goals
                </h2>
                <p class="text-sm text-gray-600">Manage your Goals</p>
              </div>

              <form @submit.prevent="addGoal">
                <!-- Section -->
                <div v-if="goal_message" class="mb-4 text-blue-600">
                  {{ goal_message }}
                </div>

                <div
                  class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                >
                  <label
                    for="af-payment-billing-address"
                    class="inline-block text-sm font-medium"
                  >
                    Title
                  </label>

                  <div class="mt-2 space-y-3">
                    <input
                      v-model="goal_name"
                      type="text"
                      class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Name"
                    />

                    <input
                      v-model="goal_targetAmount"
                      type="text"
                      class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Target amount"
                    />
                    <div class="flex flex-col sm:flex-row gap-3">
                      <input
                        v-model="goal_startDate"
                        type="date"
                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Start Date"
                      />
                      <input
                        v-model="goal_endDate"
                        type="date"
                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="End Date"
                      />
                    </div>
                  </div>
                </div>
                <!-- End Section -->

                <div class="mt-5 flex justify-end gap-x-2">
                  <button
                    type="submit"
                    class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Add Goal
                  </button>
                </div>
              </form>
            </div>
            <!-- End Card -->
          </div>
          <!-- goals Section -->
        </div>
        <!-- Goals List -->
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Target Amount
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Current Amount
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        progress
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="goal in goals"
                    :key="goal.id"
                    class="divide-y divide-gray-200"
                  >
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                      >
                        {{ goal.name }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        {{ goal.target_amount }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        {{ goal.current_amount }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        {{
                        
                          goal.target_amount
                            ? 
                            (
                                (Number(goal.current_amount) /
                                  Number(goal.target_amount)) *
                                100
                              )
                              
                            : 0
                        }}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- end of goals -->
        <div id="projects" class="min-h-[100vh] scroll-mt-24">
          <h2 class="text-lg font-semibold text-gray-800">Milestones</h2>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Content -->
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAuth } from "../composables/useAuth";

const { user, fetchUser, logout } = useAuth();

const description = ref("");
const amount = ref("");
const category = ref("");
const modeOfPayment = ref("");
const type = ref("expense");
const message = ref("");
const selectedGoalId = ref(null);
const paymentDate = ref(new Date().toISOString().slice(0, 10));

onMounted(async () => {
  const me = await fetchUser();
  if (!me) {
    navigateTo("/auth/"); 
  }
});

async function addPayments() {
  try {
    const token = localStorage.getItem("token");
    await $fetch("http://localhost:3001/payments", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        description: description.value,
        amount: amount.value,
        category: category.value,
        mode_of_payment: modeOfPayment.value,
        type: type.value,
        payment_date: paymentDate.value,
        goal_id: selectedGoalId.value,
      },
    });
    message.value = "Payment added successfully!";
    description.value = "";
    amount.value = "";
    category.value = "";
    modeOfPayment.value = "";
    type.value = "expense";
  } catch (err) {
    console.log(err);
    message.value = "Failed to add payment";
  }
}

const payments = ref([]);
// fetch payments on page load
onMounted(async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await $fetch("http://localhost:3001/payments", {
      headers: { Authorization: `Bearer ${token}` },
    });
    payments.value = res;
  } catch (err) {
    error.value = "Failed to load payments";
    console.error(err);
  } finally {
    loading.value = false;
  }
});

// compute totals
const totalIncome = computed(() =>
  payments.value
    .filter((p) => p.type === "Income")
    .reduce((sum, p) => sum + Number(p.amount), 0)
);

const totalExpenses = computed(() =>
  payments.value
    .filter((p) => p.type === "expense")
    .reduce((sum, p) => sum + Number(p.amount), 0)
);

//goals
const goal_name = ref("");
const goal_targetAmount = ref(0);
const goal_startDate = ref("");
const goal_endDate = ref("");
const goal_message = ref("");
const goals = ref([]);

onMounted(async () => {
  const me = await fetchUser();
  if (!me) return navigateTo("/auth/");
  await fetchGoals();
});

async function fetchGoals() {
  try {
    const token = localStorage.getItem("token");
    const res = await $fetch("http://localhost:3001/goals", {
      headers: { Authorization: `Bearer ${token}` },
    });
    goals.value = res;
  } catch (err) {
    console.error("Failed to fetch goals", err);
  }
}

async function addGoal() {
  try {
    const token = localStorage.getItem("token");
    await $fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        name: goal_name.value,
        target_amount: goal_targetAmount.value,
        start_date: goal_startDate.value,
        end_date: goal_endDate.value,
      },
    });
    goal_message.value = "Goal added successfully!";
    goal_name.value = "";
    goal_targetAmount.value = 0;
    goal_startDate.value = "";
    goal_endDate.value = "";

    await fetchGoals(); // refresh list
  } catch (err) {
    goal_message.value = "Failed to add goal";
  }
}

const totalGoals = computed(() => goals.value.length);
const balance = computed(() => totalIncome.value - totalExpenses.value);
</script>
