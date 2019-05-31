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
      name: '广东百事泰电子商务股份有限公司',
      expoNum: 'T2',
      logo: 'img/logo.png',
      description: '广东百事泰电子商务股份有限公司（股票简称：百事泰，股票代码：833663）是国内首家国际F2C跨境电商连锁企业，主要从事排插电源类、车载逆变器、以及智能家居家电类产品的研发、生产及跨境电子商务销售。成立11年，百事泰已完成从传统制造企业向现代化互联网企业转型，与全球多家线上线下平台进行深度合作，为深圳市政府评定的F2C标杆企业。2018年将加快海外网店建设及国内外智能家居领域的部署，开启打造全球化智能家居知名品牌新征程。',
      serviceType: [],

    }
    this.setData({
      item: item
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getItemById()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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