<template>
  <section>
    <div class="header center s32 dark bald">{{ $t(`catalog.productNames[${ids[0]}]`) }}</div>
    <div class="topWrapper flex">
      <img class="img brl br15" :src="getImage()" :alt="$t(`alt[0]`)+$t(`catalog.productNames[${ids[0]}]`)">
      <ContactCard class="crd brl"></ContactCard>
    </div>
    <RecursionText class="textContent" v-for="item in description" :item="item" :description="description" :globalID="ids[2]"/>
  </section>
  <TheCatalogue>
    <template v-slot:header>
      <div class="header center s36 dark bald">{{ $t(`shop.more`) }}</div>
    </template>
  </TheCatalogue>
</template>

<script setup lang="ts">
import { defineProps,inject ,defineAsyncComponent} from 'vue';
const RecursionText = defineAsyncComponent(() =>import('./RecursionText.vue'))
const ContactCard = defineAsyncComponent(() =>import('./ContactCard.vue'))
const TheCatalogue = defineAsyncComponent(() =>import('./TheCatalogue.vue'))
const i18n:any=inject(`i18n`)
const imagesProducts:any=inject(`imagesProducts`)
const props=defineProps([`ids`])
const ids=props.ids.split(`,`)
const description=i18n.tm(`shop.producstDescription[${ids[2]}]`)

function getImage() {
  return imagesProducts[`/src/assets/products/${ids[1]}.png`]?.default
}
</script>
<style lang="scss" scoped>
.topWrapper{
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  .img{
    object-fit: contain;
    min-width: 332px;
    width: 35%;
    flex-grow: 1;
    background-color: white;
    padding: 15px;
  }
  .crd{
    flex-grow: 1;
  }
}
.header{
  margin-bottom: 40px;
}
</style> 
