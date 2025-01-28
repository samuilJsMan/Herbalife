<template>
  <button
    id="droplist"
    color="dark"
    class="link dark"
    @mouseover="hover()"
    @mouseleave="leave()"
    >
    <slot name="name">
      {{name}}
    </slot> 
    <transition>
      <div :class="[`productList`,{'centered':(mobile||centered)&&!force}]"
        v-if="dropListsVisibility">
        <slot name="content">
          <BaseLink v-for="link in content" :text="$t(`${dir}[${link.index}]`)" color="dark" @mouseup="sendTo($event,link.to,{name:link.query?.name,search:search})" class="lnk"/>
        </slot> 
      </div>  
    </transition>
  </button>     
</template>

<script setup lang="ts">
import {defineProps,ref,inject,computed,onMounted,onBeforeUnmount} from "vue"
defineProps([`name`,`content`,`dir`,`centered`,`force`,`search`])
const dropListsVisibility=ref(false)
const display:any=inject(`display`)
const functionStore:any=inject(`functionStore`)
let timeStamp=0

onMounted(() => {
  document.addEventListener('click',handleClickOutside);
  document.addEventListener('touchstart',handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('touchstart', handleClickOutside);
});

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('#droplist')) {
    dropListsVisibility.value=false;
  }
};

function hover(){
  if(Date.now()-timeStamp>150){
    dropListsVisibility.value=true
  }
}
function leave(){
  dropListsVisibility.value=false
  timeStamp=Date.now()
}

const mobile = computed(() => {
  return display.width.value < 900;
});


function sendTo(event:any,path:string|null,query?:any){
  leave()
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.link{
  position: relative;
  transition: 0.2s;
  .productList {
    position: absolute;
    background-color: white;
    padding: 20px;
    left: -20px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
    cursor: auto;
    width: min(fit-content , 95vw);
    .lnk{
      margin: 3px 0;
      text-wrap: nowrap !important;
      overflow-wrap:break-word !important;
      word-break:keep-all !important;
    }
  }
  .centered{
    transform: translateX(-50%);
    left:50%;
    padding: 10px;
  }
  .v-enter-from,.v-leave-to{
    opacity: 0;
  }

  .v-enter-active,.v-leave-active{
    transition: opacity 0.2s;
  }

  .v-leave-from,.v-enter-to{
    opacity: 1;
  }
}
.link:hover{
  color: black;
}
</style>
