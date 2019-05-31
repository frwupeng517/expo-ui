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
      let index = e.currentTarget.dataset.index
      console.log(index)
      this.setData({
        current: index
      })
      // 获取我的位置
      if(index == 0) {
        // this.getMyLocation()
        let behavior = {
          showMyLocation: true
        }
        this.triggerEvent('showMyLocationEvent', {
          behavior: behavior
        }, {})
      } else{
        let behavior = {
          showMyLocation: false
        }
        this.triggerEvent('showMyLocationEvent', {
          behavior: behavior
        }, {})
      }

      // 关注店铺
      if(index == 1) {
        console.log(e)
      }

      // 展位红包
      if(index == 3) {
        // this.toggleDisplayHongBao()
        let behavior = {
          showHongBao: true
        }
        this.triggerEvent('showHongBaoEvent', {
          behavior: behavior
        }, {})
      } else{
        let behavior = {
          showHongBao: false
        }
        this.triggerEvent('showHongBaoEvent', {
          behavior: behavior
        }, {})
      }

      // 服务设施
      if(index == 6) {
        let behavior = {
          showServiceModal: true
        }
        this.triggerEvent('customevent', {
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
