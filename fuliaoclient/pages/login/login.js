// pages/login/login.js
let app = getApp();
// 获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('adminlist');
let name = "";
let password = "";

Page({

  // inputName: function (evt) {
  //   let passwordV = evt.detail.value;
  //   passwordV: passwordV;
  //   this.setData({
  //     passwordV: passwordV,
  //     canLogin: passwordV.length > 0 && "right"
  //   })
  // },

  // _handlerInputAccount: function (evt) {
  //   let accountV = evt.detail.value;
  //   this.setData({
  //     accountV: accountV,
  //     right: accountV.length == 5,
  //     canLogin: this.data.passwordV.length > 0 && accountV.length == 5
  //   })
  // },

  /**
   * 页面的初始数据
   */
  data: {
  },
  //输入用户名
  inputName: function (event) {
    name = event.detail.value
  },
  //输入密码
  inputPwd: function(event) {
    password = event.detail.value
  },
  //登陆
  login() {
    let that = this;
    //登陆获取用户信息
    admin.get({
      success: (res) => {
        let user = res.data;
        console.log(res.data);
        for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
          if (name === user[i].name) { //用户名存在
            if (password !== user[i].password) {  //判断密码是否正确
              wx.showToast({
                title: '密码错误！！',
                icon: 'success',
                duration: 2500
              })
            } else {
              console.log('登陆成功！')
              wx.showToast({
                title: '登陆成功！！',
                icon: 'success',
                duration: 2500
              })
              wx.navigateTo({ 
                url: '/pages/overview/overview',  //这里的URL是你登录完成后跳转的界面
              })
            }
          } else { //不存在
            wx.showToast({
              title: '无此用户名！！',
              icon: 'success',
              duration: 2000
            })
          }
        }
      }
    })
  },

  register() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
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