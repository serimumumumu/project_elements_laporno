
Vue.component('headers',{
    template:`

<header>
    <div class="header-left">
         <a href="https://elements.laporno.fund/user/html/user_top.html" id="top"><img src="https://elements.laporno.fund/img/logo.png" alt="ラポルノロゴ"></a>
    </div>
    <div class="header-right">
        <a href="user_message_top.html">
        <img src="https://elements.laporno.fund/img/mail.png" alt="">
        </a>
        <div class="hmenu" id="hamburger_menu" @click="open=!open">
            <img src="https://elements.laporno.fund/img/menu.png" alt="" >
            <div class="hbtn" >
                <span class="line line_01" :class="{'btn_01':open }"></span>
                <span class="line line_03" :class="{'btn_03':open }"></span>
            </div>
            </div>
        <div class="menu" v-show="open">
            <p class="menu_user">ユーザーの名前ユーザーの名</p>
            <ul>
                <li><a hewf="https://elements.laporno.fund/user/html/user_mypage.html">マイページ</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_campaign_index.html">キャンペーンページ</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_news.html">お知らせ</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_project_top.html">プロジェクトTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_auction_top.html">オークションTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_gacha_top.html">ガチャTOP</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_lp.html">LP購入</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_mypage.html">お気に入り</a></li>
                <li><a hewf="https://elements.laporno.fund/user/html/user_mypage.html">設定</a></li>
                <li><a hewf="user_inquiry.html">お問い合わせ</a></li>
                <li><a href="">ログアウト</a></li>
            </ul>
            <div class="sns">
                <a href="user_top.html"><img src="https://elements.laporno.fund/img/twitter.png" alt=""></a>
                <a href="#"><img src="https://elements.laporno.fund/img/instagram.png" alt=""></a>
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