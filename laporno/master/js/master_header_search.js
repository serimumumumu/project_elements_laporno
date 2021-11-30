Vue.component('search',{
    template:`
    <div class="search">
        <form action="" method="">
            <img src="https://elements.laporno.fund/img/serch.png" alt="">
            <input  type="text" placeholder="検索する" />
        </form>
    </div>
    `
  })

  // ヘッダーハンバーガー

Vue.component('masheaders',{
    template:`
  
  <header>
    <div class="header-left">
         <a hewf="https://elements.laporno.fund/master/html/master_top.html"><img src="https://elements.laporno.fund/img/logo.png" alt="ラポルノロゴ"></a>
    </div>
    <div class="header-right">
      <a href="">
      <img src="https://elements.laporno.fund/img/mail.png" alt="">
      </a>
      <div class="hmenu" id="hamburger_menu" @click="open=!open">
        <img src="../../img/conmenu.png" alt="" >
        <div class="hbtn" >
          <span class="line line_01" :class="{'btn_01':open }"></span>
          <span class="line line_03" :class="{'btn_03':open }"></span>
        </div>
      </div>
      <div class="menu" v-show="open">
        <p class="menu_user">マスター専用</p>
        <ul>
          <li><a hewf="https://elements.laporno.fund/master/html/usertop.html">ユーザー一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/contributortop.html">投稿者一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/masterhtml/actresstop.html">女優一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_project_top.html">プロジェクト一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_project_support_top.html">支援一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_auction_top.html">オークション一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/auchbidtop.html">落札者一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_gacha_top.html">ガチャ一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_news_top.html">News一覧</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/buylp.html">LP表</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/master_profit_top.html">売上表</a></li>
          <li><a hewf="https://elements.laporno.fund/master/html/dummytop.html">ダミーアカウント一覧</a></li>
          <li><a href="">ログアウト</a></li>
        </ul>
      </div>
      </div>
    </header>
  
    `,
    data: function() {
        return{
          open:false
        }
      },
  
  })
  