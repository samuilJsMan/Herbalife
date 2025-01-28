<template>
  <div>
    <div class="block brl br15"v-if="typeof item === `object`">
      <div class=" " v-for="item2 in item">
        <div class=" " v-if="typeof item2 === `object`">
          <div class="content s20 dark" v-for="item3 in item2">
            {{ $t(`shop.producstDescription[${globalID}][${description.indexOf(item)}][${item.indexOf(item2)}][${item2.indexOf(item3)}]`) }}
          </div>
        </div>
        <div v-else class="content s20 dark">
          {{ $t(`shop.producstDescription[${globalID}][${description.indexOf(item)}][${item.indexOf(item2)}]`) }}
        </div>
      </div>
    </div>
    <div v-else class="block brl br15 s20 dark">
      {{ $t(`shop.producstDescription[${globalID}][${description.indexOf(item)}]`) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
defineProps([`item`,`description`,`globalID`])
</script>
<style lang="scss" scoped>
  .block{
    margin: 25px 0;
    padding: 20px;
  }
  .content{
    margin:4px 0;
  }

</style> 
