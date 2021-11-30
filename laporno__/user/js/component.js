// ヘッダーハンバーガー


Vue.component('headers',{
    template:`

<header>
    <div class="header-left">
         <a href="user_top.html" id="top"><img src="../../img/logo.png" alt="ラポルノロゴ"></a>
    </div>
    <div class="header-right">
        <a href="user_message_top.html">
        <img src="../../img/mail.png" alt="">
        </a>
        <div class="hmenu" id="hamburger_menu" @click="open=!open">
            <img src="../../img/menu.png" alt="" >
            <div class="hbtn" >
                <span class="line line_01" :class="{'btn_01':open }"></span>
                <span class="line line_03" :class="{'btn_03':open }"></span>
            </div>
            </div>
        <div class="menu" v-show="open">
            <p class="menu_user">ユーザーの名前ユーザーの名</p>
            <ul>
                <li><a href="user_mypage.html">マイページ</a></li>
                <li><a href="user_campaign_index.html">キャンペーンページ</a></li>
                <li><a href="user_news.html">お知らせ</a></li>
                <li><a href="user_project_top.html">プロジェクトTOP</a></li>
                <li><a href="user_auction_top.html">オークションTOP</a></li>
                <li><a href="user_gacha_top.html">ガチャTOP</a></li>
                <li><a href="user_lp.html">LP購入</a></li>
                <li><a href="user_mypage.html">お気に入り</a></li>
                <li><a href="user_mypage.html">設定</a></li>
                <li><a href="user_inquiry.html">お問い合わせ</a></li>
                <li><a href="">ログアウト</a></li>
            </ul>
            <div class="sns">
                <a href="user_top.html"><img src="../../img/twitter.png" alt=""></a>
                <a href="#"><img src="../../img/instagram.png" alt=""></a>
            </div>
        </div>
        </div>
    </header>

    `,
    data: function() {
        return{
          open:false
        }
      },

    

})
var header = new Vue ({
    el:"#headers",
});


// 検索バー

Vue.component('search',{
    template:`
    <div class="search">
        <form action="" method="">
            <img src="../../img/serch.png" alt="">
            <input  type="text" placeholder="検索する" />
        </form>
    </div>
    `
})

var Search = new Vue ({
    el:'#search'
})
// 検索バー終わり

ハート
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
// Vue.component ('heart',{
//     template:`
//         <div class="favorite-icon" v-if="isActiveHeart" @click="changeHeart">
//             <img src="../../img/favheart.png" alt="">
//         </div>
//         <div class="favorite-icon" v-else @click="changeHeart">
//             <img src="../../img/favedheart.png" alt="">
//         </div>
//         `,
//         data() {
//             return {
//                 isActiveHeart: true,
//                 //  changeHeart:true
//             }
//         },
//         methods:{
//             changeHeart() {
//                 this.isActiveHeart = !this.isActiveHeart
//             },
//         }
        
//     })
    
