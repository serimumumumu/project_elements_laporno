// 称号モーダル
Vue.component('prizeselectmodal',{
    template:`
    <div class="overlay">
        <div class="overlay-over">
        <div class="cancel-btn" @click="$emit('close')">
            <span class="x x_1"></span>
            <span class="x x_2"></span>
        </div>
        <!-- モーダルの中身 -->
            <div class="overlay-overmain">
                <div class="modal_section">
                <h6 class="modal_title">称号を選ぶ</h6>
                <p class="prize_title">所持している称号</p>
                <div class="prize_index">
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランク</p>
                    </article>
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキン</p>
                    </article>
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキング</p>
                    </article>
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランク</p>
                    </article>
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキン</p>
                    </article>
                    <article class="prize_index_article">
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキング</p>
                    </article>
                </div>
                <p class="prize_choice_title">選択した称号</p>
                <div class="prize_index">
                    <article class="prize_index_article choice">
                         <span class="x_ x_1_"></span>
                         <span class="x_ x_2_"></span>
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランク</p>
                    </article>
                    <article class="prize_index_article choice">
                         <span class="x_ x_1_"></span>
                         <span class="x_ x_2_"></span>
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキン</p>
                    </article>
                    <article class="prize_index_article choice">
                         <span class="x_ x_1_"></span>
                         <span class="x_ x_2_"></span>
                        <img src="../../img/patoran1.png" alt="">
                        <p>パトロンランキング</p>
                    </article>
                </div>
                <button  id="btn-2" @click="$emit('close')">戻る</button>
                </div>
            <!-- ボタンを押したあとの表示終わり -->
            </div>
        </div>
    </div>
</div>
    `
})

// パトロンランクモーダル
Vue.component ('patronrank',{
    template:`
    <div class="overlay">
     <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <!-- モーダルの中身 -->
      <div class="overlay-overmain">
         <div class="modal_section2">
            <h6 class="modal_title">パトロンランクとは</h6>
            <p class="modal_p_r">パトロンランクは<br>
                ・支援実績<br>
                ・落札実績<br>
                によって付与されるランク制度のこと
            </p>
            <img class="modal_img" src="../../img/popup/patoranking.png" alt="" >
            <button  id="btn-2" @click="$emit('close')">戻る</button>
         </div>
      </div>
     </div>
    </div>
  </div>
`})

// ユーザー名変更
Vue.component ('editname',{
    template:`
    <div class="overlay">
        <div class="overlay-over">
            <div class="cancel-btn" @click="$emit('close')">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
            </div>
        <!-- モーダルの中身 -->
            <div class="overlay-overmain">
                <div class="modal_section2">
                    <h6 class="modal_title">ユーザー名を変更する</h6>
                    <div class="editnamemodal">
                        <span class="subtitle">現在のユーザー名</span>
                        <p class="modal_p">ユーザーのお名前</p>
                        <img src="../../img/arrowdown.png"> 
                        <span class="subtitle">変更後のユーザー名</span>
                        <input class="modal_input" placeholder="ユーザーのお名前">
                    </div>
                    <button  id="btn-2" @click="$emit('close')">変更する</button>
                </div>
            </div>
        </div>
    </div>
 
`})

// 投稿者紹介文変更
Vue.component ('editconintro',{
    template:`
    <div class="overlay">
        <div class="overlay-over">
            <div class="cancel-btn" @click="$emit('close')">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
            </div>
        <!-- モーダルの中身 -->
            <div class="overlay-overmain">
                <div class="modal_section">
                    <h6 class="modal_title">紹介文を変更する</h6>
                    <div class="editnamemodal">
                        <span class="subtitle">現在の紹介文</span>
                        <p class="modal_p">現在の紹介文現在の紹介文現在の紹介文現在の紹介文現在の紹介文現在の紹介文現在の紹介文現在の紹介文現在の紹介文</p>
                        <img src="../../img/arrowdown.png"> 
                        <span class="subtitle">変更後の紹介文</span>
                        <textarea class="modal_input" placeholder="変更後の紹介文" rows="4" ></textarea>
                    </div>
                    <button  id="btn-2" @click="$emit('close')">変更する</button>
                </div>
            </div>
        </div>
    </div>
 
`})

