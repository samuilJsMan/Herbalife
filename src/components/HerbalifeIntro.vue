<template>
  <section class="wrapper">
    <div class="header center s32 black bald"><span class="s32 dark">{{ $t(`about_herbalife.span`) }}</span> {{ $t(`about_herbalife.header`) }}</div>
    <img class="image"  src="../assets/HerbalifeIntro.webp" :alt="$t(`alt[0]`)+$t(`alt[3]`)">
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .wrapper{
    .header{
      margin-bottom: 50px;
    }
    .image{
      width: 100%;
    }
  }
</style>
