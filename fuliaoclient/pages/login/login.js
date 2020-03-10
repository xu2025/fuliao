// pages/login/login.js
Page({
  // _handlerAutoLogin: function (evt) {
  //   console.log(evt)
  //   if (evt.detail.value.length > 0) {
  //     //被选中，应该，选中另外一个 记住密码
  //     this.setData({
  //       rememberPwd: true
  //     })
  //   }
  // },

  // _handlerRememberPwd: function (evt) {
  //   console.log(evt)
  //   if (evt.detail.value.length == 0) {
  //     //取消的时候，应该取消自动登录
  //     this.setData({
  //       autoLogin: false
  //     })
  //   }
  // },

  _handlerInputPwd: function (evt) {
    let passwordV = evt.detail.value;
    passwordV: passwordV;
    this.setData({
      passwordV: passwordV,
      canLogin: passwordV.length > 0 && "right"
    })
  },

  _handlerInputAccount: function (evt) {
    let accountV = evt.detail.value;
    this.setData({
      accountV: accountV,
      right: accountV.length == 5,
      canLogin: this.data.passwordV.length > 0 && accountV.length == 5
    })
  },

  _handlerSubmit: function (evt) {
    console.log(evt)
  },
  /**
   * 页面的初始数据
   */
  data: {
    accountV: "",
    passwordV: "",
    right: false,
    canLogin: false,
    // autoLogin: false,
    // rememberPwd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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