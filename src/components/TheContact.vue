<template>
  <section class="section flex" ref="section" id="contacts">
    <img src="../assets/contsctBG.webp" alt="" class="img br15" >
    <BaseCard class="about flex" color="dark">
      <div class="header s24 bald">{{ $t(`contact.about.header`) }}</div>
      <ul class="list flex">
        <li class="item s16" v-for="item in 6"> {{ $t(`contact.about.list[${item-1}]`) }}</li>
      </ul>
    </BaseCard>
    <ContactCard />
  </section>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from  "vue"
const ContactCard = defineAsyncComponent(() =>import("./ContactCard.vue"))
</script>

<style lang="scss" scoped>
  .section{
    position: relative;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    .img{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .about{
      z-index: 1;
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 30px;
      padding:  20px;
      align-items: center;
      .list{
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        .item{
          list-style: disc;
          list-style-position: inside; 
        }
      }
    }
  }
</style>
