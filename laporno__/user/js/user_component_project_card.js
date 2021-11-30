Vue.component('userprojectcard',{
    name: "userprojectcard" ,
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
            <div class="proj_card_title">【新村あかり】念願の脚本家として作品を作りたい</div>
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
                <div class="favorite-icon" v-if="isActiveHeart" @click="changeHeart">
                <img src="../../img/favheart.png" alt="">
            </div>
            <div class="favorite-icon" v-else @click="changeHeart">
                <img src="../../img/favedheart.png" alt="">
            </div>
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
          isActiveHeart: true,
        }　
        },
        methods: {
            changeHeart() {
                this.isActiveHeart = !this.isActiveHeart
            },
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
Vue.component('userprojectendcard',{
    name: "userprojectendcard" ,
    template:`
    <div class="compo_card relative" >
        <img src="../../img/demoimg.png" alt="" class="compo_main_img">
        <div class="auc_card_inner">
         <a href="../../user/html/user_project_end_detail.html" >
                <div class="proj_card_title">【新村あかり】念願の脚本家として作品を作りたい</div>
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
