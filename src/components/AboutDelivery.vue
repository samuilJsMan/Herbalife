<template>
  <section class="wrapperr">
    <div class="headerTop center s36 bald">{{ $t(`header.more[3]`) }}</div>
    <div class="top flex">
      <BaseCard color="hollow" class="crd flex">
        <div class="header s32 bald">{{ $t(`delivery_payment.delivery.header`) }}</div>
        <div class="subheader s20">{{ $t(`delivery_payment.delivery.subheader`) }}</div>
        <div class="methods">
          <div class="header s20">{{ $t(`delivery_payment.delivery.methods.header`) }}</div>
          <ul class="list">
            <li v-for="item in 2" class="list--item s20 flex"><listBefore/><div class="s20">{{ $t(`delivery_payment.delivery.methods.list[${item-1}]`) }}</div></li>
          </ul>
        </div>
        <div class="details">
          <div class="header s20">{{ $t(`delivery_payment.delivery.detail.header`) }}</div>
          <ul class="list">
            <li v-for="item in 4" class="list--item s20 flex"><listBefore/><div class="s20">{{ $t(`delivery_payment.delivery.detail.list[${item-1}]`) }}</div></li>
          </ul>
        </div>
      </BaseCard>
      <BaseCard color="hollow" class="crd flex">
        <div class="header s32 bald">{{ $t(`delivery_payment.payment.header`) }}</div>
        <div class="subheader s20">{{ $t(`delivery_payment.payment.subheader`) }}</div>
        <div class="methods">
          <div class="header s20">{{ $t(`delivery_payment.payment.methods.header`) }}</div>
          <ul class="list">
            <li v-for="item in 2" class="list--item s20 flex"><listBefore/><div class="s20">{{ $t(`delivery_payment.payment.methods.list[${item-1}]`) }}</div></li>
          </ul>
        </div>
      </BaseCard>
    </div>
    <div class="bot">
      <BaseCard color="hollow" class="crd flex">
        <div class="header s32 bald">{{ $t(`delivery_payment.return.header`) }}</div>
        <div class="subheader s20" v-for="item in 2">{{ $t(`delivery_payment.return.subheaders[${item-1}]`) }}</div>
      </BaseCard>  
    </div>
  </section>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue"
const listBefore = defineAsyncComponent(() =>import('@/assets/listBefore.vue'))
</script>

<style lang="scss" scoped>
.wrapperr{
  *{
    color: black;
  }
  .headerTop{
    margin-bottom: 30px;
  }
  .top{
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    .crd{
      width: 40%;
    }
  }
  .crd{
    flex-grow: 1;
    min-width: 335px;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    .list{
      .list--item{
        padding: 5px 0;
        gap: 10px;
        svg{
          align-self: center;
          flex-grow: 0;
          flex-shrink: 0;
          margin-bottom: 2px;
        }
      }
    }
  }
}
</style>
