
Vue.component('userinfo',{
    template:`
    <div class="overlay "> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain color1">
        <h6 class="modal_title">ユーザー情報</h6>
        <div>
        <span class="subtitle">ユーザー名前</span>
        <p class="modal_p">ユーザーの名前ユーザーの名前</p>
        </div>
        <div>
        <span class="subtitle">本名</span>
        <p class="modal_p">羅保野　あつし</p>
        </div>
        <div>
        <span class="subtitle">フリガナ</span>
        <p class="modal_p">ラホノ　アツシ</p>
        </div>
        <div>
        <span class="subtitle">メールアドレス</span>
        <p class="modal_p">laporno.fanfanfanfanfanfan@gmail.com</p>
        </div>
        <div>
        <span class="subtitle">電話番号</span>
        <p class="modal_p">090-7777-5555</p>
        </div>
        <div>
        <span class="subtitle">住所</span>
        <p class="modal_p">〒090-7777-5555<br>東京都渋谷区円山町8-4-16
        新太宗丸山ビル７階インター</p>
        </div>
        <div>
        <span class="subtitle">送り主</span>
        <p class="modal_p">投稿者法人名</p>
        </div>
        <div>
        <span class="subtitle">郵便局留め先</span>
        <p class="modal_p">郵便局の支店の名前</p>
        </div>
        <div>
        <span class="subtitle">ヤマト留め先</span>
        <p class="modal_p">ヤマトの支店の名前</p>
        </div>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
        </div>
          </div>
      </div>
    </div>`
  
  })