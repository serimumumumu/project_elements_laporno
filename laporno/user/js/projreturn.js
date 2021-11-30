
var count = new Vue ({
  el:"#projreturn",
  data:{
      extra:300,
      point:500,
      returnpay:12000,
      show:false,
      togglebutton:"もっと見る"
    },
})


Vue.component('auctiontransferinfo',{
  name: "returnquestion" ,
  template:`
      <div class="button color3">
        <div >
          <button @click="openModal">確定</button>
        </div>
        <div v-show="showContent" @close="showContent = false">
          <div class="overlay">
            <div class="overlay-over">
              <div class="cancel-btn" onclick="location.href='../../user/html/user_mypage.html'">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
              </div>
              <div class="overlay-overmain">
                <div class="modal_section">
                    <h6 class="modal_title">落札確定<span>下記振込先に２営業日以内に<br>
                    落札総額のお振込をお願いします。<br>
                    この情報はマイページからも確認できます。</span></h6>
                    <div class="card-content">
                    <p class="sub-title">振込先銀行名</p>
                    <h6 class="sub-text">Paypay銀行</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">支店名</p>
                    <h6 class="sub-text">渋谷支店</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">種類</p>
                    <h6 class="sub-text">当座</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">口座番号</p>
                    <h6 class="sub-text">32212334</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">口座名義</p>
                    <h6 class="sub-text">株式会社YOSUGA　(カ)ヨスガ</h6>
                  </div>
                </div>
                <div class="btn-area">
                  <a href="../../user/html/user_auction_top.html" class="button color3" >オークションへ</a >
                  <a href="../../user/html/user_mypage.html" class="button color3" >マイページへ</a >
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  data:function(){
      return {
        showContent:false,
        isActive: true
      }
      },
      methods: {
        openModal(){
            this.showContent = true;
            this.isActive = true;
        },
        active() {
            this.isActive = !this.isActive
          },

      }
})
Vue.component('returntransferinfo',{
  name: "returnquestion" ,
  template:`
      <div class="button color3">
        <div >
          <button @click="openModal">支援確定</button>
        </div>
        <div v-show="showContent" @close="showContent = false">
          <div class="overlay">
            <div class="overlay-over">
              <div class="cancel-btn" onclick="location.href='../../user/html/user_project_detail.html'">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
              </div>
              <div class="overlay-overmain">
                <div class="modal_section">
                    <h6 class="modal_title">支援確定<span>下記振込先に２営業日以内に<br>
                    支援総額のお振込をお願いします。<br>
                    この情報はマイページからも確認できます。</span></h6>
                    <div class="card-content">
                    <p class="sub-title">振込先銀行名</p>
                    <h6 class="sub-text">Paypay銀行</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">支店名</p>
                    <h6 class="sub-text">渋谷支店</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">種類</p>
                    <h6 class="sub-text">当座</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">口座番号</p>
                    <h6 class="sub-text">32212334</h6>
                     </div>
                    <div class="card-content">
                    <p class="sub-title">口座名義</p>
                    <h6 class="sub-text">株式会社YOSUGA　(カ)ヨスガ</h6>
                  </div>
                </div>
                <div class="btn-area">
                  <a href="../../user/html/user_project_detail.html" class="button color3" >プロジェクトへ</a >
                  <a href="../../user/html/user_mypage.html" class="button color3" >マイページへ</a >
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  data:function(){
      return {
        showContent:false,
        isActive: true
      }
      },
      methods: {
        openModal(){
            this.showContent = true;
            this.isActive = true;
        },
        active() {
            this.isActive = !this.isActive
          },

      }
})
Vue.component('returnquestion',{
  name: "returnquestion" ,
  template:`
      <div class="button color3">
        <div >
          <button @click="openModal">支援確定</button>
        </div>
        <div v-show="showContent" @close="showContent = false">
          <div class="overlay">
            <div class="overlay-over">
              <div class="cancel-btn" onclick="location.href='projdetail.html'">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
              </div>
              <div class="overlay-overmain">
                <div class="modal_section" v-if="isActive">
                    <h6 class="modal_title">リターンについての質問</h6>
                    <p class="sub-title">プロジェクト名</p>
                    <h6 class="sub-text">プロジェクトの名前プロジェクトの名前</h6>
                    <p class="sub-title">リターン名</p>
                    <h6 class="sub-text">リターンの名前名前</h6>
                    <p class="sub-title">希望の宛名</p>
                    <input class="sub-input" placeholder="パトロンの名前">
                    <p class="sub-title">希望する色</p>
                    <select class="questionseslect" name="" id="">
                      <option value="" enabled="true">選択してください</option>
                      <option value="青">青</option>
                      <option value="赤">赤</option>
                      <option value="黄色">黄色</option>
                    </select>
                    <p class="sub-title">希望するサイズ</p>
                    <input class="sub-input" placeholder="LL">
                  </div>
                  <button  id="btn-2" @click="active" v-if="isActive">送信</button>
                <!-- ボタンを押したあとの表示 -->
                <div class="modal_section2" v-else>
                  <h6 class="modal_title">ご回答ありがとうございます<span>変更したい場合は【支援ブロジェクト一覧】よりご変更お願いします</span></h6>
                  <img class="modal_heart" src="../../img/bigheart.png" alt="" >
                  <button  onclick="location.href='../html/projdetail.html'" id="btn-2">プロジェクト詳細へ</button>
                </div>
              </div>
              <!-- ボタンを押したあとの表示終わり -->
            </div>
          </div>
        </div>
      </div>
  `,
  data:function(){
      return {
        showContent:false,
        isActive: true
      }
      },
      methods: {
        openModal(){
            this.showContent = true;
            this.isActive = true;
        },
        active() {
            this.isActive = !this.isActive
          },

      }
})

