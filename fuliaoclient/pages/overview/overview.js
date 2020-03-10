// pages/overview/overview.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    materailItems:[{
        id: "0",
        fuliaoming: "车型铭牌薄膜",
        fuliaohao: "33D000105",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "1",
        fuliaoming: "硅胶",
        fuliaohao: "AMV176501",
        kucun: "4桶",
        yuliang: "2020.02.05"
      },{
        id: "2",
        fuliaoming: "厌氧胶",
        fuliaohao: "AMV154103SD004",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "3",
        fuliaoming: "乐泰胶",
        fuliaohao: "AMV200002",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "4",
        fuliaoming: "耐热油",
        fuliaohao: "N05211200EIN",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "5",
        fuliaoming: "油脂",
        fuliaohao: "N05273500",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "6",
        fuliaoming: "5W-40机油",
        fuliaohao: "N05216702",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }, {
        id: "7",
        fuliaoming: "0W-20机油",
        fuliaohao: "N052577A0",
        kucun: "3卷",
        yuliang: "2020.02.05"
      }]
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.materailItems)
    this.setData({
      all_List: this.data.materailItems
    })
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