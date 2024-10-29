<template>
  <div>
    <h1 :style="{ color: number % 3 === 0 ? 'green' : 'red' }">{{ number }}</h1>
    <h1>{{ number }}</h1>
    <button @click="subtractTwo(2)" style="background: blue; font-size: 50px;">-2</button>
    <button @click="subtractTwo(4)" style="background: purple; font-size: 50px;">-4</button>
    <button @click="subtractTwo(6)" style="background: red; font-size: 50px;">-6</button>
    <button @click="checkDivisibility" style="background: green; font-size: 70px;">/3</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      isHighlighted: false,
    };
  },
  methods: {
    subtractTwo(value) {
      this.number -= value;
      this.isHighlighted = false; // Сбрасываем выделение при каждом изменении числа
    },
    checkDivisibility() {
      this.isHighlighted = this.number % 3 === 0;
    },
  },
};
</script>

<style scoped>
/* Добавьте стили, если нужно */
</style>