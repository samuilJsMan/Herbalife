<template>
  <section>
    <div class="headerWrapper">
      <p class="header center dark s36 bald">{{$t(`products.header.head`)}}</p>
      <p class="text center dark">{{$t(`products.header.text`)}}</p>
    </div>
    <div class="gridBody grid">
      <div class="element center" v-for="program in 12" @mousedown="functionStore.prevent($event)" @mouseup="sendTo($event,productsPrograms[program-1].to,productsPrograms[program-1].query)">
        <img class="image" :src="getImageUrl(program-1)" :alt="$t(`alt[2]`)+$t(`products.body[${program-1}]`).toLowerCase()">
        <p class="text bald dark">{{$t(`products.body[${program-1}]`)}}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject} from "vue"
const functionStore:any=inject(`functionStore`)
const dataStore:any=inject(`dataStore`)
const productsPrograms=dataStore.productsPrograms
function getImageUrl(c:number) {
  return new URL(`/src/assets/${dataStore.programCatalog[c]}`, import.meta.url).href
}

function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.headerWrapper{
  .header{
    margin-bottom: 40px;
  }
  .text{
    margin-bottom: 40px;
  }
}
.gridBody{
  grid-template-columns: 
    repeat(
      auto-fit, 
      minmax(280px,1fr)
    );
  .element{
    padding: 20px;
    min-width: 200px;
    transition: 0.2s;
    border-radius: 25px;
    .image{
      width: 75%;
    }
    .text{
      margin-top: 20px;
    }
  }
  .element:hover{
    cursor: pointer;
    background-color: rgba($color: #83b731, $alpha: 0.4);
  }
}
</style>
