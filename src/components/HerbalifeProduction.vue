<template>
  <section>
    <div class="header center bald s36 dark">{{ $t(`herbalife_production.header`) }}</div>
    <div :class="[`content`,`black`,{mobile:computedDisplayWidth,flex:computedDisplayWidth}]">
      <div class="section flex section--top">
        <div class="text s20">
          <div class="wrapper">
            <div class="text--block s20">{{ $t(`herbalife_production.top.first`) }}</div>
          </div>
          <div>
            <div class="text--block s20">{{ $t(`herbalife_production.top.second`) }}</div>
          </div>
        </div>
        <img class="image top" src="../assets/HerbalifeProduction1.webp" :alt="$t(`alt[0]`)+$t(`alt[5]`)">
      </div>
      <div class="section flex section--bot">
        <img class="image bot" src="../assets/HerbalifeProduction2.webp" :alt="$t(`alt[0]`)+$t(`alt[4]`)">
        <div class="text">
          <div class="wrapper wrapper--bot">
            <div class="text--block s20">{{ $t(`herbalife_production.bottom`) }}</div> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject,computed} from "vue"
const display:any=inject(`display`)
const computedDisplayWidth = computed(()=>display.width.value<700);
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 20px;
}
.content{
  .section{
    flex-wrap: wrap;
    .image{
      object-fit: cover;
      width: 150px;
      min-height: 200px;
      overflow: visible;
    }
    .text{
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding: 20px 0;
      flex-grow: 1;
      z-index: 1;
      width: 68%;
      max-width: 100%;
      .text--block{
        display: inline;
        box-decoration-break: clone;
        background-color: rgba(255, 255,255, 0.3);
        padding: 1.7px 5px;
        border-radius: 5px;
      }
    }
  }
  .top{
    margin-right: 25px;
  }
  .bot{
    margin-left: 25px;
  }
  .wrapper--bot{
    text-align: right;
  }
}
.mobile{
  flex-direction: column;
  gap: 20px;
  .section{
    .image{
      width: 100%;
      margin: 0;
    }
    .wrapper{
      text-align: center;
    }
  }
  .section--bot{
    .image{
      order: 2;
    }
    .text{
      order: 1;
    }
  }
}

</style>
