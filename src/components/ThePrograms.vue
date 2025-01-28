<template>
  <section class="wrapper">
    <div class="header center bald s48 dark" > {{ $t(`${`programs`}[${globalProgramIndex}][${0}]`) }}</div>
    <ProgramCard class="prgcrd" v-for="program in programsVeriaty[1]" :image="images[0][`/src/assets/programs/${globalProgramName}/${programsVeriaty[1].indexOf(program)}.png`]" :name="globalProgramName" :program="program" :LPI="programsVeriaty[1].indexOf(program)" :GPI="globalProgramIndex"/> 
    <SelfAdvert/>
  </section>
</template>
<script setup lang="ts">
import {inject,watch,reactive,ref,defineAsyncComponent} from "vue"
const ProgramCard = defineAsyncComponent(()=>import('./ProgramCard.vue'))
const SelfAdvert = defineAsyncComponent(()=>import('./SelfAdvert.vue'))
const i18n:any=inject(`i18n`)
const dataStore:any=inject(`dataStore`)
const router:any=inject(`router`)
const globalProgramName=ref(router.currentRoute.value.query.name)
const findGlobalIndex=()=>dataStore.productsPrograms.filter((i:any)=>i.query.name===globalProgramName.value)[0].index
const globalProgramIndex=ref(findGlobalIndex())
const programsVeriaty=reactive([...i18n.tm(`programs[${globalProgramIndex.value}]`)])
let images:any=reactive([])

switchCaseName(globalProgramName.value)

watch(router.currentRoute,()=>{
  globalProgramName.value=router.currentRoute.value.query.name
  globalProgramIndex.value=findGlobalIndex()
  programsVeriaty.splice(0,programsVeriaty.length,...i18n.tm(`programs[${globalProgramIndex.value}]`))
  switchCaseName(globalProgramName.value)
})

function switchCaseName(name:string){
  let temp:any=[]
  switch(name){
    case `sport`:
      temp=import.meta.glob('/src/assets/programs/sport/*', { eager: true })
      break
    case `breakfest`:
      temp=import.meta.glob('/src/assets/programs/breakfest/*', { eager: true })
      break
    case `women`:
      temp=import.meta.glob('/src/assets/programs/women/*', { eager: true })
      break
    case `man`:
      temp=import.meta.glob('/src/assets/programs/man/*', { eager: true })
      break
    case `weight`:
      temp=import.meta.glob('/src/assets/programs/weight/*', { eager: true })
      break
    case `muscul`:
      temp=import.meta.glob('/src/assets/programs/muscul/*', { eager: true })
      break
    case `digestion`:
      temp=import.meta.glob('/src/assets/programs/digestion/*', { eager: true })
      break
    case `immunity`:
      temp=import.meta.glob('/src/assets/programs/immunity/*', { eager: true })
      break
    case `nutrition`:
      temp=import.meta.glob('/src/assets/programs/nutrition/*', { eager: true })
      break
    case `heart`:
      temp=import.meta.glob('/src/assets/programs/heart/*', { eager: true })
      break
    case `longevity`:
      temp=import.meta.glob('/src/assets/programs/longevity/*', { eager: true })
      break
    case `gain`:
      temp=import.meta.glob('/src/assets/programs/gain/*', { eager: true })
      break
  }
  images.splice(0,images.length,temp)
}
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 40px;
}
</style>
