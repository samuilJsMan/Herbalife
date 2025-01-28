<template>
  <section>
    <p class="s36 bald header center dark">{{$t(`advantages.header`)}}</p>
    <div class="contentWrapper grid center">
      <BaseCard v-for="item in 8" color="hollow" class="crd">
        <p class="s24 dark bald header">{{$t(`advantages.title[${item-1}]`)}}</p>
        <p class="dark">{{$t(`advantages.content[${item-1}]`)}}</p>
      </BaseCard>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 40px;
}
.contentWrapper{
  gap: 20px;
  grid-template-columns: 
  repeat(
    auto-fit, 
    minmax(260px,1fr)
  );
  .crd{
    min-height: 300px;
    .header{
      margin-bottom: 30px;
    }
  }
}
</style>
