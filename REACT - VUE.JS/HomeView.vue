<template>
  <main class="wrapper">
    <ActiveButton active="Активация" @act="onChangeActive" />
  </main>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import ActiveButton from '@/components/ActiveButton.vue';

name: "HomeView";


</script>

<style lang="scss" scoped>
.wrapper {
  color: #2d40a3;
  font-size: 25px;

  &-btn {
      margin-left: 20px;
      background-color: transparent;
      border: 1px solid #2d40a3;
      border-radius: 5px;
      padding: 10px;
      color: #2d40a3;
      font-size: 25px;
      cursor: pointer;
      transition: 0.5s ease-in-out color, 
        0.3s ease-in-out background-color, 
        0.3s ease-in-out border;

      &:hover {
        color: #fff;
        background-color: #2d40a3;
        border: 1px solid #fff;
      }
    }

    &-comment {
      display: block;
      color: green;
    }

    &-active {
      display: block;
      color: green;
    }
  }
</style>