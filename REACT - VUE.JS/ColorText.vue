<template>
<div class="title" :style="[`color: ${colortext}`]">
{{mainText}}
</div>
<div class="title2" :style="[`color: ${colortext}`]">
{{mainText}}
<div class="title3" :style="[`color: ${colortext}`]">
{{mainText}}
</div>
</div>
</template>

<script setup>
defineProps({
    mainText:{
        type: String,
        required: true
    },
    colorText:{
        type: Number,
        required: true
    }
    
})
</script>

<style lang="scss" scoped>
.title{
    font-size: 100px;
    color: rgb(30, 255, 0);
}
.title2{
    font-size: 100px;
    color: rgb(238, 255, 0);
}
.title3{
    font-size: 100px;
    color: red;
}
</style>