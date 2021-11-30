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