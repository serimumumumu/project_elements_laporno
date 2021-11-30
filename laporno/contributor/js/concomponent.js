// ヘッダーハンバーガー

Vue.component('conheaders',{
  template:`
<header>
  <div class="header-left">
       <a href="contributor_top.html"><img src="../../img/logo.png" alt="ラポルノロゴ"></a>
  </div>
  <div class="header-right">
      <a href="">
      <img src="../../img/mail.png" alt="">
      </a>
      <div class="hmenu" id="hamburger_menu" @click="open=!open">
          <img src="../../img/conmenu.png" alt="" >
          <div class="hbtn" >
              <span class="line line_01" :class="{'btn_01':open }"></span>
              <span class="line line_03" :class="{'btn_03':open }"></span>
          </div>
          </div>
      <div class="menu" v-show="open">
          <p class="menu_user">投稿者のなまえ</p>
          <ul>
              <li><a href="contributor_mypage.html">マイページ</a></li>
              <li><a href="">News</a></li>
              <li><a href="contributor_project_top.html">プロジェクトTOP</a></li>
              <li><a href="contributor_auction_top.html">オークションTOP</a></li>
              <li><a href="contributor_gacha_top.html">ガチャTOP</a></li>
              <li><a href="">LP購入</a></li>
              <li><a href="contributor_mypage.html">お気に入り</a></li>
              <li><a href="contributor_mypage.html">設定</a></li>
              <li><a href="contributor_dummy.html">ダミーアカウント</a></li>
              <li><a href="">お問い合わせ</a></li>
              <li><a href="">ログアウト</a></li>
          </ul>
          <div class="sns">
              <a href="top.html"><img src="../../img/twitter.png" alt=""></a>
              <a href="#"><img src="../../img/instagram.png" alt=""></a>
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
// var header = new Vue ({
//   el:"#conheaders",
// });


// 検索バー

Vue.component('search', {
  template:`
  <div class="search">
      <form action="" method="">
          <img src="../../img/serch.png" alt="">
          <input type="text" placeholder="検索する" />
      </form>
  </div>
  `
})

// var Search = new Vue ({
//   el:'#search'
// })
// 検索バー終わり

// select-datetime
Vue.component('select-datetime', {
  template:`
  <div class="set-datetime">
    <input :name="date" class="date-select" type="date" placeholder="2021/05/11 12時">
    <select :name="time" class="time-select">
        <option value="0">0時</option>
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
        <option value="13">時</option>
        <option value="14">時</option>
        <option value="15">時</option>
        <option value="16">時</option>
        <option value="17">時</option>
        <option value="18">時</option>
        <option value="19">時</option>
        <option value="20">時</option>
        <option value="21">時</option>
        <option value="22">時</option>
        <option value="23">時</option>
    </select>
  </div>`,
  props:['date','time']
})

//回数ボーナスとは？モーダル
Vue.component ('about-modal', {
  props:['modal_title','modal_text','modal_text_example_up','modal_text_example_down','modal_text_example_down_bottom'],
  template:`
  <div class="overlay "> 
  <div class="overlay-over">
    <div class="cancel-btn" @click="$emit('close')">
      <span class="x x_1"></span>
      <span class="x x_2"></span>
    </div>
    <div class="modal_section ">
      <div class="overlay-overmain ">
        <div class="modal_section">
          <h6 class="modal_title_bonus">{{ modal_title }}<span>{{ modal_text }}</span></h6>
          <p class="modal_title_content_up">{{ modal_text_example_up }}<br><br></p>
          <p class="modal_title_content_down">{{ modal_text_example_down }}<br></p>
          <p class="modal_title_content_down">{{ modal_text_example_down_bottom }}</p>
          <span></span>
          </div>
        <button  id="btn-2" @click="$emit('close')">閉じる</button>
        <!-- ボタンを押したあとの表示 -->
      </div>
    </div>
  </div>
  </div>  `
})