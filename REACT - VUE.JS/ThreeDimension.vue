<template>
    <TitleMatrix title="Определитель матрицы 3х3" />
  <main class="determinant">
    <figure class="determinant-matrix">
      <div class="determinant-matrix-bracket"></div>
      <div class="determinant-matrix-row" v-for="(row, rowIndex) in matrix" :key="rowIndex">
        <div class="determinant-matrix-column" v-for="(column, colIndex) in row" :key="colIndex">
          <input
            class="determinant-matrix-column-inp"
            v-model.number="matrix[rowIndex][colIndex]"
            type="number"
            @input="onChangeMatrix"
            placeholder="k"
          />
        </div>
      </div>
      <div class="determinant-matrix-bracket"></div>
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
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
const determination = ref(0);

const onChangeMatrix = () => {
  determination.value = resultDeterminationMatrix(matrix.value);
}

const resultDeterminationMatrix = (matrix) => {
  let determinant =
    matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
    matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
    matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);

  return determinant;
}
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
      transform: perspective(2px) rotateY(1deg);
      border: solid black;
      border-width: 3px 3px 3px 0;
      border-radius: 0px 45px 45px 0;

      &:first-child {
        position: absolute;
        right: 240px;
        top: 0;
        width: 35px;
        height: 110px;
        transform: perspective(2px) rotateY(179deg);
        border: solid black;
        border-width: 3px 3px 3px 0;
        border-radius: 0px 45px 45px 0;
      }
    }

    &-row {
      display: flex;

      &-column {
        margin-right: 20px;

        &-inp {
          width: 100px;
          font-weight: 500;
          font-size: 20px;
          line-height: 16px;
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 20px;
          border-radius: 10px;
          border: 0.3px solid black;
        }
      }
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

@media (max-width: 600px) {
  .determinant {
    &-matrix {
      &-row {
        display: flex;
        
        &-column-inp {
          width: 50px;
          font-weight: 300;
          font-size: 14px;
          line-height: 8px;
          padding: 5px;
        }
      }
    }

    &-result {
      font-size: 14px;
      line-height: 8px;
      margin-top: 33px;
    }
  }
}
</style>