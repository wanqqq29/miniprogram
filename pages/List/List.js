// pages/List/List.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctype:'',
    catList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type!='all'){
      wx.cloud.database().collection("miao").where({
        type:options.type,
        group:'atschool'
      }).get()
        .then(res => { //请求成功
          this.setData({
            catList:res.data
          })
        })
        .catch(err => { //请求失败
          console.log(err)
        })
    }else{
      wx.cloud.database().collection("miao").where({
        group:'atschool'
      }).get()
        .then(res => { //请求成功
          this.setData({
            catList:res.data
          })
        })
        .catch(err => { //请求失败
          console.log(err)
        })
    }
    
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