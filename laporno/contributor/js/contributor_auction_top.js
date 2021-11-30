
  
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
          <p class="modal_p">
           <ul>
          <li>オークションの名前</li>
          <li>オークションの名前２</li>
          </ul>
          </p>
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
  // ハート
Vue.component ('heart',{
    template:`
        <div class="favorite-icon" v-if="isActive" @click="changeHeart">
            <img src="../../img/favheart.png" alt="">
        </div>
        <div class="favorite-icon" v-else @click="changeHeart">
            <img src="../../img/favedheart.png" alt="">
        </div>
        `,
        data() {
            return {
                isActive: true,
                //  changeHeart:true
            }
        },
        methods:{
            changeHeart() {
                this.isActive = !this.isActive
            },
        }
        
    })
    
  // オークション
Vue.component('auchcard',{
    name:"auchcard",
    template:`
    <div class="compo_card relative" >
        <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        <img src="../../img/heart_nyu.png" alt="" class="heart_nyu">
        <a href="../../contributor/html/contributor_auction_detail.html" class="auc_card_inner">
            <div class="auc_card_title">【新村あかり】着用済みワンピース</div>
            <div class="auc_card_detail">
                <div class="info-inner">
                    <img src="../../img/lady.png" alt="">
                    <div>新村あかり</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/pro.png" alt="">
                    <div>投稿者の名前</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/time.png" alt="">
                    <div>あと12時間</div>
                </div>
            </div>
            <div class="nyuusatu-now">現在：<span>3,111,111</span>円</div>
            <div class="patron-name-area">
                <img src="../../img/man.png" alt="">
                <div class="patron-name">パトロンくんの名前</div>
            </div>
         </a>
         <!-- ハート -->
         <div id="heart" class="heart_auch"> 
                 <heart></heart>
         </div> 
  </div>
    `
})
// オークション終了
Vue.component('auchendcard',{
    name:"auchend",
    template:`
    <div class="compo_card relative" >
        <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        <a href="../../contributor/html/contributor_auction_end_detail.html" class="auc_card_inner">
            <div class="auc_card_title">【新村あかり】着用済みワンピース</div>
            <div class="auc_card_detail">
                <div class="info-inner">
                    <img src="../../img/lady.png" alt="">
                    <div>新村あかり</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/pro.png" alt="">
                    <div>投稿者の名前</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/time.png" alt="">
                    <div>終了しました</div>
                </div>
            </div>
            <div class="nyuusatu-now">落札額：<span>3,111,111</span>円</div>
            <div class="patron-name-area">
                <img src="../../img/man.png" alt="">
                <div class="patron-name">パトロンくんの名前</div>
            </div>
         </a>
         <!-- ハート -->
         <div id="heart" class="heart_auch"> 
                 <heart></heart>
         </div> 
  </div>
    `,
    

})