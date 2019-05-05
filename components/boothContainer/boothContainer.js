// components/boothContainer/boothContainer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showHongBao: Boolean
  },
  

  /**
   * 组件的初始数据
   */
  data: {
    scrollTop: 100,
    booths: [
      { id: "0", name: "展位A", isFoucs: false, luckyMoney: false },
      { id: "1", name: "展位B", isFoucs: false, luckyMoney: false },
      { id: "2", name: "", isFoucs: false, luckyMoney: true },
      { id: "3", name: "", isFoucs: false, luckyMoney: false },
      { id: "4", name: "", isFoucs: false, luckyMoney: false },
      { id: "5", name: "", isFoucs: false, luckyMoney: false },
      { id: "6", name: "", isFoucs: false, luckyMoney: false },
      { id: "7", name: "", isFoucs: false, luckyMoney: false },
      { id: "8", name: "", isFoucs: false, luckyMoney: false },
      { id: "9", name: "", isFoucs: false, luckyMoney: false },
      { id: "10", name: "", isFoucs: false, luckyMoney: true },
      { id: "11", name: "", isFoucs: false, luckyMoney: false },
      { id: "12", name: "", isFoucs: false, luckyMoney: false },
      { id: "13", name: "", isFoucs: false, luckyMoney: false },
      { id: "14", name: "", isFoucs: false, luckyMoney: false },
      { id: "15", name: "", isFoucs: false, luckyMoney: false },
      { id: "16", name: "", isFoucs: false, luckyMoney: true },
      { id: "17", name: "", isFoucs: false, luckyMoney: false },
      { id: "18", name: "", isFoucs: false, luckyMoney: false },
      { id: "19", name: "", isFoucs: false, luckyMoney: false },
      { id: "20", name: "", isFoucs: false, luckyMoney: true },
      { id: "21", name: "", isFoucs: false, luckyMoney: false },
      { id: "22", name: "", isFoucs: false, luckyMoney: false },
      { id: "23", name: "", isFoucs: false, luckyMoney: false },
      { id: "24", name: "", isFoucs: false, luckyMoney: true },
      { id: "25", name: "", isFoucs: false, luckyMoney: false },
      { id: "26", name: "", isFoucs: false, luckyMoney: false },
      { id: "27", name: "", isFoucs: false, luckyMoney: false },
      { id: "28", name: "", isFoucs: false, luckyMoney: false },
      { id: "29", name: "", isFoucs: false, luckyMoney: true },
      { id: "30", name: "", isFoucs: false, luckyMoney: false },
      { id: "31", name: "", isFoucs: false, luckyMoney: false },
      { id: "32", name: "", isFoucs: false, luckyMoney: false },
      { id: "33", name: "", isFoucs: false, luckyMoney: false },
      { id: "34", name: "", isFoucs: false, luckyMoney: false },
      { id: "35", name: "", isFoucs: false, luckyMoney: false },
      { id: "36", name: "", isFoucs: false, luckyMoney: false },
      { id: "37", name: "", isFoucs: false, luckyMoney: false },
      { id: "38", name: "", isFoucs: false, luckyMoney: false },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onFoucsBoothEvent(event) {
      console.log(event)
      let id = event.detail.behavior.id
      let isFoucs = event.detail.behavior.isFoucs
      console.log(id)
      this.data.booths.map(item => {
        if (item.id == id) {
          item.isFoucs = isFoucs
        }
      })

      this.setData({
        booths: this.data.booths
      })
    },
  }
})