// アイコン画像変更
Vue.component ('editimg',{
    template:`
    <div class="overlay">
     <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <!-- モーダルの中身 -->
      <div class="overlay-overmain">
         <div class="modal_section2">
            <h6 class="modal_title">アイコンを変更する</h6>
            <div class="editimgmodal">
                <div class="">
                    <select class="editimg" name="" id="">
                    <option value="X">選択してください</option>
                    <option value="A">画像ファイルから選択</option>
                    <option value="B">カメラ</option>
                    <option value="C">フォルダ</option>
                    </select>
                </div>
                <img src="../../img/demoimg.png"></img>

            </div>
            <button  id="btn-2" @click="$emit('close')">変更する</button>
         </div>
      </div>
     </div>
    </div>
  </div>
`})

// プロフィールエリアのJS
var profile = new Vue ({
el:"#profile",
    data: function(){
        return {
            showContentPrize:false,
            showContentRank:false,
            editpen:false,
            showContentEditName:false,
            showContentEditImg:false,
            }
    },
    methods: {
        openModalPrize(){
            this.showContentPrize = true;
        },
        openModalRank(){
            this.showContentRank = true;
        },
        profileEdit(){
            this.editpen =!this.editpen;
        },
        openModalEditName(){
            this.showContentEditName = true;
            this.editpen = false;
        },
        openModalEditImg(){
            this.showContentEditImg = true;
            this.editpen = false;
        },
        }    
})

// リターントグルボタン
Vue.component ('togbutton1',{
    template:`
    <div class="" v-cloak>
      <div >
        <div class="outer">
          <div>タイトル</div>
          <img :class="{'_state_open': isOpened }" @click="accordingToggle()" src="../../img/arrowdown.png" alt="" >
        </div>
      </div>
      <div class="" v-if="isOpened"><slot name="incontent">ここに押したもの</slot>
      </div>
    </div>
    `,
    data() {
        return {
          isOpened: false
        };
      },
      methods: {
        accordingToggle: function(){
          this.isOpened = !this.isOpened;
        },
      }
})

// LP使用履歴、購入履歴とグルボタン
Vue.component ('togbutton4',{
  template:`
  <div class="" v-cloak>
    <div >

    <div  class="outer">
        <slot name="outers"></slot>
        
        <img class="more-btn" :class="{'_state_open': isOpened }" @click="accordingToggle()" src="../../img/arrowdown.png" alt="" >
   </div>
  </div>
       <div class="" v-if="isOpened"><slot name="incontent">ここに押したもの</slot>
    </div>
  </div>
  `,
  data() {
      return {
        isOpened: false
      };
    },
    methods: {
      accordingToggle: function(){
        this.isOpened = !this.isOpened;
      },
    }
})

// ガチャ景品とグルボタン
Vue.component('gachafreebie',{
    template:`
    <div class="gacha_outer color0">
        <h4 class="gacha_outer_maintitle">タイトル</h4>
        <div class="gacha_outer_detail">
            <div class="detail_img" >
                <img src="../../img/demoimg.png" alt="" >
            </div>
            <div class="detail_index">
                <p><span class="subtitle">景品数</span>12個</p>
                <p><span class="subtitle">使用LP</span>8800lp<span class="discount_span">(10%割引コード使用)</span></p>
                <p><span class="subtitle">投稿者</span>桃太郎映像 </p>
            </div>
            <div>
                    <img class=""  :class="{'_state_open': isOpened }" @click="accordingToggle()" src="../../img/arrowdown.png" alt=""  >
            </div>
        </div>
        <div class="content-sub" v-if="isOpened">
            <div class="content-sub-left">
                <div class="content-subtitle ">景品タイトル</div>
                <img src="../../img/demoimg.png" alt="">
            </div>
            <div class="content-sub-right">
                <div class="date color3">発送済み</div>
                <div class="batch">x3</div>
                <div class="detail-button-area">
                    <div class="button color3" @click="openModal">詳細
                        </div>
                    <gachasendinfobank v-show="showContent" @close="showContent = false">
                    </gachasendinfobank>
                </div>
            </div>
        </div>
    </div>`,
data() {
    return {
      isOpened: false,
      showContent:false
    };
  },
  methods: {
    accordingToggle: function(){
      this.isOpened = !this.isOpened;
    },
    openModal:function(){
        this.showContent = true;
    },
    closeModal:function(){
        this.showContent = false;
    }
  }

})

