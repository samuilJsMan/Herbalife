import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import {ref} from "vue"

export const useFunctionStore = defineStore("functionStore", () => {
  const router=useRouter()
  const mobileNavStatus=ref(false)
  const i18n=useI18n({ useScope: "global" })

  function changeLang(lang:string) {
    lang=lang.split(`-`)[0]
    if(i18n.availableLocales.includes(lang)){
      i18n.locale.value = lang;
      localStorage.setItem(`language`,lang)
    }
  }

  function prevent(event:any){
    if(event.button===1){
      event.preventDefault()
    }
  }

  function sendTo(event:any,path:string,query?:any){
    mobileNavStatus.value=false
    if(event?.button===0){
      router.push(typeof query ===`object`?{path,query}:{path})
      setTimeout(()=>{
        const element=document.querySelector(`#${query?.name}`)
        window.scrollTo({
        top: element?element.getBoundingClientRect().top + window.scrollY-60:0,
        behavior: element?"smooth":"instant",
      })},50)
    }else if(event?.button===1){
      window.open(router.resolve(typeof query ===`object`?{path,query}:{path}).href)
    }
  }

  function getImageUrl(path:any) {
    return new URL(path, import.meta.url).href
  } 
  
  function getMobileNavStatus(){
    return mobileNavStatus
  }
  return { 
      getMobileNavStatus,
      sendTo,
      changeLang,
      getImageUrl,
      prevent
     };
});

// <script>
//   function openTelegram(username) {
//     const appUrl = `tg://resolve?domain=${username}`;
//     const webUrl = `https://t.me/${username}`;
//     window.open(appUrl, '_blank') || window.open(webUrl, '_blank');
//   }

//   function openMessenger(userId) {
//     const appUrl = `fb-messenger://user-thread/${userId}`;
//     const webUrl = `https://www.messenger.com/t/${userId}`;
//     window.open(appUrl, '_blank') || window.open(webUrl, '_blank');
//   }

//   function openViber(phoneNumber) {
//     const appUrl = `viber://chat?number=${phoneNumber}`;
//     window.open(appUrl, '_blank');
//   }

//   function openInstagram(username) {
//     const url = `https://www.instagram.com/${username}/`;
//     window.open(url, '_blank');
//   }
// </script>