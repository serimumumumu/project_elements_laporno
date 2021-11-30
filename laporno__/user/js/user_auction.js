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
        <a href="../../user/html/user_auction_detail.html" class="auc_card_inner">
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
        <a href="../../user/html/user_auction_end_detail.html" class="auc_card_inner">
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