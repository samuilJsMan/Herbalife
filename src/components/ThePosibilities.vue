<template>
  <section :class="[`wrapper`,{wrapperMobile:computedDisplayWidth,flex:computedDisplayWidth}]">
    <div class="card flex" v-for=" card in 3">
      <img :src="getImageUrl(`Pos${card}.png`)" :alt="$t(`alt[2]`)+$t(`posibilities.${cardArr[card-1].name}.header`)" class="image br25">
      <div class="text flex dark">
        <h1 class="header center s40">{{ $t(`posibilities.${cardArr[card-1].name}.header`) }}</h1>
        <div class="linesBlock flex">
          <p class="s20" v-for="item in 3">{{ $t(`posibilities.${cardArr[card-1].name}.list[${item-1}]`) }}</p>
        </div>
        <BaseButton class="btn" BtnStyle="hollow" @mouseup="sendTo($event,cardArr[card-1].link,cardArr[card-1]?.query)">{{ $t(`posibilities.${cardArr[card-1].name}.button`) }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject,computed} from "vue"
const display:any=inject(`display`)
const functionStore:any=inject(`functionStore`)
const cardArr=[{name:`buisness`,link:`/home`,query:{name:`contacts`}},{name:`production`,link:`/shop`},{name:`consult`,link:`/home`,query:{name:`contacts`}}]
const computedDisplayWidth = computed(() => {
  return display.width.value < 900;
});
function getImageUrl(c:string) {
  return new URL(`/src/assets/${c}`, import.meta.url).href
}

function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}
</script>

<style lang="scss" scoped>
.text{
  width: 50%; 
  padding: 40px;
  flex-direction: column;
  justify-content: space-around;
  .linesBlock{
    flex-direction: column;
    margin: 20px 0;
    gap: 20px;
  }
  .btn{
    margin:0 auto;
    width: 100%;
  }
}
.image{
  width: 50%;
  object-fit:cover;
}
.card:nth-child(2){
  .image{
    order: 2;
  }
  .text{
    order:1;
  }
}
.wrapperMobile{
  gap: 40px;
  flex-direction: column;
  .card{
    flex-direction: column;
    gap: 20px;
    .text{
      width: 100%;
      padding:0px;
    }
    .image{
      width: 100%;
    }
  }
  .card:nth-child(2){
    .image{
      order: 1;
    }
    .text{
      order:2;
    }
  }
}
</style>
