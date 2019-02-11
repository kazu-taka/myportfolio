<template>
<div class="card-wrapper"> 
  <div class="cards">
  <div class="card">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">HTML & CSS</span>
      <p class="card-sub">基本的な知識をProgateで学習しました。</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Vue.js</span>
      <p class="card-sub">こちらのポートフォリオサイトを作成するため学習しました。単一ファイルコンポーネントやvuerouterを使用し、SPAの実装を行いました。</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Ruby</span>
      <p class="card-sub">オリジナルの画像投稿アプリを作成する過程で、学習しました。</p>
    </div>
  </div>
  
  <div class="card">
    
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Rubyonrails</span>
      <p class="card-sub">画像投稿アプリ作成において、ログイン・ログアウト機能、rememberme機能、一覧表示機能等を作成しました。</p>
    </div>
  </div>
  </div>
  
</div>
  
  
</template>

<style scoped>

.card-wrapper{
  padding-top: 40px;
  display: flex;
	align-items: center;
	justify-content: center;
}

.cards{
  width:900px;
}

.card{
  float:left;
 width: 400px;
 height: 150px;
 margin-left:20px;
  margin-right:10px;
}


.card-sub{
  text-align: left;
  padding:5px 5px;
  word-break: break-all;
}

</style>