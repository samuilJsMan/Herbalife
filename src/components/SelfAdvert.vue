<template>
  <BaseCard color="light" class="crd">
    <p class="header center s40 bald">{{ $t(`selfAdvert.header`) }}</p>
    <BaseButton BtnStyle="hollow" class="btn" @mouseup="sendTo($event,`/home`,{name:`contacts`})">  
      {{ $t(`consult`) }}
    </BaseButton>  
  </BaseCard>
</template>

<script setup lang="ts">
import { inject } from 'vue';
const functionStore:any=inject(`functionStore`)
function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 40px;
}
.btn{
  min-width: 35%;
  margin: 0 auto;
}
  
</style>
