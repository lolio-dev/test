<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

</script>

<template>
  <div class="flex items-center justify-center h-full w-full ">
    <div class="flex flex-col items-center justify-center gap-4 bg-cyan-500 p-16 rounded-md text-white shadow-lg">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolores enim facilis ipsum iusto
        mollitia pariatur porro possimus reiciendis? Aliquam amet dolorem eos incidunt laboriosam magnam, quam repellat
        sunt?</p>
      <p class="text-lg font-bold">Counter: {{ store.counter }}</p>
      <p class="text-lg font-bold">Double: {{ store.double }}</p>
      <v-btn icon="add" color="primary" @click="store.increase"/>
      <v-btn icon="remove" color="primary" @click="store.decrease"/>
    </div>
  </div>
</template>