Vue.component('scheduledetail',{
    template:`
    <div class="overlay">
        <div class="overlay-over" v-if="isActive">
            <div class="cancel-btn" @click="$emit('close')">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
            </div>
            <div class="overlay-overmain" >
                <div class="modal_section2">
                        <h6 class="modal_title">◯月◯日<span class="modal_title_span2">スケジュール</span></h6>
                    <article class="schedule_article" >
                        <h5 >夏樹まろん</h5>
                        <ul class="schedule_articl_ul" @click="active">
                        <li class="schedule_articl_li"><p>15:00</p><a class="schedule_article_a">写真集リリースイベント写真集リリースイベント写真集リリースイベント</a></li>
                        <li class="schedule_articl_li">15:00<a class="schedule_article_a">写真集リリースイベント</a></li>
                        </ul>
                    </article>
                    <article class="schedule_article" @click="active" >
                        <h5>綿　アメリ</h5>
                        <ul class="schedule_articl_ul">
                        <li class="schedule_articl_li"><p>15:00</p><a class="schedule_article_a">オリジナルCDリリースイベント</a></li>
                        <li class="schedule_articl_li">18:00<a class="schedule_article_a">らぽふぁんイベント</a></li>
                        </ul>
                    </article>
                    <button  @click="$emit('close')" id="btn-2">もどる</button>
                </div>
            </div>
        </div>
        <div class="overlay-over" v-else>
            <div class="cancel-btn" @click="$emit('close')"  @click="active">
                <span class="x x_1"></span>
                <span class="x x_2"></span>
            </div>
            <div class="overlay-overmain" >
            <div class="modal_section2">
                <h6 class="modal_title">◯月◯日<span class="modal_title_span2">14:00~</span></h6>
                <h6 class="modal_title">14:00~ 写真集発売イベント<span class="modal_title_span2">@代々木上原蔦屋よようら店</span></h6>
                    <img src="../../img/demoimg.png"  class="compo_main_img">
                    <p class="modal_schedule_detail"> ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります</p>
                    <a href="" class="modal_schedule_detail_a">詳しくはこちら</a>                
                    <button  @click="active" id="btn-2">もどる</button>
               </div>
            </div>
        </div>
    </div>
    `,
    data:function(){
        return{
            isActive:true
        }
    },
    methods:{
        active() {
            this.isActive = !this.isActive
            }
    }
    // 中止の時
    // <h6 class="modal_title"><span style="color:#ff0000;font-weight:bold">イベント中止</span> 写真集発売イベント<span class="modal_title_span2">@代々木上原蔦屋よようら店</span></h6>

})
var schedule = new Vue ({
    el:'#schedule',
    data(){
        return{
            showContent:false,
            isActive:true
        }
    },
    methods: {
        openModal(){
            this.showContent = true;
        },
        closeModal(){
            this.showContent = false;
        }

    }
})

    
    
    
    // 投稿者カード
Vue.component('maker',{
    template:`
    <div class="compo_card">
        <div>
              <img src="../../img/demoimg.png" alt="" class="compo_main_img">
         </div>
        <div class="auc_card_inner">
            <a href="../../user/html/user_contributor_profile.html" class="joyu_card_info">
                <div class="info-inner">
                    <img src="../../img/pro.png" alt="">
                    <div>桃太郎映像出版</div>
                </div>
            </a>
          </div> 
        </div>
    </div>
    `
})
Vue.component('actress',{
    template:`
    <div class="compo_card">
        <div>
              <img src="../../img/demoimg.png" alt="" class="compo_main_img">
         </div>
        <div class="auc_card_inner">
            <a href="../../user/html/user_actress_profile.html" class="joyu_card_info">
                <div class="info-inner">
                    <img src="../../img/lady.png" alt="">
                    <div>女優の名前</div>
                </div>
            </a>
          </div> 
        </div>
    </div>
    `
})

