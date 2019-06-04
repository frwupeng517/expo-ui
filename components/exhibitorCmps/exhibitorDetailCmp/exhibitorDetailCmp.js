// components/exhibitorCmps/exhibitorDetailCmp/exhibitorDetailCmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    showServiceType: false, // 展示服务类型
    showBusinessType: false, // 业务类型
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换显示服务类型
    toggleDetailContent(e) {
      let type = e.currentTarget.dataset.type
      if(type == "serviceType") { // 服务类别
        let showServiceType = this.data.showServiceType ? false : true
        this.setData({
          showServiceType: showServiceType
        })
      } else if(type == "businessType") { // 业务类型
        let showBusinessType = this.data.showBusinessType ? false : true
        this.setData({
          showBusinessType: showBusinessType
        })
      }
    }
  }
})
