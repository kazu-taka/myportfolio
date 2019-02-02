<template>
  <div class="card-wrapper"> 
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img src='assets/images/app.image.png' />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Tsukutta!<i class="material-icons right">more_vert</i></span>
      <p><a href="https://tsukutta.herokuapp.com/">Tsukutta!</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Tsukutta!について<i class="material-icons right">close</i></span>
      <p>自分の作った料理を写真付きで投稿し、他のユーザーとシェアするWebアプリです。ログイン・ログアウト機能、rememberme機能、投稿機能・投稿一覧表示などを実装しました。</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">portfolio<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Ayaka's portfolio</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">portfolioについて<i class="material-icons right">close</i></span>
      <p>Vue.jsとrailsを用いてポートフォリオサイトを作成しました。Vue routerを使ってSPAにしました。デザインフレームワークはmaterializecssです。</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">time management app<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Coming soon</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">自分にとって毎日すべきタスクを見つけ出すアプリ<i class="material-icons right">close</i></span>
      <p>Vue.jsとrailsで時間管理マトリクスのアプリを作成中です。タスクに対して重要度と緊急度を与え、グラフで可視化させるアプリです。最も重要だが緊急度は低いタスクを発見することで人生を変える手助けをするアプリです。</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
</div>
  
  
</template>

<style scoped>

.card-wrapper{
  height: 500px;
  width: 1000px;
  padding-top: 40px;
}

.card{
  float:left;
 width: 40%;
 height: 40%;
 margin:20px;

}

</style>