// ユーザーページのガチャ景品トグル
Vue.component('gachafreebieuser',{
    template:`
    <div class="gacha_outer">
        <h4 class="gacha_outer_maintitle">タイトル</h4>
        <div class="gacha_outer_detail">
            <div class="detail_img" >
                <img src="../../img/demoimg.png" alt="" >
            </div>
            <div class="detail_index">
                <p><span class="subtitle">景品数</span>12個</p>
                <p><span class="subtitle">使用LP</span>8800lp</p>
                <p><span class="subtitle">投稿者</span>桃太郎映像 </p>
            </div>
            <div>
                    <img class=""  :class="{'_state_open': isOpened }" @click="accordingToggle()" src="../../img/arrowdown.png" alt=""  >
            </div>
        </div>
        <div class="content-sub" v-if="isOpened">
            <div class="content-sub-left">
                <div class="content-subtitle ">景品タイトル</div>
                <img src="../../img/demoimg.png" alt="">
            </div>
            <div class="content-sub-right">
                <div class="date color3">発送済み</div>
                <div class="batch">x3</div>
            </div>
        </div>
    </div>`,
data() {
    return {
      isOpened: false,
      showContent:false
    }
  },
  methods: {
    accordingToggle: function(){
      this.isOpened = !this.isOpened;
    },
    openModal:function(){
        this.showContent = true;
    },
    closeModal:function(){
        this.showContent = false;
    }
  }

})

// リターンの配送情報（カード決済）
Vue.component('returnsendinfocard',{
  template:`
 
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
                  <div class="modal_section">
                      <h6 class="modal_title">リターン詳細</h6>
                      <div>
                          <span class="subtitle">リターンタイトル</span>
                          <p class="modal_p">リターン景品の名前リターン景品の名前</p>
                      </div>
                      <div class="modal_colum">
                          <div class="modal_colum_div">
                              <span class="subtitle">支援金額</span>
                              <p class="modal_p">¥15,500</p>
                          </div>
                          <div class="modal_colum_div">
                              <span class="subtitle">決済方法</span>
                              <p class="modal_p">クレジットカード</p>
                          </div>
                      </div>
                      <div class="modal_colum">
                          <div class="modal_colum_div">
                              <span class="subtitle">お支払状況</span>
                              <p class="modal_p">入金済</p>
                          </div>
                          <div class="modal_colum_div">
                              <span class="subtitle">決済日</span>
                              <p class="modal_p">2020/02/22</p>
                          </div>
                      </div>
                      <div>
                          <span class="subtitle">メモ</span>
                              <p class="modal_p">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</p>
                      </div>
                      <div class="modal_colum">
                      <div class="modal_colum_div">
                      <span class="subtitle">伝票番号</span>
                      <p class="modal_p">12345678901234</p>
                      </div>
                      <div class="modal_colum_div">
                      <span class="subtitle">配送業者</span>
                      <p class="modal_p">ヤマト運輸</p>
                      </div>
                      </div>
                      <div class="modal_button">
                      <a href="https:/qiita.com/SUGISHIA/items/d4d8b48be48767c17815">
                      配達情報はこちら</a>
                      </div>
                      <h5　class="modal_section_h5">質問の回答</h5>
                      <div>
                          <span class="subtitle">希望の色</span>
                              <p class="modal_p">青</p>
                      </div>
                      <div>
                          <span class="subtitle">希望のサイズ</span>
                              <p class="modal_p">LL</p>
                      </div>
                  </div>
                  <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
</div>`,

})

