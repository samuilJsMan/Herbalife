import { createApp,defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { createI18n} from 'vue-i18n'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from '@/App.vue'
import I18n from '@/i18n/i18n'
import router from '@/router'
// import BaseCard from './components/BaseCard.vue'
// import BaseButton from '@/components/BaseButton.vue'
// import BaseLink from './components/BaseLink.vue'
const BaseCard = defineAsyncComponent(() =>
  import("./components/BaseCard.vue")
)
const BaseButton = defineAsyncComponent(() =>
  import("@/components/BaseButton.vue")
)
const BaseLink = defineAsyncComponent(() =>
  import("@/components/BaseLink.vue")
)

const app = createApp(App)
const i18n=createI18n(I18n)
const vuetify = createVuetify({components,directives,})
const queryList=[`sport`,`breakfest`,`women`,`man`,`weight`,`muscul`,`digestion`,`immunity`,`nutrition`,`heart`,`longevity`,`gain`]
router.afterEach((to)=>{
  let name
  if(to.path===`/home`){
    name=i18n.global.t(`pages[0]`)
  } else if(to.path===`/about_Herbalife`){
    name=i18n.global.t(`pages[1]`)
  } else if(to.path===`/delivery_info`){
    name=i18n.global.t(`pages[2]`)
  } else if(to.path===`/shop`){
    name=i18n.global.t(`pages[3]`)
  } else if(to.path===`/publick_offer`){
    name=i18n.global.t(`pages[4]`)
  } else if(to.path===`/programs`){
    name=i18n.global.t(`programs[${queryList.indexOf(to.query.name as string)}][0]`)   
  } else if(to.path.includes(`productPage`)){
    const id=(to.params.ids as string).split(`,`)[0]
    name=i18n.global.t(`catalog.productNames[${id}]`)
  } else{
    name=i18n.global.t(`pages[5]`)
  }
  document.title = name
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)
app.component("BaseButton", BaseButton)
app.component("BaseLink", BaseLink)
app.component("BaseCard", BaseCard)
app.mount('#app');

