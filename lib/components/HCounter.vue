<!--
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-07 10:58:06
 * @LastEditTime: 2024-05-07 11:27:56
-->
<template>
    <button @click="add">+</button>
    <h1>
        HCounter: {{count}}
    </h1>
    <button @click="minus">-</button>
</template> 

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{defaultValue?:number}>()

const count = ref(props.defaultValue || 0)

const add = () => count.value++

const minus = () => count.value--
</script> 

<style lang="scss" scoped></style>