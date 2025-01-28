<template>
  <div class="backgroundGradient br25" @mousedown="functionStore.prevent($event)">
    <div :class="[`button`,`center br25`,`s18`,BtnStyle,{'small':small}]" v-ripple>
      <slot></slot>  
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps,inject} from 'vue'
defineProps([`BtnStyle`,`small`])
const functionStore:any=inject(`functionStore`)

</script>

<style lang="scss" scoped>
  .backgroundGradient{
    background: linear-gradient(110deg,var(--dark), var(--light));
    width: fit-content;
  }
  .button{
    cursor: pointer;
    padding: 15px 30px;
    transition-duration:0.2s
  }
  .small{
    padding: 5px 20px;
  }

  .hollow{
    border: 1px solid var(--dark);
    background-color: white;
    color: var(--dark);
  }
  .light{
    background-color: var(--light);
    color: white;
  }
  .dark{
    background-color: var(--dark);
    color: white;
  }
  
  .light:hover, .dark:hover{
    background-color: transparent;
  }
  .hollow:hover{
    border: 1px solid var(--light);
    color: var(--light);
  }

</style>