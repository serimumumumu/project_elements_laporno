
// Vue.component('mastergacha',{
//   template:`
//   <div class="overlay"> 
//   <div class="overlay-over">
//     <div class="cancel-btn" @click="$emit('close')">
//       <span class="x x_1"></span>
//       <span class="x x_2"></span>
//     </div>
//     <div class="modal_section">
//     <div class="overlay-overmain">
//       <h6 class="modal_title">詳細</h6>
//       <div>
//         <span class="subtitle">ガチャタイトル</span>
//         <p class="modal_p">ガチャの名前
//         </p>
//       </div>
//       <div>
//         <span class="subtitle">メモ</span>
//         <p class="modal_p">ここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいりますここにめもがはいります</p>
//       </div>
//       <div class="modal_colum_2">
//         <div class="modal_colum_div">
//           <span class="subtitle">発送会社</span>
//           <p class="modal_p">賞の名前A</p>
//         </div>
//         <div class="modal_colum_div">
//           <span class="subtitle">送料</span>
//           <p class="modal_p">着払い(送料720円)</p>
//         </div>
//       </div>
//       <div class="modal_colum_2">
//         <div class="modal_colum_div">
//           <span class="subtitle">発送方法</span>
//           <p class="modal_p">ゆうパック</p>
//         </div>
//         <div class="modal_colum_div">
//           <span class="subtitle">追跡番号</span>
//           <p class="modal_p">123456789011</p>
//         </div>
//       </div>
//       <div>
//         <span class="subtitle">写真</span>
//         <div class="modal_colum_img">
//           <img src="../../img/demoimg.png">
//           <img src="../../img/demoimg.png">
//         </div>
//       </div>
//       <div class="send_link" > <a class="send_link">配達情報はこちら</a></div>
//       <button class="btn-2" @click="$emit('close')">閉じる</button>
//       </div>
//         </div>
//     </div>
//   </div>`,

// })

Vue.component('contributorgachanewaddagree',{
  template:`
  <div class="overlay"> 
    <div class="overlay-over modal_fix">
      <div class="cancel-btn" onclick="location.href='../../contributor/html/contributor_gacha_top.html'">
      <a href="../../master/html/master_gacha_top.html">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
        </a>
      </div>
      <div class="modal_section">
        <div class="overlay-overmain">
        <h6 class="modal_title">新規追加を申請しました<p class="modal_title_span">新規追加の申請を完了しました。
        <br>マスターが承認するまでお待ちください</p></h6>
              <a class="btn-2" href="../../contributor/html/contributor_gacha_top.html">ガチャTOPへ</a>
          </div>
      </div>
      </div>
      </div>`,
})
Vue.component('contributorpronewaddagree',{
  template:`
  <div class="overlay"> 
    <div class="overlay-over modal_fix">
      <div class="cancel-btn" onclick="location.href='../../contributor/html/contributor_project_top.html'">
      <a href="../../contributor/html/contributor_gacha_top.html">
        <span class="x x_1"></span>
        <span class="x x_2"></span>
        </a>
      </div>
      <div class="modal_section">
          <div class="overlay-overmain">
            <h6 class="modal_title">新規追加を申請しました<p class="modal_title_span">新規追加の申請を完了しました。
            <br>マスターが承認するまでお待ちください</p></h6>
            <a class="btn-2" href="../../contributor/html/contributor_project_top.html">プロジェクトTOPへ</a>
          </div>
      </div>
    </div>
  </div>`,
})


var master_gacha = new Vue ({
  el:'#master_gacha',
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