var ReturnQuestion = new Vue ({
      el:"#projpay",
      data:{}
})


Vue.component('inquirysend',{
  name: "inquirysend" ,
  template:`
  <div class="button color3">
    <div >
      <button @click="openModal">送信</button>
    </div>
    <div v-show="showContent" @close="showContent = false">
      <div class="overlay">
        <div class="overlay-over">
          <div class="cancel-btn" onclick="location.href='inquiry.html'">
            <span class="x x_1"></span>
            <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
            <div class="modal_section2" >
              <h6 class="modal_title">お問い合わせを承りました<span class="modal_title_span2">2~3営業日以内に担当からご連絡がございます。<br>
              お問い合わせはメッセージ一覧から確認できます</span></h6>
              <img class="modal_heart" src="../../img/bigheart.png" alt="" >
              <button  onclick="location.href='mailtop.html'" id="btn-2">メッセージ一覧へ</button>
            </div>
          </div>
          <!-- ボタンを押したあとの表示終わり -->
        </div>
      </div>
    </div>
    </div>
  `,
  data:function(){
    return {
      showContent:false,
      }
    },
    methods: {
      openModal(){
        this.showContent = true;
        this.isActive = true;
      },
    }
})

Vue.component('buylpcard',{
  name: "buylpcard" ,
  template:`
    <div>
      <button class="card-btn color2"  @click="openModal">カード決済へ</button>
      <div v-show="showContent" @close="showContent = false">
        <div class="overlay">
          <div class="overlay-over">
            <div class="cancel-btn" onclick="location.href='user_mypage.html'">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
            </div>
            <div class="overlay-overmain">
              <div class="modal_section2" >
                <h6 class="modal_title">決済が完了しました<span class="modal_title_span2">所持LPはマイページからご確認ください</span></h6>
                <img class="modal_heart" src="../../img/bigheart.png" alt="" >
                <button  onclick="location.href='user_mypage.html'" id="btn-2">マイページへ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data:function(){
  return {
    showContent:false,
    // isActive: true
  }
  },
  methods: {
    openModal(){
      this.showContent = true;
      this.isActive = true;
    },
  }
})

Vue.component('buylpbank',{
  name: "buylpbank" ,
  template:`
    <div>
      <button class="card-btn color2"  @click="openModal">銀行振込申請へ</button>
      <div v-show="showContent" @close="showContent = false">
        <div class="overlay">
          <div class="overlay-over">
            <div class="cancel-btn" onclick="location.href='user_mypage.html'">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
            </div>
            <div class="overlay-overmain">
              <div class="modal_section2" >
                <h6 class="modal_title">振込申請を行いました<span class="modal_title_span2">振込詳細情報はマイページからご確認ください。</span></h6>
                <img class="modal_heart" src="../../img/bigheart.png" alt="" >
                <button  onclick="location.href='user_mypage.html'" id="btn-2">マイページへ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data:function(){
  return {
    showContent:false,
    // isActive: true
  }
  },
  methods: {
    openModal(){
      this.showContent = true;
      this.isActive = true;
    },
  }
})

var InquirySend = new Vue ({
    el:"#inquirysend",
    data:{}
})

var Buylp = new Vue ({
    el:"#buylp",
    data:{}
})