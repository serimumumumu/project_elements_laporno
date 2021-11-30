// ガチャパターンセット
Vue.component('gacha-set-gift-pattern', {
  template:`
  <div>
    <div class="gacha-amount-input-parents">
      <div v-for="(pattern, index) in freebiePatterns" class="gacha-amount-input">
          <div class="actress_input">
              <p class="sub-title_nom">女優</p>
              <select @change="selectActress(index)" v-model="pattern.actressId" class="select">
              <option v-for="actress in actresses" :value="actress.id">{{ actress.name }}</option>
              </select>
          </div>
          <div>
              <span class="batsu"></span>
          </div>
          <div class="type_input">
              <p class="sub-title_nom" >タイプ</p>
              <select v-model="pattern.type" class="select" disabled>
                  <option v-for="type in types" :value="type">{{ type }}</option>
              </select>
          </div>
          <div>
              <span class="batsu"></span>
          </div>
          <div class="amount_input">
              <p class="sub-title_nom" >数量</p>
              <input @change="setTotalQty()" v-model="freebiePatterns[index].qty" type="number" class="qty">
          </div>
          <div>
              <span @click="deletePattern(index)" class="delete_button"></span>
          </div>
      </div>
      <button @click="addPattern()" class="newfreebie_button"><img src="../../img/plus.png">新規追加</button>
    </div>
    <div class="scard-content-box">
      <p class="sub-title">総合計数</p>
      <p class="total_amount">{{totalQty}}</p>
      <!-- <input v-model="totalQty" class="radio-input" disabled> -->
    </div>
  </div>`,
  data: function() {
    return {
      actresses: [
        {'id': 1, 'name': '女優名A', 'count': 0 },
        {'id': 2, 'name': '女優名B', 'count': 0 },
        {'id': 3, 'name': '女優名C', 'count': 0 },
      ],
      types: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      patternDefault: { actressId: null, type: null, qty: null },
      freebiePatterns: [
          { actressId: null, type: null, qty: null }
      ],
      totalQty: 0,
    }
  },
  methods: {
    addPattern(){
        this.freebiePatterns.push(JSON.parse(JSON.stringify(this.patternDefault)))
    },
    deletePattern(index){
        this.freebiePatterns.splice(index, 1)
        this.selectActress()
        this.setTotalQty()
    },
    //景品パターンの女優を選択したイベント
    selectActress(){
        let countByActress = [] //key = 女優ID、value = count
        self = this
        this.freebiePatterns.forEach((pattern, index) => {
            if (pattern.actressId === null) return //女優指定なしならスキップ
            if(typeof countByActress[pattern.actressId] != 'undefined') {
                // countByActress[pattern.actressId]がすでに存在するなら1プラス
                countByActress[pattern.actressId] += 1
            } else {
                // countByActress[pattern.actressId]が存在しないなら0で宣言
                countByActress[pattern.actressId] = 0
            }
            //countByActressの値をself.typesのキーと紐付けてタイプを決定する
            if (typeof self.types[countByActress[pattern.actressId]] != 'undefined') {
                self.$set(self.freebiePatterns[index], ['type'], self.types[countByActress[pattern.actressId]])
            } else {
                //タイプ数がZ以上になる場合
                //TODO：タイプ数が多すぎますのメッセージ出力？
            }
        })
    },
    setTotalQty() {
        self = this
        self.totalQty = 0 
        this.freebiePatterns.forEach((pattern, index) => {
            self.totalQty += Number(pattern.qty)
        })
    }
  }
})