<template>
    <div>
      <div class="landing-home-page"></div>
       <div class="navegated-bar">
        <div class="nav-content">
        <div class="s-title">
          <router-link to="/" class="title">القرآن الكريم</router-link>
        </div>
        <div class="nav">
          <ul dir="rtl" class="ul">
            <li>الصفحة الرئيسية</li>
            <li>المفضلة</li>
            <router-link to="/contact">الاتصال بنا</router-link>
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
          <h2>بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>
          <h2>In The Name of Allah, The Most Beneficent, The Most Merciful</h2>
        </div>
      </div> 
      <div class="container-of-a-readers">
        <div class="c-readers-title"><h1 class="readers-title">القرآء</h1></div>
        <div class="container-of-readers">
         <router-link to="/surah" class="reader" v-for="reader in readers" @click.native="readerfun(reader.reader_url, reader.reader_name)"  :key="reader.reader_name">
           <h3 class="reader-name-style">{{reader.reader_name}}{{readerpara}}</h3>
         </router-link>
        </div>
      </div>
      <div class="footer">
        <h4 class="footer-content">جميع الحقوق © محفوظة</h4>
      </div>
    </div>
</template>
<script>
export default {
computed:{
  readerurl(){
    return this.$store.state.readerurl,
    this.$store.state.readername
  }
},
methods :{
   readerfun: function(readerurlpara,readernamepara){
     this.$store.state.readerurl=readerurlpara;
     this.$store.state.readername=readernamepara;
   }
},
data: function(){
  return{
    readers:[
      {
        reader_name:"عبد الباسط عبد الصمد",
        reader_url:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/"
      },
      {
        reader_name:"محمود الرفاعي",
        reader_url:"https://server11.mp3quran.net/mrifai/"
      },
      {
        reader_name:"محمد صديق المنشاوي",
        reader_url:"https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/"
      },
      {
        reader_name:"محمد محمود الطبلاوي",
        reader_url:"https://server12.mp3quran.net/tblawi/"
      },
      {
        reader_name:"سعود الشريم",
        reader_url:"https://server7.mp3quran.net/shur/"
      },
      {
        reader_name:"محمد ايوب",
        reader_url:"https://server8.mp3quran.net/ayyub/"
      },
      {
        reader_name:"مصطفى إسماعيل",
        reader_url:"https://server8.mp3quran.net/mustafa/"
      },
      {
        reader_name:"عبد الحكم صابر",
        reader_url:"https://server12.mp3quran.net/hkm/"
      },
      {
        reader_name:"محمود خليل الحصري",
        reader_url:"https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/"
      },
      {
        reader_name:"صلاح بو خاطر",
        reader_url:"https://server8.mp3quran.net/bu_khtr/"
      },
      {
        reader_name:"عبدالولي الأركاني",
        reader_url:"https://server6.mp3quran.net/arkani/"
      },
      {
        reader_name:"عبدالرحمن السديس",
        reader_url:"https://server11.mp3quran.net/sds/"
      },
      {
        reader_name:"ياسر الدوسري",
        reader_url:"https://server11.mp3quran.net/yasser/"
      },
      {
        reader_name:"هيثم الجدعاني",
        reader_url:"https://server16.mp3quran.net/hitham/Rewayat-Hafs-A-n-Assem/"
      },
      {
        reader_name:"ماهر المعيقلي",
        reader_url:"https://server12.mp3quran.net/maher/"
      },
      {
        reader_name:"إسلام صبحي",
        reader_url:"https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/"
      },
      {
        reader_name:"أحمد بن علي العجمي",
        reader_url:"https://server10.mp3quran.net/ajm/"
      },{
        reader_name:"أحمد الحذيفي",
        reader_url:"https://server8.mp3quran.net/ahmad_huth/"
      },
      {
        reader_name:"سعد الغامدي",
        reader_url:"https://server7.mp3quran.net/s_gmd/"
      },
      {
        reader_name:"عمر القزابري",
        reader_url:"https://server9.mp3quran.net/omar_warsh/"
      },
      {
        reader_name:"رعد محمد الكردي",
        reader_url:"https://server6.mp3quran.net/kurdi/"
      },
      {
        reader_name:"هزاع البلوشي",
        reader_url:"https://server11.mp3quran.net/hazza/"
      },
      {
        reader_name:"محمود علي البنا",
        reader_url:"https://server8.mp3quran.net/bna/Almusshaf-Al-Mojawwad/"
      },
      {
        reader_name:"محمد رفعت",
        reader_url:"https://server14.mp3quran.net/refat/"
      },
      {
        reader_name:"العيون الكوشي",
        reader_url:"https://server11.mp3quran.net/koshi/"
      },
      {
        reader_name:"أحمد بن علي العجمي",
        reader_url:"https://server10.mp3quran.net/ajm/"
      },
      {
        reader_name:"أحمد صابر",
        reader_url:"https://server8.mp3quran.net/saber/"
      },
      {
        reader_name:"عبدالباسط ( رواية ورش )",
        reader_url:"https://server7.mp3quran.net/basit/Rewayat-Warsh-A-n-Nafi/"
      },

      {
        reader_name:"علي الحذيفي",
        reader_url:"https://server9.mp3quran.net/hthfi/"
      },
      {
        reader_name:"الحصري ( برواية ورش )",
        reader_url:"https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/"
      },
      {
        reader_name:"شعبان الصياد",
        reader_url:"https://server11.mp3quran.net/shaban/"
      },
      {
        reader_name:"أحمد نعينع",
        reader_url:"https://server11.mp3quran.net/ahmad_nu/"
      },
      {
        reader_name:"المنشاوي ( برواية حفص )",
        reader_url:"https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/"
      },

      {
        reader_name:"علي البنا ( برواية حفص )",
        reader_url:"https://server8.mp3quran.net/bna/"
      },
      {
        reader_name:"محمود عبدالحكم",
        reader_url:"https://server16.mp3quran.net/m_abdelhakam/Rewayat-Hafs-A-n-Assem/"
      },
      {
        reader_name:"عبد الحميد احساين",
        reader_url:"https://ia601203.us.archive.org/15/items/114-sora-abd-alhameed-ahsayn--quran-warsh-64kb/"
      },





   ]
  }
} 
}
</script>
<style scoped>
.landing-home-page{
   height:500px;
   background-image: url(https://images.unsplash.com/photo-1590108589108-3600131de843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1524&q=80);
}
.container-of-home-ayah{
  height: 500px;
}.home-page-c-ayah h2 {
    font-size: 35px;
}
.container-of-a-readers{
    position: absolute;
    top:500px;
    width: 100%;
}.c-readers-title{
    width: 100%;
    height:70px;
}.readers-title{
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%,0%);
    font-size: 28px;
    color:black;
    font-family: cairo-light;
    border-bottom: 2px solid black;
}.container-of-readers{
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 80%;
    height:400px;
}.reader{
    display: inline-block;
    padding: 20px;
    text-align: center;
    width:24%;
    border-radius: 3px;;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-top:15px;
    cursor: pointer;
    box-shadow: 0px 0px 9px 1px #b7b7b7;
}.reader-name-style{
    font-size: 17px;
    color:black;
    font-family: cairo-light;
}.reader{
    text-decoration: none;
}.footer{
    position: absolute;
    top: 2000px;
    right: 0px;
    width: 100%;
    height: 50px;
    background-color: #2c2c2cd1;
}.footer-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:white;
    font-size: 13px;
    font-family: cairo-light;
}

@media(max-width:1060px){
    .reader{
      width:49%;
    }.footer{
      top: 2200px;
    }
}
@media(max-width:560px){
    .reader{
      width:99%;
    }.home-page-c-ayah h2{
      font-size:30px;
    }.readers-title{
      font-size:25px;
    }.footer{
      top:3750px;
    }
}@media(max-width:500px){
    .readers-title{
        font-size: 19px;
    }.title {
      font-size: 25px;
    }.home-page-c-ayah {
    width: 75%;
    }
}
</style>
