<template>
  <HerbalifeIntro></HerbalifeIntro>
  <HerbalifeProduction></HerbalifeProduction>
  <HerbalifeChose></HerbalifeChose>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue"
const HerbalifeIntro = defineAsyncComponent(() =>import('./HerbalifeIntro.vue'))
const HerbalifeProduction = defineAsyncComponent(() =>import('./HerbalifeProduction.vue'))
const HerbalifeChose = defineAsyncComponent(() =>import('./HerbalifeChose.vue'))
</script>

<style lang="scss" scoped>

</style>
