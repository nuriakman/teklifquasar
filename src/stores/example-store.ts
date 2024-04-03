import { defineStore } from 'pinia';
import { ISeat } from 'src/types/myTypes';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    small: false,
    activeSeat: {} as ISeat,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
