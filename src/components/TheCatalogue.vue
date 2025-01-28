<template>
  <section>
    <slot name="header"></slot>
    <div class="arrowWrapper">
      <div class="arrowLeft arrow br15" :class="{active:arrowsVisibility[0]}" v-if="!touchable" @click="moveTo(`left`)"></div>
      <div class="arrowRight arrow br15" :class="{active:arrowsVisibility[1]}" v-if="!touchable" @click="moveTo(`right`)"></div>
      <div class="contentWrapper" ref="wrapper" @scroll="arrowVisibilityCheck">
        <div class="content flex" ref="content" >
          <ProcuctCard v-for="item in cards" :item="item" class="cardContent"/>
        </div>
      </div>
    </div>
    <slot name="button"></slot>
  </section>
</template>

<script setup lang="ts">
import {inject,ref,reactive,defineAsyncComponent} from "vue"
const ProcuctCard = defineAsyncComponent(() =>import("./ProcuctCard.vue"))
const display:any=inject(`display`)
const dataStore:any=inject(`dataStore`)
const touchable=display.platform.value.touch
const arrowsVisibility=reactive([false,true])
const cards=dataStore.products
const wrapper=ref()
const content=ref()
function arrowVisibilityCheck(){
  arrowsVisibility[0]=true
  arrowsVisibility[1]=true
  if(wrapper.value.scrollLeft<=0){
    arrowsVisibility[0]=false
  }
  if(wrapper.value.scrollLeft+wrapper.value.clientWidth>=content.value.clientWidth-1){
    arrowsVisibility[1]=false
  }
}
function moveTo(to:`left`|`right`){
  const wrapperItself=wrapper.value
  const wrapperWidth=wrapperItself.clientWidth
  const wrapperData=wrapperItself.getBoundingClientRect()
  const wrapperChilds:any=[...content.value.children]
  if(to==`left`){
    const item=wrapperChilds.findLast((i:HTMLElement)=>wrapperData.left>i.getBoundingClientRect().left)
    if(item){
      wrapperItself.scrollTo({
        left: item.getBoundingClientRect().left-content.value.getBoundingClientRect().left-45,
        behavior: "smooth",
      })
    }
  }else{
    const item=wrapperChilds.find((i:HTMLElement)=>i.getBoundingClientRect().right-wrapperData.left>wrapperWidth)
    if(item){
      wrapperItself.scrollTo({
        left: item.getBoundingClientRect().right-wrapperData.left-wrapperWidth+wrapperItself.scrollLeft+45,
        behavior: "smooth",
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.arrowWrapper{
  position: relative;
  .contentWrapper{
    overflow-x:scroll;
    scrollbar-width: none;
    .content{
      width: fit-content;
      .cardContent{
        margin:0 10px;
        width: 215px;
      }
    }
  }
  .arrow{
    border:1px solid black;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.333);
    opacity: 0.3333;
    transition: 0.5s;
    height: 100px;
    width: 20px;
  }
  .active::after{
    position: absolute;
    content: "";
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    top:50%;
    transform: translateY(-50%);
  }
  .active:hover{
    opacity: 1;
  }
  .arrowLeft{
    padding: 0 2px 0 1px;
    left: 0;
  }
  .arrowLeft::after{
    border-right: 14px solid rgba(0, 0, 0, 0.8);
  }
  .arrowRight{
    padding: 0 1px 0 3px;
    right: 0;
  }
  .arrowRight::after{
    border-left: 14px solid rgba(0, 0, 0, 0.8);
  }
}
.btn{
  margin: 40px auto 0 auto;
}
</style>
