<template>
  <section>
    <div class="center s40 bald"> {{ $t(`punblickoffer.header`) }}</div>
    <ol class="list">
      <li class="list--item bald s20" v-for="list in Object.keys(i18n.tm(`punblickoffer`).list)">
        <span class="list--header s20">{{$t(`punblickoffer.list[${list}].header`) }}</span>
        <ol class="list--inner normal">
          <li class="list--inner--item li" v-for="item2 in i18n.tm(`punblickoffer`).list[list].list">
            <span class="s20" v-if="typeof item2 === `string`">{{item2}}</span>
            <span class="s20" v-if="typeof item2 === `object`"> {{item2.header}}</span>
            <ol class="list--inner" v-if="typeof item2 === `object`">
              <li class="list--inner--item s20" v-for="item3 in item2.list">{{ item3 }}</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import {inject} from 'vue'
const i18n:any=inject(`i18n`)
</script>

<style lang="scss" scoped>
.list{
  list-style-type: decimal;
  .list--item{
    list-style-type: decimal;
    margin: 25px 0;
    .list--inner{
      padding-left: 20px;
      margin: 20px 0;
      .list--inner--item{
        margin: 20px 0;
      }
    }
  }
}

ol {
  counter-reset: item
}
li {
  display: block
}
li:before {
  content: counters(item, ".") ". ";
  counter-increment: item
}
</style>
