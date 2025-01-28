<template>
  <section :class="[`wrapper`,{wrapperMobile:computedDisplayWidth}]">
    <img class="image--logo image" src="../assets/herbalifeLogoFainth.png" alt="">
    <img class="image--text image" src="../assets/herbalifeTextFainth.png" alt="">
    <div class="part part--me flex">
      <img class="part--image br25" src="../assets/benefitsPhotoMe.png" :alt="$t(`alt[0]`)+$t(`name`)" >
      <div class="part--text flex dark">
        <p class="header bald s28">
          <span class="light s28">{{ $t(`benefits.top.header.light`) }}</span>
          {{ $t(`benefits.top.header.dark`) }}
        </p>
        <p class="s24 content">
          {{ $t(`benefits.top.content.top`) }}
          <span class="bald s24">{{ $t(`benefits.top.content.bald`) }}</span>
          {{ $t(`benefits.top.content.bot`) }}
        </p>
      </div>
    </div>
    <div class="part part--exp flex">
      <div class="part--text flex">
        <p class="s32 dark bald header">{{ $t(`benefits.bot.header`) }}</p>
        <div v-for="text in 3" class="content">
          <p :class="[`light`,`s36`,{center:computedDisplayWidth} ]">{{ $t(`benefits.bot.content[${text-1}].number`) }}</p>
          <p class="dark s20 text">{{ $t(`benefits.bot.content[${text-1}].text`) }}</p>
        </div>   
      </div>
      <img class="part--image" src="../assets/benefitsPhotoProducts.png" :alt="$t(`alt[0]`)+$t(`alt[3]`)" v-if="!computedDisplayWidth">
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject,computed} from "vue"
const display:any=inject(`display`)
const computedDisplayWidth = computed(()=>display.width.value<900);
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  *{
    z-index: 1;
  }
  .image{
    position: absolute;
    z-index: 0 !important;
  }
  .image--logo{
    width: 50%;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .image--text{
    width: 100%;
    bottom: 0;
  }
  .part--text{
    justify-content: space-around;
    flex-direction: column;
    gap: 10px;
  }
  .part--image{
    object-fit: cover;
  }
  .part--me{
    .part--image{
      max-width: 25%;
    }
    .part--text{
      padding: 40px 0 40px 40px;
      .header{
        margin-bottom: 40px;
      }
    }
  }
  .part--exp{
    .part--text{
      padding: 40px 40px 0 0;
    }
    .part--image{
      max-width: 55%;
    }
  }
}

.wrapperMobile{
  .image--logo{
    width: 80%;
    top:auto;
    transform: translate(-50%, 0);
    bottom: 200px;
  }
  .part--me{
    flex-direction: column;
    .part--image{
      order:2;
      max-width: none;
    }
    .part--text{
      order:1;
      padding:0 0 40px 0;
    }
  }
  .part--exp{
    .part--text{
      padding: 40px 0 0 0;
    }
  }
}
</style>
