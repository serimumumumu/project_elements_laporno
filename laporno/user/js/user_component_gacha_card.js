
// ガチャ
Vue.component('usergachacard',{
    name:"",
    template:`
    <div class="compo_card">
        <a href="../../user/html/user_gacha_detail.html" class="gatya_card_imgarea">
        <div class="relative">
        <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        <div class="compo_card_hot">
            <p class="compo_card_hot_p">
                <img class="compo_card_hot_fire" src="../../img/fire.png" alt="">
                HOT!
            </p>
        </div>
      </div>
        </a>
        <div class="gatya_card_inner">
            <a href="../../user/html/user_gacha_detail.html" class="gatya_card_title">ガチャのタイトルがガチャのタイトルがここに入りますよ</a>
            <a href="../../user/html/user_gacha_detail.html">
                <div class="info-inner">
                    <img src="../../img/time.png" alt="">
                    <div>12/12～12/18</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/lott.png" alt="">
                    <div>現在20000回</div>
                </div>
            </a>
            <!-- ハートマーク -->
            <div class="favorite-icon" v-if="isActive" @click="changeHeart">
            <img src="../../img/favheart.png" alt="">
        </div>
        <div class="favorite-icon" v-else @click="changeHeart">
            <img src="../../img/favedheart.png" alt="">
        </div>
            <!-- ハートマーク終わり -->
        </div>
    </div>
    `,
    data() {
        return {
            isActive: true,
        }
    },
    methods:{
        changeHeart() {
            this.isActive = !this.isActive
        },
    }

})
// ガチャ終了
Vue.component('usergachaendcard',{
    name:"UserGachaEndCard",
    template:`
    <div class="compo_card">
        <a href="../../user/html/user_gacha_end_detail.html" class="gatya_card_imgarea">
            <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        </a>
        <div class="gatya_card_inner">
            <a href="user_gacha_end_detail.html" class="gatya_card_title">ガチャのタイトルがガチャのタイトルがここに入りますよ</a>
            <a href="../../user/html/user_gacha_end_detail.html">
                <div class="info-inner">
                    <img src="../../img/time.png" alt="">
                    <div>終了しました</div>
                </div>
                <div class="info-inner">
                    <img src="../../img/lott.png" alt="">
                    <div>20000回</div>
                </div>
            </a>
            <!-- ハートマーク -->
            <div class="favorite-icon" v-if="isActive" @click="changeHeart">
            <img src="../../img/favheart.png" alt="">
        </div>
        <div class="favorite-icon" v-else @click="changeHeart">
            <img src="../../img/favedheart.png" alt="">
        </div>
            <!-- ハートマーク終わり -->
        </div>
    </div>
    `,
    data() {
        return {
            isActive: true,
        }
    },
    methods:{
        changeHeart() {
            this.isActive = !this.isActive
        },
    }
})