// リターン配送情報（銀行振込）
Vue.component('returnsendinfobank',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
                  <div class="modal_section">
                      <h6 class="modal_title">リターン詳細</h6>
                      <div>
                          <span class="subtitle">リターンタイトル</span>
                          <p class="modal_p">リターン景品の名前リターン景品の名前</p>
                      </div>
                      <div class="modal_colum">
                          <div class="modal_colum_div">
                              <span class="subtitle">支援金額</span>
                              <p class="modal_p">¥15,500</p>
                          </div>
                          <div class="modal_colum_div">
                              <span class="subtitle">決済方法</span>
                              <p class="modal_p">銀行振込</p>
                          </div>
                      </div>
                      <div class="modal_colum">
                          <div class="modal_colum_div">
                              <span class="subtitle">お支払状況</span>
                              <p class="modal_p">未入金</p>
                          </div>
                          <div class="modal_colum_div">
                              <span class="subtitle">決済予定日</span>
                              <p class="modal_p">2021/08/31</p>
                          </div>
                      </div>
                      <div>
                          <span class="subtitle">メモ</span>
                              <p class="modal_p">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</p>
                      </div>
                      <div class="modal_colum">
                      <div class="modal_colum_div">
                      <span class="subtitle">伝票番号</span>
                      <p class="modal_p">12345678901234</p>
                      </div>
                      <div class="modal_colum_div">
                      <span class="subtitle">配送業者</span>
                      <p class="modal_p">ヤマト運輸</p>
                      </div>
                      </div>
                      <div class="modal_button">
                      <a href="https:/qiita.com/SUGISHIA/items/d4d8b48be48767c17815">
                      配達情報はこちら</a>
                      </div>
                      <h5　class="modal_section_h5">質問の回答</h5>
                      <div>
                          <span class="subtitle">希望の色</span>
                              <p class="modal_p">青</p>
                      </div>
                      <div>
                          <span class="subtitle">希望のサイズ</span>
                              <p class="modal_p">LL</p>
                      </div>
                  </div>
                  <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
        </div>
        
        </div>`,
})
// オークション品配送情報（銀行振込）
Vue.component('auchsendinfobank',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
          <div class="modal_section">
    
          <h6 class="modal_title">落札詳細</h6>
          <div>
              <span class="subtitle">オークション名</span>
                  <p class="modal_p">オークション名オークション名オークション名</p>
          </div>
          <div class="modal_colum">
          <div class="modal_colum_div">
              <span class="subtitle">支援金額</span>
              <p class="modal_p">¥15,500</p>
          </div>
          <div class="modal_colum_div">
              <span class="subtitle">決済方法</span>
              <p class="modal_p">クレジットカード</p>
                </div>
            </div>
            <div class="modal_colum">
                <div class="modal_colum_div">
                    <span class="subtitle">お支払状況</span>
                    <p class="modal_p">入金済</p>
                </div>
                <div class="modal_colum_div">
                    <span class="subtitle">決済日</span>
                    <p class="modal_p">2020/02/22</p>
                </div>
            </div>
          <div>
              <span class="subtitle">メモ</span>
                  <p class="modal_p">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</p>
          </div>
          <div class="modal_colum">
              <div class="modal_colum_div">
                  <span class="subtitle">伝票番号</span>
                  <p class="modal_p">12345678901234</p>
              </div>
              <div class="modal_colum_div">
                  <span class="subtitle">配送業者</span>
                  <p class="modal_p">ヤマト運輸</p>
              </div>
          </div>
          <div class="modal_button">
              <a href="https:/qiita.com/SUGISHIA/items/d4d8b48be48767c17815">
              配達情報はこちら</a>
          </div>
      </div>
                  <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
        </div>
        
        </div>`,
})

