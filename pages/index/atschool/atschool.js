Page({
  data: {
    // all_miao: [{
    //     "_id": "9e7190f16188be8304504f9c13648271",
    //     "header_pic": "",
    //     "name": "薏米",
    //     "type": "纯色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "8e170652618a371103514d8b5512610e",
    //     "header_pic": "",
    //     "name": "薏米米",
    //     "type": "杂色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "fb341477618a377200378535344edaf9",
    //     "header_pic": "",
    //     "name": "薏薏米",
    //     "type": "纯色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "fb341477618a377200378536464201fc",
    //     "header_pic": "",
    //     "name": "米薏米",
    //     "type": "色纯",
    //     "sex": "公",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "fb341477618a3772003785374f629735",
    //     "header_pic": "",
    //     "name": "薏米薏",
    //     "type": "黄色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "83cfc1ac618b1f7e0208926924221ebc",
    //     "header_pic": "",
    //     "name": "薏薏米",
    //     "type": "黑色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "83cfc1ac618b1f7e0208926a2a346267",
    //     "header_pic": "",
    //     "name": "米薏米",
    //     "type": "色纯",
    //     "sex": "公",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   },
    //   {
    //     "_id": "83cfc1ac618b1f7e0208926b30a56458",
    //     "header_pic": "",
    //     "name": "薏米薏",
    //     "type": "黄色",
    //     "sex": "母",
    //     "group": "atschool",
    //     "color": "长毛白色",
    //     "health_statue": "健康",
    //     "nojj_statue": "已绝育",
    //     "nojj_time": "2019-03-13",
    //     "first_see": "2019寒假",
    //     "apprence": "异瞳小白猫 蓝黄异瞳 右耳耳缺",
    //     "realtionshap": [{
    //       "text": "跟夜色关系好",
    //       "m": [{
    //         "avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //         "name": "夜色"
    //       }]
    //     }],
    //     "more": "",
    //     "lost_time": "",
    //     "send_time": "",
    //     "picurl": [
    //       "1"
    //     ],
    //     "avator_url": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png",
    //     "type_avator": "cloud://edj-0gccrj1v90dd2d66.6564-edj-0gccrj1v90dd2d66-1300163012/miao/avator/花灵灵_circle.png"
    //   }
    // ],
    all_miao:[],
    fostered_catlist: [],
    unknown_catlist: [],
    dead_catlist: [],
    atschool_catList: [],
    typegroup: [],
    avatorgroup: [],
    typeindex: [],
    searchString: '',
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    flag: '',
    // navbar: [{'zh':'在校','en':'atschool'}, {'zh':'毕业','en':'fostered'},{'zh':'休学','en':'unknown'},{'zh':'喵星','en':'dead'}],
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

    // 查询所有miao
    db.collection("miao").get().then(res => {
      console.log(res.data)
      this.setData({
        all_miao: res.data
      })
      for (var i = 0; i < this.data.all_miao.length; i++) {
        if (this.data.all_miao[i].group == 'atschool') {
          this.data.atschool_catList.push(this.data.all_miao[i]) //atschool_catList 
        } else if (this.data.all_miao[i].group == 'fostered') {
          this.data.fostered_catlist.push(this.data.all_miao[i]) //fostered_catlist
        } else if (this.data.all_miao[i].group == 'unknow') {
          this.data.unknown_catlist.push(this.detail.all_miao[i]) //unknown_catlist
        } else if (this.data.all_miao[i].group == 'dead') {
          this.data.dead_catlist.push(this.data.all_miao[i]) //dead_catlist
        }
      }
  
      //查询在校miao种类
      for (var i = 0; i < this.data.atschool_catList.length; i++) {
        if (this.data.typegroup.includes(this.data.atschool_catList[i].type)) {} else {
          this.data.typegroup.push(this.data.atschool_catList[i].type)
          this.data.typeindex.push({
            "typename": this.data.atschool_catList[i].type,
            "typeurl": this.data.atschool_catList[i].avator_url
          })
          console.log(this.data.typeindex);
  
        }
      }
      for (var i = 0; i < this.data.typegroup; i++) {}
      this.setData({
        atschool_catList: this.data.atschool_catList,
        fostered_catlist: this.data.fostered_catlist,
        unknown_catlist: this.data.unknown_catlist,
        dead_catlist: this.data.dead_catlist,
        typeindex: this.data.typeindex,
      })
    })
    



    // //查询在校miao列表
    // db.collection("miao").where({
    //     group: 'atschool'
    //   }).get().then(res => { //请求成功
    //     this.setData({
    //       at_school: res.data
    //     })
    // for (var i = 0; i < this.data.at_school.length; i++) {
    //   if (this.data.typegroup.includes(this.data.at_school[i].type)) {

    //   } else {
    //     this.data.typegroup.push(this.data.at_school[i].type)
    //     this.data.avatorgroup.push(this.data.at_school[i].avator_url)
    //   }
    // }
    //     console.log(this.data.typegroup)
    //     console.log(this.data.avatorgroup)

    //   })
    //   .catch(err => { //请求失败
    //     console.log(err)
    //   })

    //查询数据库中所有的毛色
    // db.collection("miao").aggregate().group({
    //     _id: null,
    //     typegroup: $.addToSet('$type'),
    //     typeavator: $.addToSet('$type_avator')
    //   }).end()
    //   .then(res => { //请求成功
    //     this.setData({
    //       typegroup: res.list[0].typegroup
    //     })
    //   })
    //   .catch(err => { //请求失败
    //     console.log(err)
    //   })


    // //获取毕业miao
    // db.collection('miao').where({
    //   group: 'fostered'
    // }).get().then(res => {
    //   this.setData({
    //     fostered_catlist: res.data
    //   })
    // })
    // //获取休学miao
    // db.collection('miao').where({
    //   group: 'unknown'
    // }).get().then(res => {
    //   this.setData({
    //     unknown_catlist: res.data
    //   })
    // })
    // //获取喵星miao
    // db.collection('miao').where({
    //   group: 'dead'
    // }).get().then(res => {
    //   this.setData({
    //     dead_catlist: res.data
    //   })
    // })
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
        url: '/pages/cat/cat?name=' + e.detail.value
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