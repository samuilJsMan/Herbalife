<template>
  <div :class="[`card`,color]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
defineProps([`color`])
</script>

<style lang="scss" scoped>
  .card{
    min-width: 50px;
    min-height: 50px;
    background-color: white;
    padding: 40px;
    border-radius: 15px;
  }
  .hollow{
    border: 1px solid var(--light);
    color:var(--dark)
  }
  .dark{
    background: rgba(1, 111, 67, 0.71);
    color: white;
  }
  .light{
    background: var(--light);
    color: white;
  }
</style>