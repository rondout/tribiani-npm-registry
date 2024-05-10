<!--
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-10 10:41:15
 * @LastEditTime: 2024-05-10 12:02:22
-->
<script setup lang="ts">
import Main from '@components/Main.vue'
import {ConfigProvider} from "ant-design-vue"
</script>

<template>
  <ConfigProvider :theme="{token: {colorPrimary:'#3f51b5'}}">
    <Main></Main>
  </ConfigProvider>
</template>

<style scoped>
</style>
