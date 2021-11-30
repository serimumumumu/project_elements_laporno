
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
  
  
  Vue.component('conauchhistory',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain2">
        <h6 class="modal_title">入札履歴</h6>
        <table class="history">
          <tr>
            <th class="">入札時間</th>
            <th class="">入札額</th>
            <th class="">入札者</th>
            <th class="">取消申請</th>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">30400円</td>
            <td class="patoron_name">パトロンの名前</td>
            <td class="patoron_name"><a>申請</a></td>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">30400円</td>
            <td class="patoron_name">パトロンの名前</td>
            <td class="patoron_name"><a>申請</a></td>
          </tr>
          <tr>
            <td class="patoron_name">01/29 10:28</td>
            <td class="patoron_name">30400円</td>
            <td class="patoron_name">パトロンの名前</td>
            <td class="patoron_name"><a>申請</a></td>
          </tr>
        </table>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
        </div>
          </div>
      </div>
    </div>`,
  
  })
  
  Vue.component('conauchsendinfo',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over modal_fix">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">詳細</h6>
        <div>
          <span class="subtitle">オークションタイトル</span>
          <p class="modal_p" <ul>
          <li>オークションの名前</li>
          <li>オークションの名前２</li>
          </ul></p>
        </div>
        <div>
          <span class="subtitle">落札者の名前</span>
          <p class="modal_p">ユーザーの名前</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">落札金額</span>
          <p class="modal_p">
          <ul>
          <li>¥15,500</li>
          <li>¥15,500</li>
          </ul>
          </p>
        </div>
        <div>
          <span class="subtitle">メモ</span>
          <textarea class="modal_textarea" col="3" >メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</textarea>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送会社</span>
            <p class="modal_p">発送会社の名前</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送方法</span>
            <p class="modal_p">ヤマト運輸</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">伝票番号</span>
            <p class="modal_p">12345678901234</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div>
          <span class="subtitle">写真</span>
          <div class="modal_colum_img">
            <img src="../../img/demoimg.png">
            <img src="../../img/demoimg.png">
          </div>
        </div>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
        </div>
          </div>
      </div>
    </div>`,
  
  })
  
  Vue.component('conreturnsendinfo',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over modal_fix">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">詳細</h6>
        <div>
          <span class="subtitle">プロジェクトタイトル</span>
          <p class="modal_p">プロジェクトの名前</p>
        </div>
        <div>
          <span class="subtitle">リターンタイトル</span>
          <p class="modal_p">
            <ul>
              <li>リターンの名前</li>
              <li>リターンの名前２</li>
            </ul>
          </p>
        </div>
        <div>
          <span class="subtitle">パトロンの名前</span>
          <p class="modal_p">ユーザーの名前</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">リターン金額</span>
          <p class="modal_p">
          <ul>
          <li>¥15,500</li>
          <li>¥15,500</li>
          </ul>
          </p>
        </div>
        <div>
          <span class="subtitle">メモ</span>
          <textarea class="modal_textarea" col="3" >メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</textarea>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送会社</span>
            <p class="modal_p">発送会社の名前</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送方法</span>
            <p class="modal_p">ヤマト運輸</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">伝票番号</span>
            <p class="modal_p">12345678901234</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div>
          <span class="subtitle">写真</span>
          <div class="modal_colum_img">
            <img src="../../img/demoimg.png">
            <img src="../../img/demoimg.png">
          </div>
        </div>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
        </div>
          </div>
      </div>
    </div>`,
  
  })
  
  Vue.component('consellregist',{
    template:`
    <div class="overlay">
    <div class="overlay-over">
     <div class="cancel-btn" @click="$emit('close')">
       <span class="x x_1"></span>
       <span class="x x_2"></span>
     </div>
     <!-- モーダルの中身 -->
     <div class="overlay-overmain">
      <h6 class="modal_title">販売先登録</h6>
        <div class="modal_section2">
          <div >
            <span class="subtitle">タイトル</span>
            <p class="modal_p">プロジェクトタイトルプロジェクトタイトル</p>
          </div>
          <div class="modal_p"> 
            <div>
              <span class="subtitle">販売先URL1</span>
              <textarea  name="" id="" cols="30" rows="1"></textarea>
            </div>
            <div>
              <span class="subtitle">販売先URL2</span>
              <textarea name="" id="" cols="30" rows="1"></textarea>
            </div>
          </div>
          <span class="subtitle">ステータス</span>
          <div class="modal_colum">
            <a class="twobutton_a" href="">終了へ変更</a>
            <a class="twobutton_a" href="">販売中へ変更</a>
          </div>
        </div>
     </div>
    </div>
   </div>
  </div>`
  })
  
  Vue.component('congachasendinfo',{
    template:`
    <div class="overlay"> 
    <div class="overlay-over modal_fix">
      <div class="cancel-btn" @click="$emit('close')">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
      </div>
      <div class="modal_section">
      <div class="overlay-overmain">
        <h6 class="modal_title">詳細</h6>
        <div>
          <span class="subtitle">ガチャタイトル</span>
          <p class="modal_p">ガチャの名前
          </p>
        </div>
        <div>
          <span class="subtitle">ユーザーの名前</span>
          <p class="modal_p">ユーザーの名前</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">賞の名前</span>
          <p class="modal_p">
          <ul>
          <li>賞の名前A</li>
          </ul>
          </p>
        </div>
        <div>
          <span class="subtitle">メモ</span>
          <textarea class="modal_textarea" col="3" >メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</textarea>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送会社</span>
            <p class="modal_p">発送会社の名前</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">発送方法</span>
            <p class="modal_p">ヤマト運輸</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
            <span class="subtitle">伝票番号</span>
            <p class="modal_p">12345678901234</p>
          </div>
          <div class="modal_colum_2_a"><a href="">変更</a></div>
        </div>
        <div>
          <span class="subtitle">写真</span>
          <div class="modal_colum_img">
            <img src="../../img/demoimg.png">
            <img src="../../img/demoimg.png">
          </div>
        </div>
        <button class="btn-2" @click="$emit('close')">閉じる</button>
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
  Vue.component ('gachanewapp',{
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
            <h6 class="modal_title">申請完了</h6>
            <p>ガチャの申請を行いました。</br>
            マスターが承認するまでお待ちください</p>
            </div>
          <button  id="btn-2" @click="$emit('close')">ガチャ一覧</button>
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
          <div class="overlay-overmain2 ">
              <h6 class="modal_title">支援する</h6>
              <div class="lp_present">
                <div class="card-content-box">
                  <div class="support_choice">
                    <select name="" id="" class="support_select color1">
                      <option value="" >(大科目)選択してください</option>
                      <option value="">プロジェクト</option>
                      <option value="">オークション</option>
                      <option value="">ガチャ</option>
                    </select>
                  </div>
                  <div class="support_choice">
                    <select name="" id="" class="support_select color1">
                      <option value="" >(中科目)選択してください</option>
                      <option value="">プロジェクト</option>
                      <option value="">オークション</option>
                      <option value="">ガチャ</option>
                    </select>
                  </div>
                  <div class="support_choice">
                    <select name="" id="" class="support_select color1">
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
              <button  id="btn-2" @click="$emit('close')">確定</button>
              </div>
            </div>
          </div>
  
      </div> `
  })
  
  // var contributor = new Vue ({
  //   el:'#conauchtop',
  //   data(){
  //     return {
  //       isActive:"1",
  //       showinfoContent:false,
  //       showContent:false,
  //       list:false
  //     }
  //     },
  //     methods: {
  //       isSelect(number) {
  //         this.isActive = number;
  //       },
  //       openModal(){
  //         this.showContent = true;
  //       },
  //       closeModal(){
  //         this.showContent = false;
  //       },
  //       openInfo(){
  //         this.showinfoContent = true;
  //       },
  //       closeInfo(){
  //         this.showinfoContent = false;
  //       },
  //         open(){
  //           this.list = !this.list
  //           // this.min = number
  //       }
  //     }
  // });
  
  // var auchimgedit = new Vue ({
  //   el:'#auchimgedit',
  //   data:{
  //     selectvalue:'女優'
  
      
  //   }
  // })