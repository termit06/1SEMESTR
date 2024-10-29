<template>
    <button :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonClass: {
        type: String,
        default: ''
      },
      onClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.onClick();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Примеры стилей для кнопки */
  button {
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>