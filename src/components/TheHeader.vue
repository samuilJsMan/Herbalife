<template>
  <header>
    <div class="header flex" @touchmove.prevent @scroll.prevent>
      <div class="imageWrapper flex">
        <img class="logo" src="../assets/HLLogo.png" :alt="`Herbalife`+$t(`alt[1]`)" @mouseup="sendTo($event,`/home`)" @mousedown="functionStore.prevent($event)"/>
        <DroplistNavElement class="dropList">
          <template v-slot:name>
            <language class="lang"/>
          </template>
          <template v-slot:content>
            <BaseLink v-for="link in i18n.availableLocales" color="dark" :text="link.toUpperCase()" @click="changeLang(link)"/>
          </template>
        </DroplistNavElement>
      </div>
      <transition> 
        <TheNav 
        :class="{mobileNav:computedDisplayWidth}" 
        v-if="!computedDisplayWidth||mobileNavStatus" 
        @touchmove.prevent/>
      </transition> 
      <div :class="[`openButton`,`flex`,{'active':mobileNavStatus}]" @click="mobileNavToggle" v-if="computedDisplayWidth">
        <div class="line first"></div>
        <div class="line middle"></div>
        <div class="line last"></div>
      </div>
    </div>
    <transition name="backdrop">
      <div class="backdrop" v-if="computedDisplayWidth&&mobileNavStatus" @touchend="mobileNavClose" @mouseup="mobileNavClose" 
      @touchmove.prevent @wheel="mobileNavClose"></div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { inject, computed,defineAsyncComponent} from "vue";
const language = defineAsyncComponent(() =>import("@/assets/language.vue"))
import DroplistNavElement from "@/components/DroplistNavElement.vue";
import TheNav from "@/components/TheNav.vue";
const i18n:any=inject(`i18n`)
const display:any = inject(`display`);
const functionStore:any=inject(`functionStore`)
const mobileNavStatus=functionStore.getMobileNavStatus()

const computedDisplayWidth = computed(() => {
  return display.width.value < 900;
});

function sendTo(event:any,path:string|null,query?:{name:string}){
  functionStore.sendTo(event,path,query)
}

function mobileNavToggle() {
  mobileNavStatus.value=!mobileNavStatus.value
}

function mobileNavClose(){
  mobileNavStatus.value=false
}

function changeLang(lang:string) {
  functionStore.changeLang(lang)
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid var(--light);
  position: relative;
  background-color: white;
  transform-style: preserve-3d;
  z-index:3;
  gap: 20px;
  .imageWrapper{
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    .dropList:hover{
      svg{
        fill:black;
      }
    }
    .lang{
      height: 25px;
      display: block;
    }
    .logo {
      cursor: pointer;
      max-height: 50px;
      aspect-ratio: 3/1;
    }
  }
  .openButton{
    height: 30px;
    min-width: 30px;
    flex-direction: column;
    justify-content: space-around;
    .line{
      background-color: black;
      height: 3px;
      transition: transform, opacity, 0.2s;
    }
  }
  
  .active{
    .first{
      transform: translateY(10px) rotateZ(45deg) ;
    }
    .last{
      transform: translateY(-10px) rotateZ(-45deg);
    }
    .middle{
      opacity: 0;
    }
  }
}
.mobileNav{
  top: 100%;
  left: 0;
  padding: 15px 0;
  flex-direction: column;
  position: absolute;
  width: 100%;
  border-bottom:1px solid  var(--light);
  border-radius: 0 0 25px 25px;
  transform: translateZ(-10px);
  z-index: 2;
}
.backdrop{
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  height: 100%;
  width: 100%;
}
.v-enter-from,.v-leave-to{
  opacity: 0;
  top:-100px;
}

.v-enter-active,.v-leave-active{
  transition: 0.2s;
}

.v-leave-from,.v-enter-to{
  opacity: 1;
  top:60px;
}

.backdrop-enter-from,.backdrop-leave-to{
  opacity: 0;
}

.backdrop-enter-active,.backdrop-leave-active{
  transition: 0.2s;
}

.backdrop-leave-from,.backdrop-enter-to{
  opacity: 1;
}
</style>
