<template>
  <section>
    <div class="header dark s36 element">{{ $t(`NA.header`) }}</div>
    <div class="dark s20 element">{{ $t(`NA.link`) }}:</div>
    <BaseButton class="btn element" BtnStyle="light" @mouseup="sendTo($event,`/`)" >Herbalife</BaseButton>
  </section>
</template>

<script setup lang="ts">
import {inject} from 'vue'
const functionStore:any=inject(`functionStore`)
function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.element{
  width: fit-content;
  margin: 20px auto;
}
.btn{
  min-width: max(30% , 200px);
}
 

</style>
