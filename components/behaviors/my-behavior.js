module.exports = Behavior({
  behaviors: [],
  properties: {
    
  },
  data: {
    showHongBao: false
  },
  attached: function () {

  },
  methods: {
    toggleDisplayHongBao() {
      this.setData({
        showHongBao: !this.data.showHongBao
      })
      console.log(this.data.showHongBao)
    }
  }
})