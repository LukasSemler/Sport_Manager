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

                    <p
                      v-if="validator.vorname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.vorname.$silentErrors[0].$message }}
                    </p>
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

                    <p
                      v-if="validator.nachname.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.nachname.$silentErrors[0].$message }}
                    </p>
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

                    <p
                      v-if="validator.email.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.email.$silentErrors[0].$message }}
                    </p>
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

                    <p
                      v-if="validator.password.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.password.$silentErrors[0].$message }}
                    </p>
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

                    <p
                      v-if="validator.c_password.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.c_password.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div class="mt-4">
                <RadioGroup v-model="spielerTrainerLists">
                  <RadioGroupLabel class="text-base font-medium text-gray-900"
                    >Spieler oder Trainer</RadioGroupLabel
                  >

                  <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    <RadioGroupOption
                      as="template"
                      v-for="st in spieler_trainer"
                      :key="st.id"
                      :value="st"
                      v-slot="{ checked, active }"
                    >
                      <div
                        :class="[
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                        ]"
                      >
                        <span class="flex flex-1">
                          <span class="flex flex-col">
                            <RadioGroupLabel
                              as="span"
                              class="block text-sm font-medium text-gray-900"
                              >{{ st.title }}</RadioGroupLabel
                            >
                            <RadioGroupDescription
                              as="span"
                              class="mt-1 flex items-center text-sm text-gray-500"
                              >{{ st.description }}</RadioGroupDescription
                            >
                          </span>
                        </span>
                        <CheckCircleIcon
                          :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']"
                          aria-hidden="true"
                        />
                        <span
                          :class="[
                            active ? 'border' : 'border-2',
                            checked ? 'border-indigo-500' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg',
                          ]"
                          aria-hidden="true"
                        />
                      </div>
                    </RadioGroupOption>
                  </div>
                </RadioGroup>
              </div>
              <div class="rounded-md bg-blue-50 p-4 mt-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm text-blue-700">
                      Diesen Punkt kannst du nachher nicht mehr ändern
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

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
              @click="register"
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
import { reactive, ref, computed } from 'vue';

// Imports für Tailwind
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
import { InformationCircleIcon } from '@heroicons/vue/20/solid';

// Imports für vuelidate
import useValidate from '@vuelidate/core';
import { required, email, numeric, minLength, sameAs } from '@vuelidate/validators';

import axios from 'axios';

// Variable für die Radio Buttons
const spieler_trainer = [
  {
    id: 1,
    title: 'Spieler',
    description:
      'Als Spieler kannst du deinem Mannschaften beitreten und bekommst alle wichtigen Infos von deinen Trainern',
  },
  {
    id: 2,
    title: 'Trainer',
    description: 'Erstelle Mannschaften und verwalte diese einfach',
  },
];

// Liste für die Radio Buttons
const spielerTrainerLists = ref(spieler_trainer[0]);

const router = useRouter();

// Variablen for input erstellen
const state = reactive({
  vorname: '',
  nachname: '',
  email: '',
  password: '',
  c_password: '',
});

// Rules for vuelidate
const rules = computed(() => {
  return {
    vorname: { required },
    nachname: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    c_password: { required, minLength: minLength(6), sameAs: sameAs(state.password) },
  };
});

const validator = useValidate(rules, state);

async function register(e) {
  e.preventDefault();

  console.log(validator);
  if (validator.value.$silentErrors.length == 0) {
    // Daten an den Server schicken
    const result = await axios.post('/register', {
      vorname: state.vorname,
      nachname: state.nachname,
      email: state.email,
      password: state.password,
      type: spielerTrainerLists.value.title,
    });

    console.log(result);
  } else {
    console.log('fehler');
  }
}
</script>
