    // プロダクションカード
    Vue.component('userproductioncard',{
        template:`
        <div class="compo_card">
            <div>
                  <img src="../../img/demoimg.png" alt="" class="compo_main_img">
             </div>
            <div class="compo_card_inner">
                <a href="../../user/html/user_production_profile.html">
                    <div class="info-inner">
                        <img src="../../img/pro.png" alt="">
                        <div>プロダクションの名前</div>
                    </div>
                </a>
              </div> 
            </div>
        </div>
        `
    })
    // 投稿者カード
    Vue.component('usercontributorcard',{
        template:`
        <div class="compo_card">
            <div>
                  <img src="../../img/demoimg.png" alt="" class="compo_main_img">
             </div>
            <div class="compo_card_inner">
                <a href="../../user/html/user_contributor_profile.html">
                    <div class="info-inner">
                        <img src="../../img/pro.png" alt="">
                        <div>投稿者の名前</div>
                    </div>
                </a>
              </div> 
            </div>
        </div>
        `
    })
    // 女優カード
    Vue.component('useractresscard',{
        template:`
        <div class="compo_card" onclick="location.href='../../user/html/user_actress_profile.html'" style="cursor:pointer">
            <div>
                  <img src="../../img/demoimg.png" alt="" class="compo_main_img">
             </div>
            <div class="compo_card_inner">
                <a href="../../user/html/user_actress_profile.html">
                    <div class="info-inner">
                        <img src="../../img/lady.png" alt="">
                        <div>女優の名前</div>
                    </div>
                    <div class="info-inner">
                        <img src="../../img/pro.png" alt="">
                        <div>プロダクションの名前</div>
                    </div>
                </a>
              </div> 
            </div>
        </div>
        `
    })