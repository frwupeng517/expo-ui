// pages/exhibitorDetail/exhibitorDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {}, // 展商详情信息
  },

  // 根据url中带的id查询展商详情
  getItemById() {
    // ...... 请求后台的查询方法
    let item = {
      name: '顺丰速运有限公司',
      expoNum: 'T01',
      logo: 'img/sf_logo.png',
      description: '1993年，顺丰诞生于广东顺德。自成立以来，顺丰始终专注于服务质量的提升，持续加强基础建设，积极研发和引进具有高科技含量的信息技术与设备以提升自动化水平，在国内外建立了庞大的信息采集，市场开发，物流配送，快件收派等速运业务机构及服务网络。\r\n\n在国际物流服务领域，顺丰致力于为国内外制造企业、贸易企业、跨境电商、以及消费者，提供便捷可靠的国际快递、物流及供应链解决方案。面向中国市场，顺丰国际既帮助中国优秀企业“走出去”，亦将海外优质商品“引进来”。\r\n\n目前顺丰国际提供包括国际标快、国际特惠、国际小包、国际重货、包税仓储、海外仓储、转运等不同类型及时效标准的进出口服务，并可根据客户需求量身定制包括市场准入、运输、清关、派送在内的一体化的进出口解决方案。',
      serviceType: "/pages/exhibitorDetail/img/serviceTypeImg.png",
      businessType: "/pages/exhibitorDetail/img/businessTypeImg.png",

    }
    this.setData({
      item: item
    })
  },
  /**
   * 获取公司名的宽度
   */
  calCompanyNameWidth() {
    let _this = this
    const query = wx.createSelectorQuery()
    query.select('#companyName').boundingClientRect(function(rect){
      let align;
      // 如果屏幕宽度 - 公司名文字宽度 大于100就居中，否则左对齐
      if (_this.data.windowWidth - rect.width > 100) {
        align = 'center'
      } else{
        align = 'left'
      }
      _this.setData({
        companyNameWidth: rect.width,
        companyNameAlign: align
      })
    }).exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getItemById()
    let _this = this
    wx.nextTick(() => {
      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            windowWidth: res.windowWidth
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.nextTick(() => {
      this.calCompanyNameWidth()
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})