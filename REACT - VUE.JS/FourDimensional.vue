<template>
    <TitleMatrix title="Определитель матрицы 4x4" />
    <main class="determinant">
      <figure class="determinant-matrix">
        <div class="determinant-matrix-bracket" />
        <div class="determinant-matrix-row" v-for="(row, rowIndex) in matrix" :key="rowIndex">
          <div class="determinant-matrix-column">
            <input
              class="determinant-matrix-column-inp"
              v-model="row[0]"
              type="number"
              @input="onChangeMatrix"
              placeholder="k"
            />
          </div>
          <div class="determinant-matrix-column">
            <input
              class="determinant-matrix-column-inp"
              v-model="row[1]"
              type="number"
              @input="onChangeMatrix"
              placeholder="k"
            />
          </div>
          <div class="determinant-matrix-column">
            <input
              class="determinant-matrix-column-inp"
              v-model="row[2]"
              type="number"
              @input="onChangeMatrix"
              placeholder="k"
            />
          </div>
          <div class="determinant-matrix-column">
            <input
              class="determinant-matrix-column-inp"
              v-model="row[3]"
              type="number"
              @input="onChangeMatrix"
              placeholder="k"
            />
          </div>
        </div>
        <div class="determinant-matrix-bracket" />
      </figure>
      <div class="determinant-result">
        = {{ determination }}
      </div>
    </main>
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TitleMatrix from '../components/TitleMatrix.vue';
  import Footer from "../components/Footer.vue";
  
  const matrix = ref([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  
  const determination = ref(0);
  
  const onChangeMatrix = () => {
    determination.value = resultDeterminationMatrix(matrix.value);
  };
  
  const resultDeterminationMatrix = (matrix) => {
    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
      det += matrix[0][i] * resultMinor4to4(0, i, matrix);
    }
    return det;
  };
  
  const resultMinor4to4 = (row, col, matrix) => {
    const subMatrix = matrix
      .filter((_, i) => i !== row) // Убираем строку
      .map(r => r.filter((_, j) => j !== col)); // Убираем столбец
  
    return Math.pow(-1, row + col) * determinantOf3x3(subMatrix);
  };
  
  const determinantOf3x3 = (matrix) => {
    return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
         - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
         + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
  };
  </script>
  
  <style lang="scss" scoped>
  .determinant {
    display: flex;
    justify-content: center;
    margin: 35px auto 250px;
  
    &-matrix {
      position: relative;
  
      &-bracket {
        position: absolute;
        right: -15px;
        top: 0;
        width: 35px;
        height: 110px;
        border: solid black;
        border-width: 3px 3px 3px 0;
        border-radius: 0px 45px 45px 0;
      }
  
      &-row {
        display: flex; /* Изменено для горизонтального размещения */
        margin: 5px 0; /* Добавлено немного отступа между строками */
      }
  
      &-column {
        margin-right: 10px; /* Расстояние между колонками */
      }
  
      &-column-inp {
        width: 50px;
        font-weight: 500;
        font-size: 20px;
        line-height: 16px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 0.3px solid black;
      }
    }
  
    &-result {
      font-weight: 500;
      font-size: 20px;
      line-height: 16px;
      margin-top: 45px;
      margin-left: 20px;
    }
  }
  </style>