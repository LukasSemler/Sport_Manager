<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../assets/icons/placeholder_icon.png"
        alt="Electronic City"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <div>
            <div>
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Vorname</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.vorname"
                      type="text"
                      id="first-name"
                      name="first-name"
                      autocomplete="given-name"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p
                      v-if="v$.vorname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ v$.vorname.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div>
                  <label for="last-name" class="block text-sm font-medium text-gray-700"
                    >Nachname</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.nachname"
                      type="text"
                      id="last-name"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p
                      v-if="v$.nachname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ v$.nachname.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="company" class="block text-sm font-medium text-gray-700">Email</label>
                  <div class="mt-1">
                    <input
                      v-model="state.email"
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p v-if="v$.email.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                      {{ v$.email.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="address" class="block text-sm font-medium text-gray-700"
                    >Strasse + Hausnummer</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.strasse_hnr"
                      type="text"
                      name="address"
                      id="address"
                      autocomplete="street-address"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p
                      v-if="v$.strasse_hnr.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ v$.strasse_hnr.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div>
                  <label for="postal-code" class="block text-sm font-medium text-gray-700"
                    >Postal code</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.plz"
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p v-if="v$.plz.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                      {{ v$.plz.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div>
                  <label for="city" class="block text-sm font-medium text-gray-700">Stadt</label>
                  <div class="mt-1">
                    <input
                      v-model="state.stadt"
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p v-if="v$.stadt.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                      {{ v$.stadt.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="password" class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.password"
                      type="password"
                      name="password"
                      id="password"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p
                      v-if="v$.password.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ v$.password.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="phone" class="block text-sm font-medium text-gray-700"
                    >Confirm Password</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.c_password"
                      type="password"
                      name="c_password"
                      id="c_password"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <!-- <p
                      v-if="v$.c_password.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ v$.c_password.$silentErrors[0].$message }}
                    </p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/login')"
                class="font-medium text-indigo-600 hover:text-indigo-500 underline"
              >
                Zu Login
              </a>
            </div>
          </div>

          <div>
            <button
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

const router = useRouter();
let showError = ref(false);
// Variablen for input erstellen
const state = reactive({
  vorname: '',
  nachname: '',
  email: '',
  strasse_hnr: '',
  stadt: '',
  plz: '',
  password: '',
  c_password: '',
});
</script>
