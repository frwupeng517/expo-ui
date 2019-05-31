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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换显示服务类型
    toggleServiceType(e) {
      let showServiceType = showServiceType = this.data.showServiceType ? false : true;
      this.setData({
        showServiceType: showServiceType
      });
    }
  }
})
