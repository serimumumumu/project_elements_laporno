
// Vue.component('userinfo',{
//     template:`
//     <div class="overlay "> 
//     <div class="overlay-over">
//       <div class="cancel-btn" @click="$emit('close')">
//         <span class="x x_1"></span>
//         <span class="x x_2"></span>
//       </div>
//       <div class="modal_section">
//       <div class="overlay-overmain color1">
//         <h6 class="modal_title">ユーザー情報</h6>
//         <div>
//         <span class="subtitle">ユーザー名前</span>
//         <p class="modal_p">ユーザーの名前ユーザーの名前</p>
//         </div>
//         <div>
//         <span class="subtitle">本名</span>
//         <p class="modal_p">羅保野　あつし</p>
//         </div>
//         <div>
//         <span class="subtitle">フリガナ</span>
//         <p class="modal_p">ラホノ　アツシ</p>
//         </div>
//         <div>
//         <span class="subtitle">メールアドレス</span>
//         <p class="modal_p">laporno.fanfanfanfanfanfan@gmail.com</p>
//         </div>
//         <div>
//         <span class="subtitle">電話番号</span>
//         <p class="modal_p">090-7777-5555</p>
//         </div>
//         <div>
//         <span class="subtitle">住所</span>
//         <p class="modal_p">〒090-7777-5555<br>東京都渋谷区円山町8-4-16
//         新太宗丸山ビル７階インター</p>
//         </div>
//         <div>
//         <span class="subtitle">送り主</span>
//         <p class="modal_p">投稿者法人名</p>
//         </div>
//         <div>
//         <span class="subtitle">郵便局留め先</span>
//         <p class="modal_p">郵便局の支店の名前</p>
//         </div>
//         <div>
//         <span class="subtitle">ヤマト留め先</span>
//         <p class="modal_p">ヤマトの支店の名前</p>
//         </div>
//         <button class="btn-2" @click="$emit('close')">閉じる</button>
//         </div>
//           </div>
//       </div>
//     </div>`
  
//   })
  
  
  Vue.component('masauchhistory',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">入札履歴</h6>
        <table class="history">
          <tr>
            <th class="">入札時間</th>
            <th class="">入札額</th>
            <th class="">入札者</th>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">30400円</td>
            <td class="patoron_name">パトロンの名前</td>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">30000円</td>
            <td class="patoron_name">パトロンの名前</td>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">29400円</td>
            <td class="patoron_name">パトロンの名前</td>
          </tr>
        </table>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
        </div>
          </div>
      </div>
    </div>`,
  
  })
  
  Vue.component('maspayauch',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">決済処理</h6>
        <span class="lp_present_span">下記決済処理を行います</span>
        <div class="modal_colum_2" >
          <div class="modal_colum_div">
          <span class="subtitle">落札者</span>
          <p class="modal_p">ユーザーの名前</p>
          </div> 
          <div class="modal_colum_div">
          <span class="subtitle">金額</span>
          <p class="modal_p">12,000円</p>
          </div> 
        </div>
        <div class="content-btn-area">
            <a class="twobutton_a" @click="$emit('close')">もどる</a>
            <a class="twobutton_a" @click="$emit('close')">処理する</a>
         </div>
        </div>
      </div>
    </div>
    </div>`,
  
  })
  
  Vue.component('newsdelete',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">削除</h6>
        <span class="lp_present_span">この記事を削除してよろしいですか</span>
        <div >
          <div >
          <span class="subtitle">削除する記事</span>
          <ul class="modal_p_last">
           <li><p >NewaNewaNewaNewaの名前</p></li>
           <li><p >Newaの名前</p></li>
           <li><p >NewaNewaNewaNewaの名前</p></li>
          </ul>
        </div>
        <div class="content-btn-area">
            <a class="twobutton_a" @click="$emit('close')">もどる</a>
            <a class="twobutton_a" @click="$emit('close')">処理する</a>
         </div>
        </div>
      </div>
    </div>
    </div>`,
  
  })
  
  Vue.component('projsupurl',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">URL</h6>
          <div class="modal_colum_div">
            <span class="subtitle">発行したURL</span>
            <p class="modal_p">top.html</p>
          </div> 
        <div class="content-btn-area">
            <a class="twobutton_a" href="maildetail.html">メールで送る</a>
            <a class="twobutton_a">コピーする</a>
         </div>
        </div>
      </div>
    </div>
    </div>`,
  
  })
  
  
  Vue.component ('lppresentmodal',{
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
            <h6 class="modal_title">LP付与</h6>
            
            </div>
            <div class="lp_present">
            <div class="card-content-box">
              <span class="subtitle">ユーザー名</span>
              <p class="">ユーザーの名前ユーザーの名前<span class="lp_present_span">　に</span></p>
              <form class="" action="">
              <input class="price_input" name="" placeholder="12000"> LP付与する</input>
              </form>
            </div>
          </div>
          <button  id="btn-2" @click="$emit('close')">付与</button>
          <!-- ボタンを押したあとの表示 -->
        </div>
      </div>
    </div>
    </div>  `
  })
  
  Vue.component ('supportmodal',{
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
              <h6 class="modal_title">支援する</h6>
              <div class="lp_present">
                <div class="card-content-box">
                  <div class="support_choice">
                    <select name="" id="" class="support_select">
                      <option value="" >(大科目)選択してください</option>
                      <option value="">プロジェクト</option>
                      <option value="">オークション</option>
                      <option value="">ガチャ</option>
                    </select>
                  </div>
                  <div class="support_choice">
                    <select name="" id="" class="support_select">
                      <option value="" >(中科目)選択してください</option>
                      <option value="">プロジェクト</option>
                      <option value="">オークション</option>
                      <option value="">ガチャ</option>
                    </select>
                  </div>
                  <div class="support_choice">
                    <select name="" id="" class="support_select">
                      <option value="" >(小科目)選択してください</option>
                      <option value="">プロジェクト</option>
                      <option value="">オークション</option>
                      <option value="">ガチャ</option>
                    </select>
                  </div>
                  <form class="" action="">
                  <input class="price_input" name="" placeholder="12000"> 円を支援</input>
                    </form>
                </div>
              </div>
              <button  id="btn-2" @click="$emit('close')">確定</button>
              </div>
            </div>
          </div>
        </div> 
      </div> `
  })

  Vue.component('quitmember',{
    template:`
    <div class="overlay"> 
      <div class="overlay-over">
        <div class="cancel-btn" @click="$emit('close')">
          <span class="x x_1"></span>
          <span class="x x_2"></span>
        </div>
        <div class="modal_section">
          <div class="overlay-overmain">
            <h6 class="modal_title">退会処理</h6>
            <span class="subtitle">退会理由</span>
            <p class="modal_p_last">お金を使いすぎたから</p>
            <div class="content-btn-area">
              <a class="twobutton_a" @click="$emit('close')">もどる</a>
              <a class="twobutton_a" @click="$emit('close')">処理する</a>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  
  })
  
  var master = new Vue ({
    el:'#masauchtop',
    data(){
      return {
        isActive:"1",
        showinfoContent:false,
        showContent:false,
        list:false
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
        openInfo(){
          this.showinfoContent = true;
        },
        closeInfo(){
          this.showinfoContent = false;
        },
          open(){
            this.list = !this.list
            // this.min = number
        }
      }
  });