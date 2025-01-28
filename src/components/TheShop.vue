<template>
  <section>
    <div class="header center s36 dark bald">{{ $t(`shop.header`) }}</div>
    <form class="searchtab flex" :class="{relative:computedDisplay}" action="" @submit.prevent="setSearch">
      <div class="inputWrapper" :class="{relative:!computedDisplay}">
        <input class="input brd br15" type="text" @input="fillSearch" @focus="focus()" @blur="showMore=false" :placeholder="$t(`shop.search`)" ref="searchRef">
        <transition>
          <div class="dropList br15 brd" v-if="showMore&&filteredForSearch.length">
            <div class="item" v-for="item in filteredForSearch.length>10?10:filteredForSearch.length" @mousedown="functionStore.prevent($event)" @mouseup="sendTo($event,`/productPage/${
            filteredForSearch[item-1].nameId},${
            filteredForSearch[item-1].imageId},${
            filteredForSearch[item-1].descriptionId}`)">
              {{ $t(`catalog.productNames[${(filteredForSearch?.[item-1] as any).nameId}]`) }}
            </div>
          </div>
        </transition>
      </div>
      <BaseButton class="btn" BtnStyle="hollow" small="true">{{ $t(`shop.search`) }}</BaseButton>
    </form> 
    <div class="filtersWrapper flex">
      <DroplistNavElement :content="content" :dir="`header.products`" force="true" class="filtersList" :search="filtersArray.search">
        <template v-slot:name>
            {{ $t(`shop.categories`) }}
        </template>
      </DroplistNavElement>
      <div class="lableWrapper flex">
        <div class="wrapper" @click="remove(`search`)" v-if="filtersArray.search">
          <div class="filterLable br15" >{{ filtersArray.search}}</div>
        </div>
        <div class="wrapper" @click="remove(`category`)" v-if="filtersArray.category" >
          <div class="filterLable br15">{{ $t(`shop.queryToText.${filtersArray.category}`)}}</div>
        </div>
      </div>
    </div>
    <div class="productsWrapper grid">
      <ProcuctCard class="prdcrd" v-for="item in filteredForPage" :item="item"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {inject,ref,reactive,onMounted,watch,computed,defineAsyncComponent} from "vue"
const DroplistNavElement = defineAsyncComponent(()=>import("./DroplistNavElement.vue"))
const ProcuctCard = defineAsyncComponent(() =>import("./ProcuctCard.vue"))
const router:any =inject(`router`)
const dataStore:any =inject(`dataStore`)
const functionStore:any =inject(`functionStore`)
const display:any=inject(`display`)
const searchRef=ref()
const searchInput=ref()
const computedDisplay=computed(()=>display.width.value<700)
const filtersArray:any=reactive({category:ref(),search:ref()})
const filteredForPage=reactive([...dataStore.products])
const filteredForSearch=reactive([...dataStore.products])
const showMore=ref(false)
let content=[...dataStore.productsCatalog]
content.shift()

onMounted(equalise)
watch(router.currentRoute,equalise)

function equalise(){
  filtersArray.category=router.currentRoute.value.query.name
  filtersArray.search=router.currentRoute.value.query.search
}

function focus(){
  showMore.value=true
  filteringList()
}

watch(filtersArray,()=>{
  router.push({path:`/shop`,query:{name:filtersArray.category,search:filtersArray.search}})
  filtering()
})

function remove(dir:string){
  if(dir===`search`){
    filtersArray.search=undefined
    searchRef.value.value=``
    searchInput.value=``
  }else{
    filtersArray.category=undefined
  }
}

function fillSearch(){
  showMore.value=true
  searchInput.value=searchRef.value.value.toLowerCase()
}

watch(searchInput,filteringList)

function setSearch(){
  if(searchRef.value.value.trim()===``){return}
  showMore.value=false
  filtersArray.search=searchInput.value
}

function filtering(){
  let result:any=dataStore.products
  if(filtersArray.category){
    result=result.filter((item:any)=>item?.categories?.includes(filtersArray.category))
  }
  if(filtersArray.search){
    result=result.filter((item:any)=>item?.searchName?.includes(filtersArray.search))
  }
  filteredForPage.splice(0,filteredForPage.length, ...result)
}

function filteringList(){
  let result:any=dataStore.products
  if(filtersArray.category){
    result=result.filter((item:any)=>item?.categories?.includes(filtersArray.category))
  }
  if(searchInput.value){
    result=result.filter((item:any)=>item?.searchName?.includes(searchInput.value))
  }
  filteredForSearch.splice(0,filteredForSearch.length, ...(result as []))
}

function sendTo(event:any,path:string|null,query?:{name:string}){
  functionStore.sendTo(event,path,query)
}

</script>

<style lang="scss" scoped>

  .header{
    margin-bottom: 40px;
  }
  .searchtab{
    margin: 0 auto;
    justify-content: center;
    width: 60%;
    min-width: 335px;
    gap: 10px;
    .inputWrapper{
      flex-grow: 1;
      min-width: 235px;
      .input{
        height: 100%;
        width: 100%;
        padding: 0 10px;
      }
      .input:focus-visible{
        border: 1px solid black;
        outline: none;
      }
      .dropList{
        position: absolute;
        width: 100%;
        height: fit-content;
        top:100%;
        left: 0;
        margin-top: 10px;
        background-color: white;
        padding: 15px;
        z-index: 1;
        .item{
          color: var(--dark);
          margin: 10px;
          transition: color 0.2s;
        }
        .item:hover{
          color: var(--light);
        }
      }
    }
  }
  .filtersWrapper{
    width: 60%;
    min-width: 335px;
    margin: 20px  auto;
    gap: 10px;
    justify-content: space-between;
    .filtersList{
      margin: 5px;
    }
    .filtersList::after{
      content: "";
      display: inline-block;
      margin-left: 5px;
      vertical-align: middle;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-top: 10px solid var(--dark);
    }
    .filtersList:hover::after{
      border-top: 10px solid black;
    }
    .lableWrapper{
      flex-direction: column;
      align-items: end;
      gap: 10px;
      .wrapper{
        .filterLable{
          padding: 5px 10px;
          background-color: var(--dark);
          color: white;
          transition: 0.2s;
          box-decoration-break: clone;
        }
        .filterLable:hover{
          background-color: var(--light);
        }
      }
    }
  }
  .productsWrapper{
    padding-top: 30px;
    border-top: 1px solid var(--light);
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  .v-enter-from, .v-leave-to{
    opacity: 0;
  }
  .v-enter-active, .v-leave-active{
    transition: 0.2s;
  }
  .v-enter-to ,.v-leave-from{
    opacity: 1;
  }
.relative{
  position: relative;
}
</style> 
