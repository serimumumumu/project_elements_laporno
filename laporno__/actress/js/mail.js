Vue.component ('togbutton3',{
  template:`
  <div class="" v-cloak>
    <div >

    <div  class="message">
        <div class="category-title">支援済みプロジェクト</div>
        <div class="mail-icon-area">
          <img  src="../../img/mail.png" alt="">
          <p class="mail-amount">12</p>
        </div>
        <img class="more-btn" :class="{'_state_open': isOpened }" @click="accordingToggle()" src="../../img/arrowdown.png" alt="" >
   </div>
  </div>
       <div class="" v-if="isOpened"><slot name="incontent">ここに押したもの</slot>
    </div>
  </div>
  `,
  data() {
      return {
        isOpened: false
      };
    },
    methods: {
      accordingToggle: function(){
        this.isOpened = !this.isOpened;
      },
    }
})

var togglebutton3 = new Vue ({
  el:"#fortoggle",
  data:function(){
    return {
      isOpened: false,
      showContent:false
    }
    },
    methods: {
      openModal(){
          this.showContent = true;
      },
      closeModal(){
          this.showContent = false;
      },

    }
})