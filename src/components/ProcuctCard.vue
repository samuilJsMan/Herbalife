<template>
  <BaseCard color="hollow" class="cardContent flex" @mouseup="sendTo($event,`/productPage/${
    item.nameId},${
    item.imageId},${
    item.descriptionId}`)"
    @mousedown="functionStore.prevent($event)">
    <img class="image" :src="getImage(item.imageId)" :alt="$t(`alt[0]`)+$t(`catalog.productNames.${item.nameId}`)">
    <div class="text center s15" :title="$t(`catalog.productNames.${item.nameId}`)">
      {{ $t(`catalog.productNames.${item.nameId}`) }}
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import {defineProps,inject} from "vue"
defineProps([`item`])
const functionStore:any=inject(`functionStore`)
const imagesProducts:any=import.meta.glob('/src/assets/products/*', { eager: true })

function getImage(name:any) {
  return imagesProducts[`/src/assets/products/${name}.png`]?.default
}

function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.cardContent{
  transition: 0.2s;
  justify-content: space-around;//
  flex-direction: column;//
  cursor: pointer;//
  padding: 20px !important;
  width: 100%;
  max-width: min(50vw, 250px);
  aspect-ratio: 200/300;
  margin: 0 auto;
  gap: 20px;
  .image{
    max-height: 50%;
    object-fit: contain;
  }
  .text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
.cardContent:hover{
  border:1px solid var(--dark);
}
</style>