// クレジットカードの未処理
Vue.component('creditcarduntreated',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
          <div class="modal_section">
    
          <h6 class="modal_title">クレジットカードの処理が<br>正常に行われませんでした</h6>
          <p class="modal_p_r">メッセージから再度お支払いの<br>お手続きをお願いいたします。
      </p>
      </div>
                  <button class="btn-2" onclick="location.href='mailtop.html'">メッセージへ</button>
              </div>
        </div>
        </div>
        
        </div>`,
})
// ガチャ配送情報（銀行振込）
Vue.component('gachasendinfobank',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
          <div class="modal_section">
    
          <h6 class="modal_title">景品詳細</h6>
          <div>
              <span class="subtitle">ガチャ景品名</span>
                  <p class="modal_p">ガチャ景品の名前ガチャ景品の名前</p>
          </div>
          <div>
              <span class="subtitle">メモ</span>
                  <p class="modal_p">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</p>
          </div>
          <div class="modal_colum">
              <div class="modal_colum_div">
                  <span class="subtitle">伝票番号</span>
                  <p class="modal_p">12345678901234</p>
              </div>
              <div class="modal_colum_div">
                  <span class="subtitle">配送業者</span>
                  <p class="modal_p">ヤマト運輸</p>
              </div>
          </div>
          <div class="modal_button">
              <a href="https:/qiita.com/SUGISHIA/items/d4d8b48be48767c17815">
              配達情報はこちら</a>
          </div>
      </div>
                  <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
        </div>
        
        </div>`,
})

// プレゼントコード発行
Vue.component('codepresent',{
    template:`
    <div class="overlay">
        <div class="overlay-over">
            <div class="cancel-btn" @click="$emit('close')">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
            </div>
            <div class="overlay-overmain">
            <div class="modal_section">
      
            <h6 class="modal_title">プレゼント詳細</h6>
            <div>
                <span class="subtitle">プレゼント名</span>
                    <p class="modal_p">ラポルノリニューアル記念！全員プレゼント
                    ミニハンドタオルプレゼント！</p>
            </div>
            <div>
                <span class="subtitle">メモ</span>
                    <p class="modal_p">ここにメモが入ります</p>
            </div>
            <div class="modal_colum">
                <div class="modal_colum_div">
                    <span class="subtitle">伝票番号</span>
                    <p class="modal_p">12345678901234</p>
                </div>
                <div class="modal_colum_div">
                    <span class="subtitle">配送業者</span>
                    <p class="modal_p">ヤマト運輸</p>
                </div>
            </div>
            <div class="modal_button">
                <a href="https:/qiita.com/SUGISHIA/items/d4d8b48be48767c17815">
                配達情報はこちら</a>
            </div>
        </div>
                    <button class="btn-2" @click="$emit('close')">閉じる</button>
                </div>
          </div>
          </div>
          
          </div>`,
  })
var actprodtop = new Vue ({
    el:'#actprodtop',
    data:function(){
      return {
        isActive:"1",
        isOpened: false,
        showContent:false
      }
      },
      methods: {
        isSelect(number) {
          this.isActive = number;
        },
        accordingToggle: function(){
            this.isOpened = !this.isOpened;
          },
        openModal(){
            this.showContent = true;
        },
        closeModal(){
            this.showContent = false;
        },

      }
  });
  
var footer = new Vue ({
    el:'#float_area',
    data(){
      return {
        showContent:false,
        isActive: true
      }
      },
      methods: {
        openModal(){
          this.showContent = true;
        },
        closeModal(){
          this.showContent = false;
        },
        changeHeart() {
          this.isActive = !this.isActive
      }
      }
  })