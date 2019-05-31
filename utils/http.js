class HTTP{
  constructor() {

  }

  request(params) {
    let _this = this
    if(!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: params.url,
      data: params.data ? params.data : '',
      method: params.method,
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.success && params.success(res.data);
        } else {
          params.error && params.error(res);
        }
      },
      fail: function (err) {
        params.fail && params.fail(err)
      }
    })
  }
}

export { HTTP };