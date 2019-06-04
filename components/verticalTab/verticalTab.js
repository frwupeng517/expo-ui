// components/verticalTab/verticalTab.js
let myBehavior = require("../behaviors/my-behavior.js")
Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: -1,
    tabLists: [
      { src: "./img/location.png", selected: "./img/location_selected.png", name: "我的位置" },
      { src: "./img/shop.png", selected: "./img/shop_selected.png", name: "关注店铺" },
      { src: "./img/tuijian.png", selected: "./img/tuijian_selected.png", name: "推荐路线" },
      { src: "./img/hongbao.png", selected: "./img/hongbao_selected.png", name: "展位红包" },
      { src: "./img/remen.png", selected: "./img/remen_selected.png", name: "热门区域" },
      { src: "./img/youxuanluxian.png", selected: "./img/youxuanluxian_selected.png", name: "我的路线" },
      { src: "./img/fuwu.png", selected: "./img/fuwu_selected.png", name: "服务设施" }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectItem(e) {
      let index = e.currentTarget.dataset.index,
          original_booths = [
            { id: "0", name: "", isFoucs: false, luckyMoney: false },
            { id: "1", name: "", isFoucs: false, luckyMoney: false },
            { id: "2", name: "", isFoucs: false, luckyMoney: true },
            { id: "3", name: "", isFoucs: false, luckyMoney: false },
            { id: "4", name: "", isFoucs: false, luckyMoney: false },
            { id: "5", name: "展位A", isFoucs: false, luckyMoney: false },
            { id: "6", name: "", isFoucs: false, luckyMoney: false },
            { id: "7", name: "", isFoucs: false, luckyMoney: false },
            { id: "8", name: "", isFoucs: false, luckyMoney: false },
            { id: "9", name: "展位B", isFoucs: false, luckyMoney: false },
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
            { id: "38", name: "", isFoucs: false, luckyMoney: false }
          ]
      this.setData({
        current: index
      })
      // 获取我的位置
      if(index == 0) {
        // this.getMyLocation()
        let behavior = {
          showMyLocation: true,
          showRecommend: false,
          showHongBao: false,
          showMyLine: false,
          showServiceModal: false,
          showHotArea: false,
          booths: original_booths
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      } 
      // else{
      //   let behavior = {
      //     showMyLocation: false
      //   }
      //   this.triggerEvent('showMyLocationEvent', {
      //     behavior: behavior
      //   }, {})
      // }

      // 关注店铺
      if(index == 1) {
        let behavior = {
          showMyLocation: false,
          showRecommend: false,
          showHongBao: false,
          showMyLine: false,
          showServiceModal: false,
          showHotArea: false,
          booths: [
            { id: "0", name: "", isFoucs: false, luckyMoney: false },
            { id: "1", name: "", isFoucs: false, luckyMoney: false },
            { id: "2", name: "", isFoucs: false, luckyMoney: true },
            { id: "3", name: "", isFoucs: false, luckyMoney: false },
            { id: "4", name: "", isFoucs: false, luckyMoney: false },
            { id: "5", name: "展位A", isFoucs: true, luckyMoney: false },
            { id: "6", name: "", isFoucs: false, luckyMoney: false },
            { id: "7", name: "", isFoucs: false, luckyMoney: false },
            { id: "8", name: "", isFoucs: false, luckyMoney: false },
            { id: "9", name: "展位B", isFoucs: false, luckyMoney: false },
            { id: "10", name: "", isFoucs: false, luckyMoney: true },
            { id: "11", name: "关注2", isFoucs: true, luckyMoney: false },
            { id: "12", name: "关注3", isFoucs: true, luckyMoney: false },
            { id: "13", name: "", isFoucs: false, luckyMoney: false },
            { id: "14", name: "", isFoucs: false, luckyMoney: false },
            { id: "15", name: "", isFoucs: false, luckyMoney: false },
            { id: "16", name: "", isFoucs: false, luckyMoney: true },
            { id: "17", name: "", isFoucs: false, luckyMoney: false },
            { id: "18", name: "", isFoucs: false, luckyMoney: false },
            { id: "19", name: "", isFoucs: false, luckyMoney: false },
            { id: "20", name: "", isFoucs: false, luckyMoney: true },
            { id: "21", name: "关注4", isFoucs: true, luckyMoney: false },
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
            { id: "32", name: "关注5", isFoucs: true, luckyMoney: false },
            { id: "33", name: "关注6", isFoucs: true, luckyMoney: false },
            { id: "34", name: "", isFoucs: false, luckyMoney: false },
            { id: "35", name: "", isFoucs: false, luckyMoney: false },
            { id: "36", name: "", isFoucs: false, luckyMoney: false },
            { id: "37", name: "", isFoucs: false, luckyMoney: false },
            { id: "38", name: "", isFoucs: false, luckyMoney: false },
          ]
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      } 
      // else{
      //   let behavior = {
      //     booths: original_booths
      //   }
      //   this.triggerEvent('showFocusBooth', {
      //     behavior: behavior
      //   }, {})
      // }

      // 推荐路线
      if(index == 2) {
        let behavior = {
          showRecommend: true,
          showHongBao: false,
          showMyLocation: false,
          showMyLine: false,
          showServiceModal: false,
          showHotArea: false,
          booths: [
            { id: "0", name: "", isFoucs: false, luckyMoney: false },
            { id: "1", name: "", isFoucs: false, luckyMoney: false },
            { id: "2", name: "", isFoucs: false, luckyMoney: true },
            { id: "3", name: "", isFoucs: false, luckyMoney: false },
            { id: "4", name: "", isFoucs: false, luckyMoney: false },
            { id: "5", name: "华为手机P30", isFoucs: true, luckyMoney: false },
            { id: "6", name: "", isFoucs: false, luckyMoney: false },
            { id: "7", name: "", isFoucs: false, luckyMoney: false },
            { id: "8", name: "", isFoucs: false, luckyMoney: false },
            { id: "9", name: "", isFoucs: false, luckyMoney: false },
            { id: "10", name: "", isFoucs: false, luckyMoney: true },
            { id: "11", name: "", isFoucs: false, luckyMoney: false },
            { id: "12", name: "", isFoucs: false, luckyMoney: false },
            { id: "13", name: "", isFoucs: false, luckyMoney: false },
            { id: "14", name: "展位D", isFoucs: false, luckyMoney: false },
            { id: "15", name: "", isFoucs: false, luckyMoney: false },
            { id: "16", name: "", isFoucs: false, luckyMoney: true },
            { id: "17", name: "", isFoucs: false, luckyMoney: false },
            { id: "18", name: "展位E", isFoucs: false, luckyMoney: false },
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
            { id: "38", name: "", isFoucs: false, luckyMoney: false }
          ]
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      } 
      // else{
      //   let behavior = {
      //     showRecommend: false,
      //     booths: original_booths
      //   }
      //   this.triggerEvent('showRecommendWay', {
      //     behavior: behavior
      //   }, {})
      // }

      // 展位红包
      if(index == 3) {
        // this.toggleDisplayHongBao()
        let behavior = {
          showHongBao: true,
          showMyLocation: false,
          showRecommend: false,
          showMyLine: false,
          showServiceModal: false,
          showHotArea: false,
          booths: original_booths
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      } 
      // else{
      //   let behavior = {
      //     showHongBao: false
      //   }
      //   this.triggerEvent('showHongBaoEvent', {
      //     behavior: behavior
      //   }, {})
      // }

      // 热门区域
      if(index == 4) {
        let behavior = {
          showHongBao: false,
          showMyLocation: true,
          showRecommend: false,
          showMyLine: false,
          showServiceModal: false,
          showHotArea: true,
          booths: original_booths
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      }

      // 我的路线
      if(index == 5) {
        let behavior = {
          showMyLine: true,
          showHongBao: false,
          showMyLocation: false,
          showRecommend: false,
          showServiceModal: false,
          showHotArea: false,
          booths: [
            { id: "0", name: "", isFoucs: false, luckyMoney: false },
            { id: "1", name: "", isFoucs: false, luckyMoney: false },
            { id: "2", name: "", isFoucs: false, luckyMoney: true },
            { id: "3", name: "", isFoucs: false, luckyMoney: false },
            { id: "4", name: "", isFoucs: false, luckyMoney: false },
            { id: "5", name: "展位A", isFoucs: false, luckyMoney: false },
            { id: "6", name: "", isFoucs: false, luckyMoney: false },
            { id: "7", name: "", isFoucs: false, luckyMoney: false },
            { id: "8", name: "", isFoucs: false, luckyMoney: false },
            { id: "9", name: "展位B", isFoucs: false, luckyMoney: false },
            { id: "10", name: "", isFoucs: false, luckyMoney: true },
            { id: "11", name: "", isFoucs: false, luckyMoney: false },
            { id: "12", name: "", isFoucs: false, luckyMoney: false },
            { id: "13", name: "", isFoucs: false, luckyMoney: false },
            { id: "14", name: "", isFoucs: false, luckyMoney: false },
            { id: "15", name: "", isFoucs: false, luckyMoney: false },
            { id: "16", name: "展位1", isFoucs: false, luckyMoney: true, visited: true },
            { id: "17", name: "", isFoucs: false, luckyMoney: false },
            { id: "18", name: "展位7", isFoucs: false, luckyMoney: false, visited: true },
            { id: "19", name: "展位6", isFoucs: false, luckyMoney: false, visited: true },
            { id: "20", name: "展位2", isFoucs: false, luckyMoney: true, visited: true },
            { id: "21", name: "", isFoucs: false, luckyMoney: false },
            { id: "22", name: "", isFoucs: false, luckyMoney: false },
            { id: "23", name: "展位5", isFoucs: false, luckyMoney: false, visited: true },
            { id: "24", name: "展位3", isFoucs: false, luckyMoney: true, visited: true },
            { id: "25", name: "", isFoucs: false, luckyMoney: false },
            { id: "26", name: "展位4", isFoucs: false, luckyMoney: false, visited: true },
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
            { id: "38", name: "", isFoucs: false, luckyMoney: false }
          ]
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      } 
      // else{
      //   let behavior = {
      //     showMyLine: false,

      //     booths: original_booths
      //   }
      //   this.triggerEvent('showMyLineEvent', {
      //     behavior: behavior
      //   }, {})
      // }

      // 服务设施
      if(index == 6) {
        let behavior = {
          showHongBao: false,
          showMyLocation: false,
          showRecommend: false,
          showMyLine: false,
          showServiceModal: true,
          showHotArea: false,
          booths: original_booths
        }
        this.triggerEvent('showVerticalEvent', {
          behavior: behavior
        }, {})
      }
    },
    // 获取我的位置
    getMyLocation() {
      
    },
    // 过滤出我关注的店铺
    getMyFoucsShops() {

    }
  }
})
