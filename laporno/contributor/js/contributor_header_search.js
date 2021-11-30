// ヘッダーハンバーガー

Vue.component('conheaders',{
    template:`
  
  <header>
    <div class="header-left">
         <a href="contributor_top.html"><img src="https://elements.laporno.fund/img/logo.png" alt="ラポルノロゴ"></a>
    </div>
    <div class="header-right">
        <a href="https://elements.laporno.fund/contributor/html/contributor_message.html">
        <img src="https://elements.laporno.fund/img/mail.png" alt="">
        </a>
        <div class="hmenu" id="hamburger_menu" @click="open=!open">
            <img src="https://elements.laporno.fund/img/conmenu.png" alt="" >
            <div class="hbtn">
                <span class="line line_01" :class="{'btn_01':open }"></span>
                <span class="line line_03" :class="{'btn_03':open }"></span>
            </div>
            </div>
        <div class="menu" v-show="open">
            <p class="menu_user">投稿者のなまえ</p>
            <ul>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_mypage.html">マイページ</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_news.html">News</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_project_top.html">プロジェクトTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_auction_top.html">オークションTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_gacha_top.html">ガチャTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_lp.html">LP購入</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_mypage.html">お気に入り</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_mypage.html">設定</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_dummy.html">ダミーアカウント</a></li>
                <li><a hewf="https://elements.laporno.fund/contributor/html/contributor_inquiry.html">お問い合わせ</a></li>
                <li><a href="">ログアウト</a></li>
            </ul>
            <div class="sns">
                <a hewf=""><img src="https://elements.laporno.fund/img/twitter.png" alt=""></a>
                <a hewf=""><img src="https://elements.laporno.fund/img/instagram.png" alt=""></a>
            </div>
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
  
  // 検索バー
  
  Vue.component('search', {
    template:`
    <div class="search">
        <form action="" method="">
            <img src="https://elements.laporno.fund/img/serch.png" alt="">
            <input type="text" placeholder="検索する" />
        </form>
    </div>
    `
  })
  
  
  // select-datetime
  Vue.component('select-datetime', {
    template:`
    <div class="set-datetime">
      <input :name="date" class="date-select" type="date" placeholder="2021/05/11 12時">
      <select :name="time" class="time-select">
          <option value="1">1時</option>
          <option value="2">2時</option>
          <option value="3">3時</option>
          <option value="4">4時</option>
          <option value="5">5時</option>
          <option value="6">6時</option>
          <option value="7">7時</option>
          <option value="8">8時</option>
          <option value="9">9時</option>
          <option value="10">10時</option>
          <option value="11">11時</option>
          <option value="12">12時</option>
      </select>
    </div>`,
    props:['date','time']
  })