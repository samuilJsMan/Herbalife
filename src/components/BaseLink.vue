<template>
  <div :class="[`base__link`,`s18`,color]" @mousedown="functionStore.prevent($event)">
  {{ text }}
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {defineProps,inject} from 'vue'
const functionStore:any=inject(`functionStore`)
defineProps([`color`,`text`])
</script>

<style lang="scss" scoped>
  .base__link{
    cursor: pointer;
    width: fit-content;
    text-wrap: nowrap;
    max-width: calc(95vw - 40px);
    transition: 0.2s;
    color: var(--dark)
  }
  .dark:hover{
    color:black;
  }
  .light:hover{
    color: var(--light);
  }
</style>