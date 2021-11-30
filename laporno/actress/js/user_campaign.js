Vue.component('discountcodeinput',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
          <div class="modal_section">
    
          <h6 class="modal_title">割引コードを取得しました<span class="get_cord_input_span">取得した割引はプロジェクト、オークション、ガチャにて
          使用できます。</span></h6>
        
          <article class="code_discount">
          <p class="discount_date"><span class="gray_date">有効期限</span>2021/09/11 ~2021/11/11</p>
          <h3 class="discount_title">ハロウィン連動キャンペーン！今だけ黒船プロジェクトに限り全企画10%割引！このチャンスを見逃すな！</h3>
          <p class="discount_rate">10％割引</p>
        </article>
    
       </div>
          <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
        </div>
        
        </div>`,
})
Vue.component('presentcodeinput',{
  template:`
  <div class="overlay">
      <div class="overlay-over">
          <div class="cancel-btn" @click="$emit('close')">
              <span class="x x_1"></span>
              <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
          <div class="modal_section">
    
          <h6 class="modal_title">プレゼントコードを<br>取得しました<span class="get_cord_input_span">プレゼントが発送されるまで、
          もうしばらくお待ちください </span></h6>
          <div class="modal_colum">
          <article class="code_present">
          <p class="discount_date"><span class="gray_date">有効期限</span>2021/09/11 ~2021/11/11</p>
          <p class="discount_status">未発送</p>
          <h3 class="discount_title">ハロウィン連動キャンペーン！今だけ黒船プロジェクトに限りコードを入力したユーザー全員にミニタオルプレゼント！このチャンスを見逃すな！</h3>
        </article>
          </div>
          <div class="modal_button">
          </div>
       </div>
          <button class="btn-2" @click="$emit('close')">閉じる</button>
              </div>
        </div>
        </div>
        
        </div>`,
})
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
          <div class="campaign_top_get_cord">
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
var campaignCode = new Vue ({
  el:'#campaign',
  data:function(){
    return {
      // isOpened: false,
      showContent:false,
      showInputContent:false
    }
    },
    methods: {
      openModal(){
          this.showContent = true;
      },
      closeModal(){
        this.showContent = false;
      },
      openInputModal(){
          this.showInputContent = true;
      },
      closeInputModal(){
          this.showInputContent = false;
      },

    }
});
