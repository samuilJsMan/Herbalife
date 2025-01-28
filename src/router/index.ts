import { createRouter, createWebHistory } from 'vue-router'
import TheShop from '@/components/TheShop.vue'
import TheHome from '@/components/TheHome.vue'
import AboutDelivery from '@/components/AboutDelivery.vue'
import AboutHerbalife from '@/components/AboutHerbalife.vue'
import PublickOffer from '@/components/PublickOffer.vue'
import ThePrograms from '@/components/ThePrograms.vue'
import ProductPage from '@/components/ProductPage.vue'
import NotExist from '@/components/NotExist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:`/`, redirect:`/home`},
    {path:`/home`, component:TheHome},
    {path:`/shop`, component:TheShop},
    {path:`/about_Herbalife`, component:AboutHerbalife},
    {path:`/delivery_info`, component:AboutDelivery},
    {path:`/publick_offer`, component:PublickOffer},
    {path:`/programs`, component:ThePrograms},
    {path:`/productPage/:ids`, component:ProductPage ,props:true},
    {path:`/:NotExist(.*)`, component:NotExist }
  ],
})

export default router
