<template>
  <footer :class="[`footer`,{'footerMobile':computedDisplayWidth}]">
    <div class="mainPart flex">
      <img class="logo br15" src="../assets/HLLogo.png" :alt="`Herbalife`+$t(`alt[1]`)" @mousedown="functionStore.prevent($event)" @mouseup="sendTo($event,`/home`,{ name: `top` })">
      <div class="contacts flex">
        <a class="link" :href="`tel:${dataStore.contacts.phone}`" >{{ dataStore.contacts.phone }}</a>
        <a class="link" :href="`mailto:${dataStore.contacts.mail}`">{{ dataStore.contacts.mail }}</a>
        <span class="link" @mouseup="inst" @mousedown="functionStore.prevent($event)">{{ dataStore.contacts.instagram.url }}</span>
        <span class="link" @mouseup="fb"  @mousedown="functionStore.prevent($event)">{{ dataStore.contacts.facebook.url }}</span>
        <span class="link" @mouseup="tg"  @mousedown="functionStore.prevent($event)">{{ dataStore.contacts.telegram.url }}</span>
        <span class="link" @mouseup="vbr"  @mousedown="functionStore.prevent($event)">{{ dataStore.contacts.viber.url }}</span>
      </div>
    </div>
    <span class="offer link" @mousedown="functionStore.prevent($event)" @mouseup="sendTo($event,`/publick_offer`)">{{ $t(`footer.offer`) }}</span>
  </footer>
</template>

<script setup lang="ts">
import {inject,computed} from  "vue"
const display:any=inject(`display`)
const dataStore:any=inject(`dataStore`)
const functionStore:any=inject(`functionStore`)
const computedDisplayWidth = computed(() => {
  return display.width.value < 900;
});

function sendTo(event:any,path:string|null,query?:any){
  functionStore.sendTo(event,path,query)
}

function inst(){
  const url = `https://www.instagram.com/${dataStore.contacts.instagram.userId}/`;
  window.open(url, '_blank');
}
function fb(){
  if(display.platform.value.touch){
    const appUrl = `fb://profile/1${dataStore.contacts.facebook.userId}`;
    window.open(appUrl, '_blank')
  }else{
    const webUrl = `https://www.facebook.com//${dataStore.contacts.facebook.userId}`;
    window.open(webUrl, '_blank');
  }
}
function tg(){
  if(display.platform.value.touch){
    const appUrl = `tg://resolve?domain=${dataStore.contacts.telegram.userId}`;
    window.open(appUrl, '_blank') 
  }else{
    const webUrl = `https://t.me/${dataStore.contacts.telegram.userId}`;
    window.open(webUrl, '_blank');
  }
}
function vbr(){
  const appUrl = `viber://chat?number=${dataStore.contacts.viber.userId}`;
  window.open(appUrl, '_blank');
}

</script>

<style lang="scss" scoped>
.footer{
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  background-color: var(--light);
  border-radius: 25px 25px 0 0;
  padding: 30px;
  padding-bottom: 0;
  .mainPart{
    gap:20px;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--dark);
    .logo{
      align-self: center;
      max-width: 100%;
      max-height: 158px;
      object-fit: contain;
      flex-grow: 1;
      flex-shrink: 1;
      background-color: white;
      padding: 10px 0 0 10px;
      cursor: pointer;
    }
    .contacts{  
      flex-grow: 1;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 5px;
      padding: 10px 20px;
      border-top: 1px solid var(--dark);
      border-bottom: 1px solid var(--dark);
      border-radius: 15px;
    }
  }
  .offer{
    max-width: 618px;
    cursor: pointer;
    margin: 20px auto !important;
  }
  .link{
    cursor: pointer;
    display: block;
    width: fit-content;
    transition: 0.2s;
  }
  .link:hover{
    color: var(--dark)
  }
}
</style>