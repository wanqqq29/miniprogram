Page({ 
 data: {
catname:"第谷",
 catitems:[ 
{category:"昵称",
 content:" 没鼻子",},
{category:"毛色",
 content:" 橘",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2018夏",},
{category:"外貌",
 content:" 伏地魔般的鼻子",},
{category:"性格",
 content:" 怕人 安全距离1m以内",},
{category:"第一次被目击时间",
 content:" 2018夏",},
{category:"关系",
 content:" 和花袭人关系很好",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"花袭人"},
], 
nums:[
]},
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index?pageId='+this.data.catname,//这里在首页的地址后面添加我们需要传值的标识位pageId以及值123(pageId 这个名字你们可以自己随便乱取 如同一个变量名)
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

