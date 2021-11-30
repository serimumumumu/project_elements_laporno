
// 落札するボタン
Vue.component('rakusaru',{
    name: "rakusaru" ,
    template:`
    <div class="float_area_a">
          <a class="float_area_a_a" @click="openModal">入札する</a>
          <div v-show="showContent" @close="showContent = false">
      <div class="overlay">
        <div class="overlay-over">
          <div class="cancel-btn" @click="closeModal">
            <span class="x x_1"></span>
            <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
            <div class="modal_section" v-if="isActive">
              <h6 class="modal_title">入札する</h6>
              <p class="warning_p">現在の最高入札金額:<span class="auch_span">11500</span>円</p>
              <form class="price_form" action="">
              <input class="price_input" name="" placeholder="12000"> 円</input>
              </form>
              <p class="warning_p">入金後はキャンセルは出来ません。<br>
             落札が確定するまでお支払いは
            発生しません。</p>
            </div>
            <button  id="btn-2" @click="active" v-if="isActive">入札確定</button>
            <!-- ボタンを押したあとの表示 -->
            <div class="modal_section2" v-else>
              <h6 class="modal_title">入札完了しました</h6>
              <img class="modal_heart" src="../../img/bigheart.png" alt="" >
              <button  id="btn-2" @click="closeModal">戻る</button>
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
            closeModal(){
              this.showContent = false;
  
              this.isActive = this.isActive;
  
          },
          active() {
              this.isActive = false;
  
            },
  
        }
  })
  
  // 落札するボタン
  Vue.component('rakusarumiss',{
    name: "rakusaru" ,
    template:`
    <div class="float_area_a">
          <a class="float_area_a_a" @click="openModal">入札する</a>
          <div v-show="showContent" @close="showContent = false">
      <div class="overlay">
        <div class="overlay-over">
          <div class="cancel-btn" @click="closeModal">
            <span class="x x_1"></span>
            <span class="x x_2"></span>
          </div>
          <div class="overlay-overmain">
            <div class="modal_section" v-if="isActive">
              <h6 class="modal_title">入札する</h6>
              <p class="warning_p">現在の最高入札金額:<span class="auch_span">11500</span>円</p>
              <form class="price_form" action="">
              <input class="price_input" name="" placeholder="12000"> 円</input>
              </form>
              <p class="warning_p">入金後はキャンセルは出来ません。<br>
             落札が確定するまでお支払いは
            発生しません。</p>
            </div>
            <button  id="btn-2" @click="active" v-if="isActive">入札確定</button>
            <!-- ボタンを押したあとの表示 -->
            <div class="modal_section2" v-else>
              <h6 class="modal_title">入札できませんでした</h6>
              <p class="warning_p">入札金額が更新されたため、入札できませんでした。<br>
              オークション詳細ページから再度入札を行ってください</p>
              <button  id="btn-2" @click="closeModal">戻る</button>
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
            closeModal(){
              this.showContent = false;
  
              this.isActive = this.isActive;
  
          },
          active() {
              this.isActive = false;
  
            },
  
        }
  })