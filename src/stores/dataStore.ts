import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", () => {

  const catalogSection=[
    {image:'0.png',query:{name:'HerbalifelineMax'},id:0},
    {image:'1.png',query:{name:'TomatoSoupWithBasil'},id:1},
    {image:'2.webp',query:{name:'Nightworks'},id:2},
    {image:'3.png',query:{name:'HerbalConcentrateClassic100g'},id:3},
    {image:'4.webp',query:{name:'ImunBooster'},id:4}
  ]

  const productsCatalog = [
    { index: 0,to:`/shop` },
    { index: 1, query: { name: `balanced` },to:`/shop` },
    { index: 2, query: { name: `snacks` } ,to:`/shop` },
    { index: 3, query: { name: `drinks` } ,to:`/shop` },
    { index: 4, query: { name: `additives` } ,to:`/shop` },
    { index: 5, query: { name: `sports` }, to:`/shop` },
    { index: 6, query: { name: `aloe` } ,to:`/shop` },
    { index: 7, query: { name: `skin` } ,to:`/shop` },
  ];

  const programCatalog=[
    `Image Placeholder.png`,
    `Image Placeholder (1).png`,
    `Image Placeholder (2).png`,
    `Image Placeholder (3).png`,
    `Image Placeholder (4).png`,
    `Image Placeholder (5).png`,
    `Image Placeholder (6).png`,
    `Image Placeholder (7).png`,
    `Image Placeholder (8).png`,
    `Image Placeholder (9).png`,
    `Image Placeholder (10).png`,
    `Image Placeholder (11).png`,
  ]
  
  const productsPrograms = [
    { index: 0, to: `/programs` , query: { name: `sport` }},
    { index: 1, to: `/programs` , query: { name: `breakfest` }},
    { index: 2, to: `/programs` , query: { name: `women` }},
    { index: 3, to: `/programs` , query: { name: `man` }},
    { index: 4, to: `/programs` , query: { name: `weight` }},
    { index: 5, to: `/programs` , query: { name: `muscul` }},
    { index: 6, to: `/programs` , query: { name: `digestion` }},
    { index: 7, to: `/programs` , query: { name: `immunity` }},
    { index: 8, to: `/programs` , query: { name: `nutrition` }},
    { index: 9, to: `/programs` , query: { name: `heart` }},
    { index: 10, to: `/programs` , query: { name: `longevity` }},
    { index: 11, to: `/programs` , query: { name: `gain` }}
  ];

  const moreList=[
    {index:0,to:`/home`,query: { name: `about_me` }},
    {index:1,to:`/about_Herbalife`},
    {index:2,to:`/home`,query: { name: `contacts` }},
    {index:3,to:`/delivery_info`},
  ]

  const contacts={
    mail:'samuil.antonovich@gmail.com',
    phone:`+380671188498`,
    instagram:{url:`https://www.instagram.com/`,userId:"samuil_antonovich_"},
    facebook:{url:`https://www.facebook.com/`,userId:"100047770632317"},
    telegram:{url:`https://web.telegram.org/`,userId:"semm_14"},
    viber:{url:`https://www.viber.com/`,userId:"+380671188498"}
  }
  
  const products=[
    {searchName:"formula 1 evening cocktail вечірній коктейль формула 1",nameId:0,categories:'balanced',imageId:0,descriptionId:0},
    {searchName:"balanced vegan formula 1 coctail with coffee latte flavor збалансований веганський коктейль формула 1 зі смаком кава латте",nameId:1,categories:'balanced',imageId:1,descriptionId:1},
    {searchName:"balanced vegan formula 1 coctail with a delicate chocolate flavor збалансований веганський коктейль формула 1 зі смаком ніжного шоколаду",nameId:2,categories:'balanced',imageId:2,descriptionId:1},
    {searchName:"balanced vegan formula 1 coctail with crispy cookie flavor збалансований веганський коктейль формула 1 зі смаком хрусткого печива",nameId:3,categories:'balanced',imageId:3,descriptionId:1},
    {searchName:"formula 1 protein coctail with vanilla cream flavor протеїновий коктейль формула 1 зі смаком ванільного крему",nameId:4,categories:'balanced',imageId:4,descriptionId:2},
    {searchName:"formula 1 protein coctail with melon flavour протеїновий коктейль формула 1 зі смаком дині",nameId:5,categories:'balanced',imageId:5,descriptionId:2},
    {searchName:"formula 1 protein coctail with tropical fruit flavor протеїновий коктейль формула 1 зі смаком тропічних фруктів",nameId:6,categories:'balanced',imageId:6,descriptionId:2},
    {searchName:"formula 1 protein coctail with melon flavor 2 kg протеїновий коктейль формула 1 зі смаком дині 2 кг",nameId:7,categories:'balanced',imageId:7,descriptionId:2},
    {searchName:"tomato soup with basil томатний суп з базиліком",nameId:8,categories:'balanced',imageId:8,descriptionId:3},
    {searchName:"phytocomplet фітокомпліт",nameId:9,categories:'balanced additives sports',imageId:9,descriptionId:4},
    {searchName:"protein coffee with latte macchiato flavor протеїнова кава зі смаком лате макіато",nameId:10,categories:'snacks drinks',imageId:10,descriptionId:5},
    {searchName:"protein bars протеїнові батончики",nameId:11,categories:'snacks',imageId:11,descriptionId:6},
    {searchName:"protein mini bars in crunchy caramel протеїнові міні-батончики в хрусткій карамелі",nameId:12,categories:'snacks',imageId:12,descriptionId:7},
    {searchName:"oatmeal and apple drink вівсяно-яблучний напій",nameId:13,categories:'drink additives',imageId:13,descriptionId:8},
    {searchName:"imun booster ім’юн бустер",nameId:14,categories:'drinks additives',imageId:14,descriptionId:9},
    {searchName:"collagen beauty complex колаген бьюті комплекс",nameId:15,categories:'drinks additives skin',imageId:15,descriptionId:10},
    {searchName:"liftoff ліфтоф",nameId:16,categories:'drinks',imageId:16,descriptionId:11},
    {searchName:"nightworks найтворкс",nameId:17,categories:'drinks additives',imageId:17,descriptionId:12},
    {searchName:"aloe classic herbal concentrate рослинний концентрат алое класичний",nameId:18,categories:'aloe drinks',imageId:18,descriptionId:13},
    {searchName:"herbal concentrate 50g трав’яний концентрат 50 г",nameId:19,categories:"drinks",imageId:19,descriptionId:14},
    {searchName:"herbal concentrate 100g трав’яний концентрат 100 г",nameId:20,categories:"drinks",imageId:20,descriptionId:14},
    {searchName:"beta hart бета харт",nameId:21,categories:"additives",imageId:21,descriptionId:15},
    {searchName:"herbalifeline max гербалайфлайн макс",nameId:22,categories:"additives",imageId:22,descriptionId:16},
    {searchName:"extracal advance екстракаль едванс",nameId:23,categories:"additives",imageId:23,descriptionId:17},
    {searchName:"vitamin and mineral complex for women formula 2 комплекс вітамінів та мінералів для жінок формула 2",nameId:24,categories:"additives",imageId:24,descriptionId:18},
    {searchName:"vitamin and mineral complex for men formula 2 комплекс вітамінів та мінералів для чоловіків формула 2",nameId:25,categories:"additives",imageId:25,descriptionId:19},
    {searchName:"microbiotic max мікробіотик макс",nameId:26,categories:"additives",imageId:26,descriptionId:20},
    {searchName:"new cellular activator новий клітинний активатор",nameId:27,categories:"additives",imageId:27,descriptionId:21},
    {searchName:"protein blend formula 3 протеїнова суміш формула 3",nameId:28,categories:"additives",imageId:28,descriptionId:22},
    {searchName:"cell at loss целл у лосс",nameId:29,categories:"additives",imageId:29,descriptionId:23},
    {searchName:"schizandra advance шизандра едванс",nameId:30,categories:"additives",imageId:30,descriptionId:24},
    {searchName:"thermo complete термо компліт",nameId:31,categories:"additives",imageId:31,descriptionId:25},
    {searchName:"herbalife 24 recovery shake restore strength відновлюючий коктейль herbalife 24 відновлення сили",nameId:32,categories:"sports",imageId:32,descriptionId:26},
    {searchName:"herbalife 24 protein shake formula 1 sport протеїновий коктейль herbalife 24 формула 1 Спорт",nameId:33,categories:"sports",imageId:33,descriptionId:27},
    {searchName:"herbal aloe shower gel гель для душу herbal aloe",nameId:34,categories:"aloe",imageId:34,descriptionId:28},
    {searchName:"herbal aloe strengthening conditioner зміцнюючий кондиціонер herbal aloe",nameId:35,categories:"aloe",imageId:35,descriptionId:29},
    {searchName:"herbal aloe strengthening shampoo зміцнюючий шампунь herbal aloe",nameId:36,categories:"aloe",imageId:36,descriptionId:30},
    {searchName:"herbal aloe body cream крем для тіла herbal aloe",nameId:37,categories:"aloe",imageId:37,descriptionId:31},
    {searchName:"herbal aloe softening body gel пом’якшуючий гель для тіла herbal aloe",nameId:38,categories:"aloe",imageId:38,descriptionId:32},
    {searchName:"anti aging serum антивікова сироватка",nameId:39,categories:"skin",imageId:39,descriptionId:33},
    {searchName:"eye gel with lifting effect гель для шкіри навколо очей з ефектом ліфтингу",nameId:40,categories:"skin",imageId:40,descriptionId:34},
    {searchName:"protective cream with spf 30 захисний крем з spf 30",nameId:41,categories:"skin",imageId:41,descriptionId:35},
    {searchName:"moisturizing cream for the skin around the eyes зволожуючий крем для шкіри навколо очей",nameId:42,categories:"skin",imageId:42,descriptionId:36},
    {searchName:"night renewing cream нічний оновлюючий крем",nameId:43,categories:"skin",imageId:43,descriptionId:37},
    {searchName:"cleansing mask based on clay and mint очищуюча маска на основі глини та м’яти",nameId:44,categories:"skin",imageId:44,descriptionId:38},
    {searchName:"aloe based cleansing gel очищуючий гель на основі алое",nameId:45,categories:"aloe skin",imageId:45,descriptionId:39},
    {searchName:"citrus-based cleansing gel очищуючий гель на основі цитрусових",nameId:46,categories:"skin",imageId:46,descriptionId:40},
    {searchName:"herbal toning lotion тонізуючий лосьйон на основі трав",nameId:47,categories:"skin",imageId:47,descriptionId:41},
    {searchName:"daily moisturizer щоденний зволожуючий крем",nameId:48,categories:"skin",imageId:48,descriptionId:42},
    {searchName:"berry scrub for instant skin renewal ягідний скраб для миттєвого відновлення шкіри",nameId:49,categories:"skin",imageId:49,descriptionId:43},
  ]

  return { 
      productsCatalog,
      productsPrograms,
      moreList,
      contacts,
      programCatalog,
      catalogSection,
      products
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