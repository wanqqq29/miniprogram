// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    chosen: '',
    groupFlag: 'atschool',
    nojjflag: false,
    first_see_date: '点击选择',
    SendDate: '点击选择',
    tempFilePaths: '',
    tempFilePaths2: '',
    avator_url: '',
    picurl: [],
    form_data: {}
  },

  groupChange: function (e) {
    this.setData({
      groupFlag: e.detail.value
    })
    console.log(this.data.groupFlag)
  },
  bindFirstSeeDataChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      first_see_date: e.detail.value
    })
  },
  bindSendDataChange: function (e) {
    console.log(e.detail);
    this.setData({
      SendDate: e.detail.value
    })
  },
  nojjchange: function (e) {
    console.log(e.detail);
    this.setData({
      nojjflag: e.detail.value
    })
  },

  upload_avator: function (e) {
    const _that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        _that.setData({
          tempFilePaths: res.tempFilePaths
        })
        console.log(_that.data.tempFilePaths)
      }
    })
  },
  upload_pic: function (e) {
    const _that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        _that.setData({
          tempFilePaths2: res.tempFilePaths
        })
        console.log(_that.data.tempFilePaths2)
      }
    })

  },


  formSubmit(e) {
    this.setData({
      form_data: e.detail.value
    })

    // 绝育状态修改：
    if (this.data.form_data.nojj_statue == false) {
      this.data.form_data.nojj_statue = '未绝育'
    } else if (this.data.form_data.nojj_statue == true) {
      this.data.form_data.nojj_statue = '已绝育'
    }
    //关系状态
    const mm = this.data.form_data.m.split(" ");
    this.data.form_data['realtionshap'] = [{
      'text': this.data.form_data.relationship,
      'm': mm
    }]

    const db = wx.cloud.database()
    if (this.data.form_data.name) {

      //上传猫咪头像
      wx.cloud.uploadFile({
        cloudPath: 'miao/avator/' + this.data.tempFilePaths[0].slice(12),
        filePath: this.data.tempFilePaths[0],
        success: res => {
          console.log(res.fileID);
          this.setData({
            avator_url: res.fileID,
          })
          this.data.form_data['avator_url'] = this.data.avator_url
          console.log(this.data.form_data)
        },
        fail: console.error
      })

      //上传猫咪照片
      for (var i = 0; i < this.data.tempFilePaths2.length; i++) {
        wx.cloud.uploadFile({
          cloudPath: 'miao/pic/' + this.data.tempFilePaths2[i].slice(12),
          filePath: this.data.tempFilePaths2[i],
          success: res => {
            this.data.picurl.push(res.fileID)
          }
        })
        this.data.form_data['header_pic'] = this.data.picurl[0]
        this.data.form_data['picurl'] = this.data.picurl
        //添加猫咪记录
        db.collection('miao').add({
          data: this.data.form_data
        }).then(res => {
          console.log(res);
          console.log(this.data.form_data)
        })
        wx.showToast({
          title: '添加成功',
        })
      }
    } else {
      wx.showToast({
        title: '猫咪姓名不存在',
      })
    }
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
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