<template>
  <section>
    <div class="header s36 dark bald">{{$t(`herbalife__chose.header`) }}</div>
    <div class="flex">
      <ul class="list">
        <li v-for="item in 12" class="item ">
          <span class="s20 light bald">
            {{ item<10?`0${item}`:item }}
          </span> 
          <span class="text s20 black">
            {{ ` `+$t(`herbalife__chose.list[${item-1}]`) }}
          </span>
        </li>
      </ul>
      <div class="imageWrapper">
        <img src="../assets/HerbalifeChose.webp" :alt="$t(`alt[0]`)+$t(`alt[3]`)" class="image">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .header{
    margin-bottom: 50px;
  }
  .list{
    flex-grow: 5;
    .item{
      padding: 10px 0;
      border-width: 1px 0px 0px 0px;
      border-style: solid;
      border-image: linear-gradient(to right, var(--light) 0%, transparent 90%) 1;
      position: relative;
      z-index: 1;
      .text{
        background-color: rgba(255,255,255,0.3);
        padding: 5px;
        box-decoration-break: clone;
        border-radius: 5px;
        
      }
    } 
    .item:first-child{
      border-top: none;
    }
  }
  .imageWrapper{
    position: relative;
    width: 240px;
    flex-shrink: 100;
    .image{
      position: absolute;
      height: 90%;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50% );
    } 
  }
  

</style>
