<!--
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-10 10:41:15
 * @LastEditTime: 2024-05-10 11:24:39
-->
<script setup lang="ts">
import Main from './components/Main.vue'
import {ConfigProvider} from "ant-design-vue"
</script>

<template>
  <ConfigProvider :theme="{token: {colorPrimary:''}}">
    <Main></Main>
  </ConfigProvider>
</template>

<style scoped>
</style>
