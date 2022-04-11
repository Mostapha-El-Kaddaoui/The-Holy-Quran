<template>
    <div id="app">
      <div class="landing-home-page"></div>
       <div class="navegated-bar">
        <div class="nav-content">
        <div class="s-title">
          <router-link to="/" class="title">القرآن الكريم</router-link>
        </div>
        <div class="nav">
          <ul dir="rtl" class="ul">
            <router-link to="/">الصفحة الرئيسية</router-link>
            <li>المفضلة</li>
            <li>الاتصال بنا</li>
          </ul>
        </div>
        <div class="n-icons">
          <i class="far fa-heart"></i>
          <i class="fas fa-bars"></i>
        </div>
        </div>
      </div>
     <div class="container-of-home-ayah">
        <div class="home-page-c-ayah">
          <h2>وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا لَعَلَّكُمْ تُرْحَمُونَ</h2>
          <h2>So when the Qurān is recited, then listen to it and pay attention that you may receive mercy</h2>
         </div>
         <div class="surah-info">
           <h5 class="surah-info-container">القارئ {{this.$store.state.readername}}<i class="fas fa-chevron-left"></i>{{this.surahnamev}}</h5>
         </div>
      </div>
      <div class="container-surah">
         <div class="container-surah-title"><h1>سور القرآن الكريم</h1></div>
         <div class="container-v-surah">
           <div class="surah" v-for="surah in data.data" @click="getsurah(surah.index,surah.titleAr)" :key="surah.titleAr"><h3 class="surah-name-style">{{surah.titleAr}}</h3></div>
         </div>
      </div>
      <audio class="audio-player" id="audio-player" :src="source" controls></audio>
    </div>
</template>
<script>
import axios from 'axios'
export default{
computed:{
  readerurl(){
    return this.$store.state.readerurl,
    this.$store.state.readername
  }
},
data: function(){
  return{
    data:"",
    source:"",
    surahnamev:""
  }
},
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json')
      .then(response => (this.data = response))
  },
  methods:{
    getsurah: function(surahindex,surahname){
      this.source=this.$store.state.readerurl+surahindex+".mp3";
      this.surahnamev="سورة"+" "+surahname;
    }
  },
  
};
</script>
<style scoped>
.landing-home-page{
   height:400px;
   background:url(https://i.pinimg.com/564x/2a/98/bd/2a98bda110bafa5adfbc809f3a533f99.jpg) left;
}.container-of-home-ayah{
  height: 400px;
}.home-page-c-ayah h2{
    font-size: 30px;
}.container-surah {
  position: absolute;
  top:400px;
  right: 0px;
  width:100%;
  height: 700px;
}.container-surah-title{
    width: 100%;
    height: 60px;
}.container-surah-title h1{
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%,0%);
    font-size: 20px;
    color: black;
    font-family: cairo-light;
    border-bottom: 2px solid black;
}.container-v-surah{
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 80%;
    height: 2625px;
    direction: rtl;
}.surah{
    display: inline-block;
    padding-right: 10px;
    text-align: right;
    width: 24%;
    border-radius: 3px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 9px 1px #b7b7b7;
}.surah-name-style{
    font-size: 35px;
    color:black;
    font-family: 'thuluth-decorated';
    font-weight: 100;
}.audio-player {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background-color: #f1f3f4;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 1px #929292;
    outline: none;
}.ul a{
    margin: 0px;
    margin-left: 35px;
    color: white;
    cursor: pointer;
    font-family: 'cairo';
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
}.surah-info{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 80px;
}.surah-info-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:white;
    font-size: 15px;
    font-family: 'cairo-light';
    width: 100%;
    text-align: center;
}.surah-info-container i {
    color:white;
    font-size:15px;
    margin: 8px;
}
@media(max-width:900px){
    .surah{
        width: 49%;
    }.container-v-surah{
      height: 5040px;
    }
}@media(max-width:700px){
    .home-page-c-ayah h2{
      font-size:25px;
    }.surah-name-style{
    font-size: 30px;
    }
}@media(max-width:600px){
    .home-page-c-ayah h2{
      font-size:25px;
    }.surah-name-style{
    font-size: 30px;
    }
}@media(max-width:500px){
    .surah{
        width: 99%;
    }.home-page-c-ayah h2{
      font-size:21px;
    }.container-surah-title h1{
        font-size: 18px;
    }.title {
      font-size: 25px;
    }.container-v-surah{
      height: 8760px;
    }.home-page-c-ayah{
      width: 75%;
    }
}
</style>

