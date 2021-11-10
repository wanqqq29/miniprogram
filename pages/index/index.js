Page({
  data: {
    fostered_catlist: [],
    unknown_catlist: [
    ],
    dead_catlist: [
    ],
    at_school: [],
    typegroup: [],
    searchString:'',
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星'],
    currentTab: 0,
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },


  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },


  onLoad: function (options) {
    const db = wx.cloud.database()
    const $ = db.command.aggregate
    //查询在校miao列表
    db.collection("miao").where({
        group: 'atschool'
      }).get().then(res => { //请求成功
        this.setData({
          at_school: res.data
        })
      })
      .catch(err => { //请求失败
        console.log(err)
      })

    //查询数据库中所有的毛色
    db.collection("miao").aggregate().group({
        _id: null,
        typegroup: $.addToSet('$type'),
        typeavator: $.addToSet('$type_avator')
      }).end()
      .then(res => { //请求成功
        this.setData({
          typegroup: res.list[0].typegroup
        })
      })
      .catch(err => { //请求失败
        console.log(err)
      })
      //获取毕业miao
      db.collection('miao').where({
        group: 'fostered'
      }).get().then(res => {
        this.setData({
          fostered_catlist: res.data
        })
      })
      //获取休学miao
      db.collection('miao').where({
        group: 'unknown'
      }).get().then(res => {
        this.setData({
          unknown_catlist: res.data
        })
      })
       //获取喵星miao
       db.collection('miao').where({
        group: 'dead'
      }).get().then(res => {
        this.setData({
          dead_catlist: res.data
        })
      })
  },




  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index', // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index', // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    if (e.detail.value) {
      wx.navigateTo({
        url: '/pages/cat/cat?name='+e.detail.value
      })
    }
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '北大猫协', //需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

})