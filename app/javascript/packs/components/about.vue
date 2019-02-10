<template>
  <div class="card-wrapper"> 
  
  <div class="card">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">About me</span>
      <div class="table">
        <tr><th>名前</th><td>Ayaka</td></tr>
        <tr><th>大学</th><td>千葉大学（理学部化学科）</td></tr>
        <tr><th>現在の職業</th><td>某官公庁での事務職（補助金交付事務、契約事務、関係団体との連携協定の締結等）</td></tr>
        <tr><th>資格</th><td>TOEIC825点、高校教員免許（化学）、ファイナンシャルプランナー３級</td></tr>
        <tr><th>この先挑戦してみたいこと</th><td>人々が日々使うアプリを通して人々の生活を少しでもラクにしたり、日々の生活を充実させるようなWebサイトを作りたいです。</td></tr>
        <tr><th>なりたいエンジニア像</th><td>常に向上心を持ち、勉強しつづけ、新しい技術にも興味をもって取り組むエンジニアです。</td></tr>
      </div>
      
      <div class="sns-wrapper">
        <span class="card-title activator grey-text text-darken-4">more details</span>
        <div class="sns-content">
          <div class="sns">
            <a href="https://github.com/ayachika"><i class="fa fa-github my-github fa-4x"></i></a>
          </div>
          
          <div class="sns">
            <a href="https://twitter.com/_ayk_study?lang=ja"><i class="fa fa-twitter my-twitter fa-4x"></i></a>
          </div>
          
          <div class="sns">
            <a href="https://ayk-study.hatenadiary.com/archive"><i class="fa fa-book my-blog fa-4x"></i></a>
          </div>
          
          <div class="sns">
            <a href="https://qiita.com/_ayk_study">
              <span class="fa-stack">
              <i class="fa fa-square my-square fa-stack-2x"></i>
              <i class="fa fa-search my-search fa-stack-1x fa-inverse fa-3x"></i>
              </span>
            </a>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  </div>
</template>



<style scoped>
.card-wrapper{
  padding-top: 40px;
  
}

.card{
margin: auto;
  text-align: center;
 width: 60%;
 height: 40%;
 
}


.table{
  padding-top:10px;
  padding-bottom:10px;
}

.table td{
  width:60%;
}

.sns-content{
  display: flex;
	align-items: center;
	justify-content: center;
  padding-top:10px;
}

.sns{
  float:left;
  margin:10px;
}

.my-github{
  color:#262626;
  
}

.my-twitter{
  color:#00ccff;
  
}


.my-blog{
  color:#990000;
}


.my-square{
  color:#00cc00;
  font-size:45px;
  
}

my-search{
  padding-bottom:5px;
}




</style>