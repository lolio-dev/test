import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const counter = ref<number>(0);

  const increase = () => {
    counter.value += 1;
  }

  const decrease = () => {
    counter.value -= 1;
  }

  const double = computed(() => {
    return counter.value * 2
  })

  return { counter, increase, decrease, double }
})
