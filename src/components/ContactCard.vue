<template>
  <div class="contacts br15 flex center">
    <div class="header s24 bald dark">{{ $t(`contact.contacts.header`) }}</div>
    <div class="card br15">
      <div class="header dark">{{ $t(`contact.contacts.variants[0]`) }}</div>
      <div class="element flex dark" @mouseup="call()" @mousedown="functionStore.prevent($event)"><phoneIcon class="image"/>{{ dataStore.contacts.phone }}</div>
    </div>
    <div class="card br15">
      <div class="header dark">{{ $t(`contact.contacts.variants[1]`) }}</div>
      <div class="element flex dark" @mouseup="sendMail" @mousedown="functionStore.prevent($event)"> <mailIcon class="image"/> {{ dataStore.contacts.mail }}</div>
    </div>
    <div class="card br15">
      <div class="header dark">{{ $t(`contact.contacts.variants[2]`) }}</div>
      <div class="social flex">
        <span @mouseup="inst" @mousedown="functionStore.prevent($event)"><img src="../assets/instagram.png" :alt="`instagram`+$t(`alt[1]`)" class="icon dark"></span>
        <span @mouseup="fb"  @mousedown="functionStore.prevent($event)"><img src="../assets/facebook.png" :alt="`facebook`+$t(`alt[1]`)" class="icon dark"></span>
        <span @mouseup="tg"  @mousedown="functionStore.prevent($event)"><img src="../assets/telegram.png" :alt="`telegram`+$t(`alt[1]`)" class="icon dark"></span>
        <span @mouseup="vbr"  @mousedown="functionStore.prevent($event)"><img src="../assets/viber.png" :alt="`viber`+$t(`alt[1]`)" class="icon dark"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject,defineAsyncComponent} from  "vue"
const phoneIcon = defineAsyncComponent(() =>import('@/assets/phoneIcon.vue'))
const mailIcon = defineAsyncComponent(() =>import('@/assets/mailIcon.vue'))
const display:any=inject(`display`)
const functionStore:any=inject(`functionStore`)
const dataStore:any=inject(`dataStore`)

function sendMail() {
  window.location.href = `mailto:${dataStore.contacts.mail}`;
}
function call(){
  window.location.href=`tel:${dataStore.contacts.phone}`
}
function inst(){
  const url = `https://www.instagram.com/${dataStore.contacts.instagram.userId}/`;
  window.open(url, '_blank');
}
function fb(){
  const appUrl = `fb://profile/1${dataStore.contacts.facebook.userId}`;
  const webUrl = `https://www.facebook.com//${dataStore.contacts.facebook.userId}`;
  if(display.platform.value.touch){
    const timer = setTimeout(() => {
      window.open(webUrl, '_blank');
    }, 1000); 
    window.location.href = appUrl;
    window.addEventListener('blur', () => clearTimeout(timer));
  }else{
    window.open(webUrl, '_blank');
  }
}
function tg(){
  if(display.platform.value.touch){
    const appUrl = `tg://resolve?domain=${dataStore.contacts.telegram.userId}`;
    window.open(appUrl) 
  }else{
    const webUrl = `https://t.me/${dataStore.contacts.telegram.userId}`;
    window.open(webUrl, '_blank');
  }
}
function vbr(){
  const appUrl = `viber://chat?number=${dataStore.contacts.viber.userId}`;
  window.open(appUrl);
}
</script>

<style lang="scss" scoped>
    .contacts{
      padding: 20px 10px ;
      z-index: 1;
      flex-grow: 1;
      gap: 20px;
      min-width: 332px;
      flex-direction: column;
      justify-content: space-around;
      background-color: rgba(255,255,255,0.7) ;
      .card{
        background-color: white;
        padding: 10px 15px; 
        .header{
          margin-bottom: 10px;
        }
        .element{
          cursor: pointer;
          transition: 0.2s;
          width: fit-content;
          margin: 0 auto;
          .image{
            flex-grow: 0;
            flex-shrink: 0;
            height: 20px;
            margin-right: 5px;
          }
        }
        .element:hover{
          color: var(--light);
        }
        .social{
          height: 40px;
          justify-content: center;
          gap: 4%;
          .icon{
            cursor: pointer;
            height: 100%;
            border-radius: 7px;
            transition:0.2s;
          }
          .icon:hover{
            filter: contrast(70%) brightness(120%);
          }
        }
      }
    }
</style>
