
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
        <table class="modal_history">
        <tr>
          <th class="fs_12">時間</th>
          <th class="fs_12">入札額</th>
          <th class="fs_12">入札者</th>
          <th class="agree_button_area fs_12">取消</th>
        </tr>
        <tr>
          <td class="auc_date">01/29 10:28</td>
          <td class="auc_money">30400円</td>
          <td class="fs_12">パトロンの名前</td>
          <td class="fs_12">取消済</td>
        </tr>

        <tr>
          <td class="auc_date">01/29 10:28</td>
          <td class="auc_money">30400円</td>
          <td class="fs_12">パトロンの名前</td>
          <td class="fs_12 warn_icon"><a class="agree_button ">取消承認</a></td>
        </tr>
        <tr>
          <td class="auc_date">01/29 10:28</td>
          <td class="auc_money">30400円</td>
          <td class="fs_12">パトロンの名前</td>
          <td></td>
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
        <h6 class="modal_title">入金処理</h6>
        <div>
        <p class="modal_p">下記入金処理を行います</p>
        </div>
        <div class="modal_colum_2">
          <div class="modal_colum_div">
          <span class="subtitle">落札者</span>
          <p class="modal_p">ユーザーの名前</p>
          </div> 
          <div class="modal_colum_div">
          <span class="subtitle">金額</span>
          <p class="modal_p">12,000円</p>
          </div> 
        </div>
        <div class="twobutton">
            <a class="twobutton_a" @click="$emit('close')">もどる</a>
            <a class="twobutton_a" @click="$emit('close')">処理する</a>
         </div>
        </div>
      </div>
    </div>
    </div>`,
  
  })


Vue.component('masteraucsendinfo',{
  template:`
  <div class="overlay"> 
  <div class="overlay-over">
    <div class="cancel-btn" @click="$emit('close')">
      <span class="x x_1"></span>
      <span class="x x_2"></span>
    </div>
    <div class="modal_section">
    <div class="overlay-overmain">
      <h6 class="modal_title">詳細</h6>
      <div>
        <span class="subtitle">オークーションタイトル</span>
        <p class="modal_p">オークーションの名前
        </p>
      </div>
      <div class="modal_colum_2">
        <div class="modal_colum_div">
          <span class="subtitle">落札金額</span>
          <p class="modal_p">￥15,500</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">決済方法</span>
          <p class="modal_p">銀行振込</p>
        </div>
      </div>
      <div>
        <span class="subtitle">支払い状況</span>
        <p class="modal_p">入金済み</p>
       </div>
      <div>
        <span class="subtitle">メモ</span>
        <p class="modal_p">ここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいります</p>
      </div>
      <div class="modal_colum_2">
        <div class="modal_colum_div">
          <span class="subtitle">発送会社</span>
          <p class="modal_p">賞の名前A</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">送料</span>
          <p class="modal_p">着払い(送料720円)</p>
        </div>
      </div>
      <div class="modal_colum_2">
        <div class="modal_colum_div">
          <span class="subtitle">発送方法</span>
          <p class="modal_p">ゆうパック</p>
        </div>
        <div class="modal_colum_div">
          <span class="subtitle">追跡番号</span>
          <p class="modal_p">123456789011</p>
        </div>
      </div>
      <div>
        <span class="subtitle">写真</span>
        <div class="modal_colum_img">
          <img src="../../img/demoimg.png">
          <img src="../../img/demoimg.png">
        </div>
      </div>
      <div class="send_link" > <a class="send_link">配達情報はこちら</a></div>
      <button class="btn-2" @click="$emit('close')">閉じる</button>
      </div>
        </div>
    </div>
  </div>`,

})

  