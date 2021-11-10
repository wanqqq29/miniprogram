// pages/index/cat/cat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cname: '',
    flag: true,
    miaopf: {},
    isplay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    const $ = db.command.aggregate
    //查询miao详细信息
    db.collection("miao").where({
      name: options.name
    }).get().then(res => { //请求成功
      if (res.data[0] != undefined) {
        this.setData({
          miaopf: res.data[0]
        })
      } else {
        this.setData({
          flag:false
        })
      }


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