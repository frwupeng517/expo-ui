// components/baseCmps/vCatelog/vCatelog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    catelog: Array, // 左侧分类数组，如：已完成和未完成
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentCatelogIndex: 0, // 当前被选中分类下标
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换分类
    toggleCatelog(e) {
      let index = e.currentTarget.dataset.index,
          catelog = this.properties.catelog
      for(let key in catelog) {
        if(index == key) {
          if (catelog[key].selected) return
          catelog[key].selected = true
        } else{
          catelog[key].selected = false
        }
      }

      let behavior = {
        catelog: catelog
      }
      this.triggerEvent('updateCatelog', {
        behavior: behavior
      }, {})
    }
  }
})
