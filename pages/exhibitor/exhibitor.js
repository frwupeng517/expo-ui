// pages/exhibitor/exhibitor.js
import {HTTP} from '../../utils/http.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    topHeight: 0, // 当前元素距离顶部的高度
    windowWidth: 0, // 窗口的
    windowHeight: 0, // 窗口的
    modalHeight: 0,
    activeTab: 'not', // 是否关注
    activeIndex: -1, // 当前选中的筛选条件
    latitude: '', // 当前所在地经度
    longitude: '', // 当前所在地纬度
    currentNation: '', // 当前所在地国家
    currentCity: '', // 当前所在地城市
    slotName: '',
    tabs: ['品类', '所在地', '人气', '展位状态'],
    catelogItems: [
      { name: '精选', selected: false },
      { name: '食品酒水', selected: false },
      { name: '家用电器', selected: false },
      { name: '3C数码', selected: false },
      { name: '美妆个护', selected: false },
      { name: '母婴童装', selected: false },
      { name: '运动户外', selected: false },
    ],
    // 城市列表
    lists: [
      {
        id: '0', 
        groupName: 'A', 
        items: [
          { id: '0-0', name: '阿巴嘎旗（锡林郭勒盟）', selected: true, hongBao: false, empty: false, star: 0 },
          { id: '0-1', name: '阿坝县', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '0-2', name: '阿尔山（兴安盟）', selected: false, hongBao: true, empty: false, star: 3 }
        ]
      },
      {
        id: '1',
        groupName: 'B',
        items: [
          { id: '1-0', name: '北京', selected: false, hongBao: false, empty: false, star: 5 },
          { id: '1-1', name: '北海', selected: false, hongBao: false, empty: true, star: 0 },
          { id: '1-2', name: '北大荒', selected: false, hongBao: true, empty: false, star: 0 }
        ]
      },
      {
        id: '2',
        groupName: 'C',
        items: [
          { id: '2-0', name: '成都', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '2-1', name: '乘兴而归', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '2-2', name: '蔡甸', selected: false, hongBao: false, empty: true, star: 1 }
        ]
      },
      {
        id: '3',
        groupName: 'D',
        items: [
          { id: '3-0', name: '大兴', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '3-1', name: '大不列颠', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '3-2', name: '大义凛然', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '4',
        groupName: 'E',
        items: [
          { id: '4-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '5',
        groupName: 'F',
        items: [
          { id: '5-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '6',
        groupName: 'G',
        items: [
          { id: '6-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '7',
        groupName: 'H',
        items: [
          { id: '7-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '8',
        groupName: 'I',
        items: [
          { id: '8-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '9',
        groupName: 'J',
        items: [
          { id: '9-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '10',
        groupName: 'K',
        items: [
          { id: '10-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '11',
        groupName: 'L',
        items: [
          { id: '11-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '12',
        groupName: 'M',
        items: [
          { id: '12-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '13',
        groupName: 'N',
        items: [
          { id: '13-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '14',
        groupName: 'O',
        items: [
          { id: '14-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '15',
        groupName: 'P',
        items: [
          { id: '15-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '16',
        groupName: 'Q',
        items: [
          { id: '16-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '17',
        groupName: 'R',
        items: [
          { id: '17-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '18',
        groupName: 'S',
        items: [
          { id: '18-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '19',
        groupName: 'T',
        items: [
          { id: '19-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '20',
        groupName: 'U',
        items: [
          { id: '20-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '21',
        groupName: 'V',
        items: [
          { id: '21-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '22',
        groupName: 'W',
        items: [
          { id: '22-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '23',
        groupName: 'X',
        items: [
          { id: '23-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '24',
        groupName: 'Y',
        items: [
          { id: '24-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '25',
        groupName: 'Z',
        items: [
          { id: '25-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '26',
        groupName: '#',
        items: [
          { id: '26-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
    ],
    // 所在地列表
    locationItems: []
  },
  // 切换 未关注和已关注
  tabChange(e) {
    let tab = e.currentTarget.id
    this.setData({
      activeTab: tab
    })
  },
  // 切换 过滤条件
  toggleFilterContent(e) {
    let id = e.currentTarget.id
    if (this.data.activeIndex == id && this.data.showModal) {
      this.setData({
        showModal: false
      })
      return
    }
    
    switch(id) {
      case '0':
        this.setData({
         slotName: 'catelog'
        })
        break
      case '1':
        // 调用获取所在地列表的方法
        this.initLocationItems()
        this.setData({
          slotName: 'location'
        })
        break
      case '2':
        this.setData({
          slotName: 'popular'
        })
        break
      case '3':
        this.setData({
          slotName: 'status'
        })
        break
    }

    this.setData({
      showModal: true,
      activeIndex: id
    })
    
  },
  // 关闭 过滤条件的弹层
  onCloseModal(e) {
    let showModal = e.detail.behavior.showModal
    this.setData({
      showModal: showModal
    })
  },
  // 选择品类
  chooseCatelog(e) {
    let id = e.currentTarget.id
    if(this.data.catelogItems[id].selected) {
      this.data.catelogItems[id].selected = false
      this.setData({
        catelogItems: this.data.catelogItems
      })
    } else{
      this.data.catelogItems[id].selected = true
      this.setData({
        catelogItems: this.data.catelogItems
      })
    }
  },
  // 重置品类
  resetCatelog(e) {
    this.data.catelogItems.forEach(item => {
      if(item.selected) {
        item.selected = false
      }
    })
    // 取品类 查询数据...
    this.setData({
      catelogItems: this.data.catelogItems
    })
  },
  // 完成品类
  confirmCatelog(e) {
    // 取品类 查询数据...
    this.closeModal()
  },
  // 获取所在地列表
  initLocationItems(){
    let _this = this
    // 省略请求后台获取数据的步骤
    let locationItems = [
      {
        id: '0',
        groupName: '中国',
        selected: false,
        items: [
          { id: '0-0', name: '广州', selected: false },
          { id: '0-1', name: '中山', selected: false },
          { id: '0-2', name: '北京', selected: false },
          { id: '0-3', name: '厦门', selected: false },
          { id: '0-4', name: '杭州', selected: false },
          { id: '0-5', name: '成都', selected: false },
          { id: '0-6', name: '武汉', selected: false }
        ]
      },
      {
        id: '1',
        groupName: '外国',
        selected: false,
        items: [
          { id: '0-0', name: '美国', selected: false },
          { id: '0-1', name: '西班牙', selected: false },
          { id: '0-2', name: '加拿大', selected: false },
          { id: '0-3', name: '毛里求斯', selected: false },
          { id: '0-4', name: '斯里兰卡', selected: false },
          { id: '0-5', name: '蒙古共和国', selected: false },
          { id: '0-6', name: '俄罗斯', selected: false }
        ]
      }
    ]
    
    let countryGroupLists = [], // 提取分类的数组
        cityLists = [] // 提取城市的数组
    locationItems.forEach(item => {
      countryGroupLists.push({ 'name': item.groupName, 'selected': item.selected})
    })

    this.getCurrentCityByLocation()
    // 暂时没有找到成功使用babel的方法，先用定时器来延时，执行完上面的getCurrentCityByLocation方法，再执行下面的内容
    setTimeout(() => { 
      if (this.data.currentNation != '' && this.data.currentCity != '') {
        let selectedGroup = []  // 选中的城市列表
        locationItems.forEach(item => {
          // 这样比不太靠谱，假如腾讯api返回的中华人民共和国，而我们的是中国，就对不上了
          if (item.groupName == _this.data.currentNation) {
            item.selected = true
            selectedGroup = item.items
            let resultIndex = item.items.findIndex(i => {
              return i.name == _this.data.currentCity
            })
            // 如果列表中找不到当前城市，就补进去
            if (resultIndex == -1) {
              item.items.unshift({ name: _this.data.currentCity, selected: true})
            } else if(resultIndex == 0){
              item.items[resultIndex].selected = true
            } else{ // 这两个else操作是为了把当前的城市排到列表的第一位
              let selectedItem = item.items[resultIndex]
              selectedItem.selected = true
              item.items.splice(resultIndex, 1)
              item.items.unshift(selectedItem)
            }
          }
        })

        countryGroupLists.map(item => {
          if (item.name == this.data.currentNation) {
            item.selected = true
          }
        })
        
        this.setData({
          locationItems: locationItems,
          countryGroupLists: countryGroupLists,
          cityLists: selectedGroup
        })
      } else{
        countryGroupLists[0].selected = true
        this.setData({
          currentNation: countryGroupLists[0].name,
          currentCity: locationItems[0].items[0].name,
          locationItems: locationItems,
          countryGroupLists: countryGroupLists,
          cityLists: locationItems[0].items
        })
      }
    }, 200)
  },
  // 获取当前地理位置
  getLocation() {
    let _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  // 发送请求通过经纬度查询地址
  getCurrentCityByLocation() {
    let _this = this
    // 注意：由于getAddressUrl不符合要求，在开发工具右上角 -> 详情 -> 项目设置 -> 勾选了不校验合法域名
    const BASE_URL = 'https://apis.map.qq.com/ws/geocoder/v1/?location='
    // 这个KEY是我个人申请的，每日有访问次数限制，建议以公司名义申请并付费解除次数限制
    const KEY = '6TGBZ-FSWC4-XADUY-XETML-5DTF6-UUBGB'
    let location = this.data.latitude + ',' + this.data.longitude
    let getAddressUrl = BASE_URL + location + '&key=' + KEY + '&get_poi=1'
    http.request({
      url: getAddressUrl,
      success: function (res) {
        let city = res.result.address_component.city,
          nation = res.result.address_component.nation,
          district = res.result.address_component.district // 龙岗区，还可以取地址（不是太准），省份等
        _this.setData({
          currentNation: nation,
          currentCity: city
        })
      }
    })
  },
  // 重置所在地
  resetLocation(e) {
    let locationItems = this.data.locationItems,
        countryGroupLists = this.data.countryGroupLists
    let cityLists = []
    locationItems.forEach(item => {
      if (item.groupName == this.data.currentNation) {
        item.items.forEach(i => {
          if (i.name == this.data.currentCity) {
            i.selected = true
          } else{
            i.selected = false
          }
        })
        cityLists = item.items
      } else{
        item.selected = false
        item.items.forEach(i => {
          i.selected = false
        })
      }
    })
    countryGroupLists.forEach(item => {
      if(item.name == this.data.currentNation) {
        item.selected = true
      } else{
        item.selected = false
      }
    })

    this.setData({
      locationItems: locationItems,
      countryGroupLists: countryGroupLists,
      cityLists: cityLists
    })
  },

  // 完成所在地
  confirmLocation(e) {
    this.closeModal()
  },

  // 关闭弹层
  closeModal() {
    this.setData({
      showModal: false,
      activeIndex: -1
    })
  },

  // 从v-scroll组件接收更新后的滚动列表（点击左侧的radio单选框按钮，有的组件没有这个方法）
  onUpdateScrollItems(e) {
    let scrollItems = e.detail.behavior.scrollItems
    this.setData({
      lists: scrollItems
    })
  },
  // 从v-scroll组件接收更新后的滚动列表
  onUpdateCityLists(e) {
    let scrollItems = e.detail.behavior.scrollItems
    this.setData({
      cityLists: scrollItems
    })
  },
  // 从v-catelog组件接收当前被选中的分类的小标
  onUpdateCatelog(e) {
    let catelog = e.detail.behavior.catelog,
        locationItems = this.data.locationItems,
        groupIndex = catelog.findIndex(item => item.selected == true)
    for (let index in locationItems) {
      if(index == groupIndex) locationItems[index].selected = true
      locationItems[index].selected = false
    }

    // 通过选中的国家列表下标，更新城市列表
    this.setData({
      locationItems: locationItems,
      countryGroupLists: catelog,
      cityLists: locationItems[groupIndex].items
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    let windowWidth = 0, windowHeight = 0
    wx.getSystemInfo({
      success: function(res) {
        windowWidth = res.windowWidth
        windowHeight = res.windowHeight
        _this.setData({
          windowWidth: windowWidth,
          windowHeight: windowHeight
        })
      },
    })
    this.getLocation()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this
    setTimeout(() => {
      let query = wx.createSelectorQuery().in(this)
      query.select('#filter-tab').boundingClientRect(function (rect) {

        _this.setData({
          a: _this.data.windowHeight,
          b: rect.height,
          c: rect.top,
          modalHeight: _this.data.windowHeight - rect.height - rect.top
        })
      }).exec();
    }, 500)
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