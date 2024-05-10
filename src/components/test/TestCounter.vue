<!--
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-10 11:37:33
 * @LastEditTime: 2024-05-10 11:56:46
-->
<template>
<h1>This is Counter component test page</h1>
<HCounter :default-value="5" />
</template> 

<script setup lang="ts">
import HCounter from "@lib/components/HCounter.vue"
</script> 

<style lang="scss" scoped></style>