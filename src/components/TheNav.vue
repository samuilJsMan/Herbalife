<template>
  <nav class="buttons flex">
    <DroplistNavElement class="list" 
    :name="$t(`header.moreName`)"
    :content="dataStore.moreList"
    dir="header.more"/>
    <DroplistNavElement class="list" 
    :name="$t(`header.productsName`)" 
    :content="dataStore.productsCatalog"
    dir="header.products"/>
    <DroplistNavElement class="list" 
    :name="$t(`header.productSetsName`)" 
    :content="dataStore.productsPrograms"
    dir="header.productSets"/>
    <BaseButton BtnStyle="light" small="true" @mouseup="sendTo($event,`/home`,{name:`contacts`})">{{ $t(`consult`) }}</BaseButton>
  </nav>
</template>

<script setup lang="ts">
import { inject } from "vue";
import DroplistNavElement from "./DroplistNavElement.vue";
const functionStore:any=inject(`functionStore`)
const dataStore:any=inject(`dataStore`)
function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.buttons {
  align-items: center;
  gap: 20px;
  background-color: white;
  z-index: 5;
  .lang{
    height: 25px;
  }
  .list::after {
    transition: 0.2s;
    content: "";
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 10px solid var(--dark);
  }
  .list:hover::after {
    border-top: 10px solid black;
  }
}
</style>
