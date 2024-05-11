<!--
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-10 10:41:15
 * @LastEditTime: 2024-05-11 09:58:46
-->
<script setup lang="ts">
import Main from '@components/Main.vue'
import {ConfigProvider, Button} from "ant-design-vue"
import {ConfigProvider as BaseProvider, Languages} from "@lib/main"
import { ref } from 'vue';


const locale = ref(Languages.ZH)

const changeLocale = () => {
  if(locale.value === Languages.EN) {
    locale.value = Languages.ZH
    return
  }
  locale.value = Languages.EN
}
</script>

<template>
  <ConfigProvider :theme="{token: {colorPrimary:'#3f51b5'}}">
    <BaseProvider :locale="locale">
      <Button type="primary" @click="changeLocale">{{ locale }}</Button>
      <Main></Main>
    </BaseProvider>
  </ConfigProvider>
</template>

<style scoped>
</style>
