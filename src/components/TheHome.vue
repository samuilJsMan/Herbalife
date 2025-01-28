<template>
  <TheIntrodunction></TheIntrodunction>
  <div class="goal dark bald s24">{{ $t(`help`) }}</div>
  <ThePosibilities></ThePosibilities>
  <TheBenefits></TheBenefits>
  <SelfAdvert></SelfAdvert>
  <TheProducts></TheProducts>
  <TheCatalogue>
    <template v-slot:header>
      <div class="header center s36 dark bald">{{ $t(`catalog.header`) }}</div>
    </template>
    <template v-slot:button>
      <BaseButton class="btn" @mouseup="sendTo($event,`/shop`)" BtnStyle="hollow"><span class="s20">{{ $t(`catalog.button`) }}</span></BaseButton>
    </template>
  </TheCatalogue>
  <MoreBenefits></MoreBenefits>
  <TheContact></TheContact>
</template>

<script setup lang="ts">
import {inject} from "vue"
import TheIntrodunction from './TheIntrodunction.vue';
import ThePosibilities from './ThePosibilities.vue';
import TheBenefits from './TheBenefits.vue';
import SelfAdvert from './SelfAdvert.vue';
import TheProducts from './TheProducts.vue';
import TheCatalogue from './TheCatalogue.vue';
import MoreBenefits from './MoreBenefits.vue';
import TheContact from './TheContact.vue';
const functionStore:any=inject(`functionStore`)
function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
  .goal{
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .header{
    margin-bottom: 40px;
  }
  .btn{
    margin: 40px auto 0 auto;
  }
</style>
