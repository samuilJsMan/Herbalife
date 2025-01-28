<template>
  <section class="wrapper ">
    <div class="center s32 black bald">{{ $t(`programs[${GPI}][1][${LPI}].header`) }}</div>
    <div class="mainWrapper flex" :class="{mobile:computedDisplayWidth}">
      <img :src="getImage()" alt="" class="image">
      <div class="text flex">
        <div class="subheader s20 dark">{{ $t(`programs[${GPI}][1][${LPI}].subheader`) }}</div>
        <div class="listTitle s20 black bald">{{ $t(`programs[${GPI}][1][${LPI}].list_header`) }}</div>
        <ul>
          <li class="item flex s18 black" v-for="item in structural.list2.length">
            <listBefore class="lbf"/>{{ $t(`programs[${GPI}][1][${LPI}].list2[${item-1}]`) }}
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li class="element" v-for="item in structural.sublist.length">
        <div class="title s20 black bald">{{ $t(`programs[${GPI}][1][${LPI}].sublist[${item-1}].header`) }}</div>
        <div class="text s18 black" v-if="typeof structural.sublist[item-1].body === `string`">{{ $t(`programs[${GPI}][1][${LPI}].sublist[${item-1}].body`) }}</div>
        <ul class="text s18 black" v-else v-for="subitem in structural.sublist[item-1].body.length">{{ $t(`programs[${GPI}][1][${LPI}].sublist[${item-1}].body[${subitem-1}]`) }}</ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {defineProps,computed,inject,defineAsyncComponent} from "vue"
const listBefore = defineAsyncComponent(() =>import("@/assets/listBefore.vue"))
const props=defineProps([`GPI`,`image`,`LPI`,`name`])
const display:any=inject(`display`)
const i18n:any=inject(`i18n`)

function getImage() {
  return props.image.default
}
const structural=computed(()=>{
  return i18n.tm(`programs[${props.GPI}][1][${props.LPI}]`)
})

const computedDisplayWidth = computed(() => {
  return display.width.value < 700;
});

</script>
<style lang="scss" scoped>
.wrapper{
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--light);
  .mainWrapper{
    flex-wrap: wrap;
    gap: 3%;
    margin: 40px 0;
    .image{
      max-width: 50%;
      object-fit: contain;
    }
    .text{
      max-width: 47%;
      flex-direction: column;
      justify-content: space-evenly;
      .listTitle{
        margin: 20px 0;
      }
      .item{
        align-items: center;
        margin-bottom: 10px;
        .lbf{
          margin-right: 2%;
        }
      }
    }
  }
  .mobile{
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .text{
      max-width: 100%;
    }
  }
  .element{
    .title{
      margin: 20px 0;
    }
    .text{
      margin: 10px 0;
      margin-left: 10px;
    }
  }
}

</style>
