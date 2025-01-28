<template>
  <section :class="['introduction',`flex`,'dark', {introductionMobile:computedDisplayWidth}]" id="about_me" ref="about_me">
    <div class="text flex">
      <h1 class="center s48">{{ $t(`name`) }}</h1>
      <p class="center s24">{{ $t(`introduction.about[0]`) }}</p>
      <p class="s20">{{ $t(`introduction.about[1]`) }}</p>
      <ul>
        <li class="listItem s20" v-for="pos in 4"><listBefore/><div class="text">{{ $t(`introduction.list[${pos-1}]`) }}</div></li>
      </ul>
      <BaseButton BtnStyle="light" class="btn" @mouseup="sendTo($event,`/home`,{name:`contacts`})">
        {{ $t(`consult`) }}
      </BaseButton>
    </div>
    <img class="image" src="../assets/introductionImage.png" :alt="$t(`alt[0]`)+$t(`name`)">
  </section>
</template>

<script setup lang="ts">
import {inject, computed,defineAsyncComponent,ref} from "vue"
const listBefore = defineAsyncComponent(()=>import("@/assets/listBefore.vue"))
const about_me=ref()
const functionStore:any=inject(`functionStore`)

function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
const display:any = inject(`display`);
const computedDisplayWidth = computed(() => {
  return display.width.value < 900;
});
</script>

<style lang="scss" scoped>
  .introduction{
    justify-content: space-between;
    gap:30px;
    .text{
      flex-direction: column;
      align-self: center;
      gap: 20px;
      .listItem{
        list-style: none;
        display: flex;
        padding: 5px 0;
        gap: 10px;
        svg{
          align-self: center;
          flex-grow: 0;
          flex-shrink: 0;
          margin-bottom: 2px;
        }
        .text{
          height: fit-content;
        }
      }
      .btn{ 
        width: 80%;
        margin: 0 auto;
      }
    }
    .image{ 
      object-fit:contain;
      width: 40%;
      margin: 0 auto;
    }
  }
  .introductionMobile{
    flex-direction: column;
    .image{
      width: 90%;
    }
  }
</style>
