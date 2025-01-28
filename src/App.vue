<template>
  <VApp class="body">
    <TheHeader id="top"/>
    <main class="main" >
      <router-view>

      </router-view>
    </main>
    <TheFooter/>
  </VApp>
</template>

<script setup lang="ts">
import { provide,onMounted } from "vue";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useFunctionStore } from "@/stores/functionStore";
import { useDataStore } from "@/stores/dataStore";
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue";
const functionStore = useFunctionStore();
const dataStore=useDataStore()
const display = useDisplay();
const router=useRouter()
const i18n=useI18n()

onMounted(()=>{
  if(localStorage.language){
    functionStore.changeLang(localStorage.language)
  }else if(i18n.availableLocales.includes(navigator.language)){
    functionStore.changeLang(navigator.language)
  }
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add(`darkened`)
  }
})

provide(`router`,router)
provide(`functionStore`, functionStore);
provide(`dataStore`, dataStore);
provide(`display`, display);
provide(`i18n`, i18n);
provide(`images`,import.meta.glob('/src/assets/*', { eager: true }))
provide(`imagesProducts`,import.meta.glob('/src/assets/products/*', { eager: true }))

</script>

<style lang="scss">
:root{ 
  --dark:#016f43;
  --light:#83b731;
}
.darkened{
  background: linear-gradient(to right, rgb(200, 200, 200) 0%,#ffffff 10%,#ffffff 90%,rgb(200, 200, 200) 100%);
  .body{
    background: rgba(0,0,0,0);
    .main{
      background: rgba(0,0,0,0);
    }
  }
}
*{
  font-family: "Mulish";
  font-size: 2.1vh;
  margin: 0;
  padding: 0;
  border-width: 0px;
  text-decoration: none;
  color: inherit;
  list-style: none;
}
.center{
  text-align: center;
}
.body{
  max-width: 1200px;
  margin: 0 auto;
  // position: relative; ////
  .main{
    padding: 100px 20px 0 20px;
    min-height: 90%;
  }
  .main>*{
    margin-bottom: 100px;
  }
}
.light{
 color:#83b731;
}
.dark{
  color:#016f43
}
.black{
  color: black;
}
.bald{
 font-weight: 700;
}
.normal{
  font-weight: 400;
}

.s15{
 font-size: 1.7vh;
}
.s20{
 font-size: 2.34vh;
}
.s24{
 font-size: 2.8vh;
}
.s28{
 font-size: 3.27vh;
}
.s32{
 font-size: 3.74vh;
} 
.s36{
 font-size: 4.21vh;
}
.s40{
 font-size: 4.68vh;
}
.s44{
 font-size: 5.14vh;
}
.s48{
 font-size: 5.61vh;
}
.br25{
  border-radius: 25px;
}
.br15{
  border-radius: 15px;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.brl{
  border: 1px solid var(--light);
}
.brd{
  border: 1px solid var(--dark);
}
</style>