// ガチャ
Vue.component('gachacard',{
    name:"gacha",
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
            <div id="heart"> 
                <heart></heart>
            </div> 
            <!-- ハートマーク終わり -->
        </div>
    </div>
    `
})
// ガチャ終了
Vue.component('gachaendcard',{
    name:"gachaend",
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
            <div id="heart"> 
                <heart></heart>
            </div> 
            <!-- ハートマーク終わり -->
        </div>
    </div>
    `
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
// プロジェクトカード
Vue.component('projcard',{
    name: "projcard" ,
    template:`
    <div class="compo_card relative" >
    <div class="relative">
    <img src="../../img/demoimg.png" alt="" class="compo_main_img">
    <div class="compo_card_hot">
        <p class="compo_card_hot_p">
        <img class="compo_card_hot_fire" src="../../img/fire.png" alt="">
        HOT!
        </p>
    </div>
</div>
        <img src="../../img/heart-sien.png" alt="" class="heart_nyu">
        <div class="auc_card_inner">
         <a href="../../user/html/user_project_detail.html" >
            <div class="gatya_card_title">【新村あかり】念願の脚本家として作品を作りたい</div>
            <div class="proj_card_info">
                <div class="">
                    <div class="info-inner">
                        <img src="../../img/lady.png" alt="">
                        <div>新村あかり</div>
                    </div>
                    <div class="info-inner">
                        <img src="../../img/pro.png" alt="">
                        <div>投稿者の名前</div>
                    </div>
                    <div class="info-2column">
                        <div class="info-inner">
                            <img src="../../img/guys.png" alt="">
                            <div>99999人</div>
                        </div>
                        <div class="info-inner">
                            <img src="../../img/time.png" alt="">
                            <div>12時間</div>
                        </div>
                    </div>
                    <div class="info-inner">
                        <img src="../../img/folder.png" alt="">
                        <div>スレンダー、美乳、美肌</div>
                    </div>
                </div>
            </div>
            <div class="sienkingaku">
                <div class="sienkingaku-title">支援金額</div>
                <div class="siennkingaku-main">3,111,111円</div>
            </div>
            <article class="percent-area">
                <div class="percent color3"></div>
            </article>
        </a>
            <div class="projsup" >
                <div class="projsup_heart">
                    <heart></heart>
                </div>
                 <div class="supportbutton">
                    <button @click="openModal">応援する</button>
                 </div>
                <div v-show="showContent" @close="showContent = false">
                    <div class="overlay">
                        <div class="overlay-over">
                            <div class="cancel-btn" @click="closeModal">
                                <span class="x x_1"></span>
                                <span class="x x_2"></span>
                            </div>
                            <div class="overlay-overmain">
                                <div class="modal_section" v-if="isActive">
                                <h6 class="modal_title">押し女優さんを応援して表示順位を上げよう！</h6>
                                <form action="">
                                <textarea name="" id="" cols="30" rows="10" placeholder="応援コメントを入力してください" v-model="checkAgree"></textarea>
                                </form>
                                </div>
                                <span class="modal_title_span2" v-show ="checkAgree==false" style="display:block;margin-top:6px;color:#FF0000;">※コメントを入力してください</span>
                            <button  id="btn-2"   @click="active" v-bind:disabled="checkAgree == false" v-if="isActive">送信</button>
                            <!-- ボタンを押したあとの表示 -->
                                <div class="modal_section2" v-else>
                                <h6 class="modal_title">ありがとうございます
                                <span>※コメントは運営確認後に掲載されます</span>
                                </h6>
                                <img class="modal_heart" src="../../img/bigheart.png" alt="" >
                                <button  id="btn-2" @click="closeModal">戻る</button>
                                </div>
                            <!-- ボタンを押したあとの表示終わり -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
  </div>
    `,
    data:function(){
        return {
          showContent:false,
          isActive: true,
          checkAgree: "",
        }　
        },
        methods: {
          openModal(){
              this.showContent = true;
              this.isActive = true;
          },
          closeModal(){
              this.showContent = false;
          },
          active() {
              this.isActive = !this.isActive
            },
  
        }
})


// HOTのとき
// <p class="compo_card_hot_p">
// <img class="compo_card_hot_fire" src="../../img/fire.png" alt="">
// HOT!
// </p>

// 製作中のとき
// <p class="compo_card_hot_p"> 製作中 </p>

// イベントのとき
// <p class="compo_card_hot_p"> イベント </p>







//プロジェクトカード終了
Vue.component('projsellcard',{
    name: "projsellcard" ,
    template:`
    <div class="compo_card relative" >
        <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        <div class="auc_card_inner">
         <a href="../../user/html/user_project_end_detail.html" >
                <div class="gatya_card_title">【新村あかり】念願の脚本家として作品を作りたい</div>
                <div class="proj_card_info">
                    <div class="">
                        <div class="info-inner">
                            <img src="../../img/lady.png" alt="">
                            <div>新村あかり</div>
                        </div>
                        <div class="info-inner">
                            <img src="../../img/pro.png" alt="">
                            <div>投稿者の名前</div>
                        </div>
                        <div class="info-2column">
                            <div class="info-inner">
                                <img src="../../img/guys.png" alt="">
                                <div>99999人</div>
                            </div>
                            <div class="info-inner">
                                <img src="../../img/time.png" alt="">
                                <div>終了</div>
                            </div>
                        </div>
                        <div class="info-inner">
                            <img src="../../img/folder.png" alt="">
                            <div>スレンダー、美乳、美肌</div>
                        </div>
                    </div>
                </div>
                <div class="sienkingaku">
                    <div class="sienkingaku-title">支援金額</div>
                    <div class="siennkingaku-main">3,111,111円</div>
                </div>
                <article class="percent-area">
                    <div class="percent color3"></div>
                </article>
        </a>
         <div class="projsup" >
            <div @click="openModal"　class="sellbutton">販売サイトへ</div>
         </div>
            <div v-show="showContent" @close="showContent = false">
                <div class="overlay">
                    <div class="overlay-over">
                        <div class="cancel-btn" @click="closeModal">
                            <span class="x x_1"></span>
                            <span class="x x_2"></span>
                        </div>
                        <div class="overlay-overmain">
                            <div class="modal_section" >
                            <h6 class="modal_title">販売サイトへ行く</h6>
                            <div class="btn-area">
                                <a href="" class="button2 color3" >販売サイト１</a >
                                <a href="" class="button2 color3" >販売サイト２</a >
                             </div>
                            </div>
                            </div>
                        <!-- ボタンを押したあとの表示終わり -->
                        </div>
                    </div>
                </div>
            </div>
         </div>
  </div>
    `,
    data:function(){
        return {
          showContent:false,
        //   isActive: true
        }
        },
        methods: {
          openModal(){
              this.showContent = true;
              this.isActive = true;
          },
          closeModal(){
              this.showContent = false;
          },
        }
})

// 応援するボタン
Vue.component('supportbutton',{
    name: "supportbutton" ,
    template:`
       <div>
            <div class="supportbutton">
                <button class="supportbutton" @click="openModal">応援する</button>
          
            <div v-show="showContent" @close="showContent = false">
                <div class="overlay">
                    <div class="overlay-over">
                        <div class="cancel-btn" @click="closeModal">
                            <span class="x x_1"></span>
                            <span class="x x_2"></span>
                        </div>
                        <div class="overlay-overmain">
                        <form>
                            <div class="modal_section" v-if="isActive">
                                <h6 class="modal_title">押し女優さんを応援して表示順位を上げよう！</h6>
                                <form action="">
                                <textarea name="" id="" cols="30" rows="10" placeholder="応援コメントを入力してください" v-model="checkAgree"></textarea>
                                </form>
                                </div>
                                <span class="modal_title_span2" v-show ="checkAgree==false" style="display:block;margin-top:6px;color:#FF0000;">※コメントを入力してください</span>
                                <button  id="btn-2" @click="active" v-bind:disabled="checkAgree==false" v-if="isActive">送信</button>
                            <!-- ボタンを押したあとの表示 -->
                            <div class="modal_section2" v-else>
                                <h6 class="modal_title">ありがとうございます<span>※コメントは運営確認後に掲載されます</span></h6>
                                <img class="modal_heart" src="../../img/bigheart.png" alt="" >
                                <button  id="btn-2" @click="closeModal">戻る</button>
                            </div>
                            </form>
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
          isActive: true,
          checkAgree: "",
         
        }
        },
        methods: {
          openModal(){
              this.showContent = true;
              this.isActive = true;
          },
          closeModal(){
              this.showContent = false;
          },
          active() {
              this.isActive = !this.isActive
            },
  
        }
})


