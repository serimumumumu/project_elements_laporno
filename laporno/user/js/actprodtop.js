// ガチャするボタン
Vue.component ('gacharu',{
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
        <h6 class="modal_title">ガチャを引く</h6>
        <div class="gacha_button">
            <button class="gacha_one" onclick="location.href='../../user/html/user_gacha_result.html'"><span class="gacha_one_span">１回</span>(000pt)</button>
            <button class="gacha_one withheart" onclick="location.href='../../user/html/user_gacha_result.html'"><span class="gacha_one_span">１０回</span>(000pt)
                <img class="gacha_heart" src="../../img/gacha_heart.png" alt="">
            </button>
        </div>
        <div class="lp_button">
          <p>所持LP:<span class="havelp">33,000pt</span></p>
          <button  id="btn-3" onclick="location.href='../../user/html/user_lp.html'">LP購入</button>
        </div>
      </div>
    </div>
  </div>
 </div>
`})

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

var actprodtop = new Vue ({
  el:'#actprodtop',
  data(){
    return {
      isActive:"1",
      showContent:false,
    }
    },
    methods: {
      isSelect(number) {
        this.isActive = number;
      },
      openModal(){
        this.showContent = true;
      },
      closeModal(){
        this.showContent = false;
      },
    }
});

var fotter = new Vue ({
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


var footer2 = new Vue ({
  el:"#retry",
  data(){
    return {
      showContent:false,
      // isActive: true
    }
    },
    methods: {
      openModal(){
        this.showContent = true;
      },
      closeModal(){
        this.showContent = false;
      },
    }

})