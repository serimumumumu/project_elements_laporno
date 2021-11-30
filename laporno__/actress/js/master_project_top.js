Vue.component('projectreceiptissue',{
    template:`
    <div class="overlay"> 
      <div class="overlay-over">
        <div class="cancel-btn" @click="$emit('close')">
          <span class="x x_1"></span>
          <span class="x x_2"></span>
        </div>
        <div class="modal_section">
          <div class="overlay-overmain">
            <h6 class="modal_title">
            明細発行
                <span>以下のプロジェクトに対して<br>
                売上分配率を選択してください</span>
            </h6>
            <div class="card_info_index">
            <div>
            <span class="subtitle">プロジェクト名</span>
            <p class="modal_p">プロジェクトの名前</p>
            </div>
            <span class="subtitle">売上分配率</span>
            <div class="content6-card-area">
            <label class="check_select radio-input input-75 color1">８５%
            <input type="radio" checked="checked" name="radio6">
            <span class="checkmark"></span>
            </label>
            <label class="check_select radio-input input-75 color1">売上から原価を引き折半
            <input type="radio" name="radio6">
            <span class="checkmark"></span>
            </label> 
            <label class="check_select radio-input input-half color1">
            <input type="radio text" name="radio6" placeholder="20%">
            <span class="checkmark"></span>
            </label>
            <label class="check_select radio-input input-half color1">
            <input type="radio text" name="radio6" placeholder="自由記入">　
            <span class="checkmark"></span>
            </label> 
            </div>
    </div>
            <div class="content-btn-area">
              <a class="twobutton_a" @click="$emit('close')">もどる</a>
              <a class="twobutton_a" href="../../user/html/master_project_receipt_new_receipt.html">明細詳細へ</a>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  
  })
Vue.component('auctionreceiptissue',{
    template:`
    <div class="overlay"> 
      <div class="overlay-over">
        <div class="cancel-btn" @click="$emit('close')">
          <span class="x x_1"></span>
          <span class="x x_2"></span>
        </div>
        <div class="modal_section">
          <div class="overlay-overmain">
            <h6 class="modal_title">
            明細発行
                <span>以下のオークションに対して<br>
                売上分配率を選択してください</span>
            </h6>
            <div class="card_info_index">
            <div>
            <span class="subtitle">オークション名</span>
            <p class="modal_p">オークションの名前</p>
            </div>
            <span class="subtitle">売上分配率</span>
            <div class="content6-card-area">
            <label class="check_select radio-input input-75 color1">８５%
            <input type="radio" checked="checked" name="radio6">
            <span class="checkmark"></span>
            </label>
            <label class="check_select radio-input input-75 color1">売上から原価を引き折半
            <input type="radio" name="radio6">
            <span class="checkmark"></span>
            </label> 
            <label class="check_select radio-input input-half color1">
            <input type="radio text" name="radio6" placeholder="20%">
            <span class="checkmark"></span>
            </label>
            <label class="check_select radio-input input-half color1">
            <input type="radio text" name="radio6" placeholder="自由記入">　
            <span class="checkmark"></span>
            </label> 
            </div>
    </div>
            <div class="content-btn-area">
              <a class="twobutton_a" @click="$emit('close')">もどる</a>
              <a class="twobutton_a" href="../../user/html/master_project_receipt_new_receipt.html">明細詳細へ</a>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  
  })
   
  Vue.component('auctionhistory',{
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
  


  var App = new Vue({
      el:'#main',
      data(){
        return{
            showContent:false,
            showAucHistory:false
        }
      },
      methods:{
        openModal(){
            this.showContent = true;
          },
        closeModal(){
          this.showContent = false;
        },
        openHistoryModal(){
            this.showAucHistory = true;
          },
        closeHistoryModal(){
          this.showAucHistory = false;
        }
      }
  })