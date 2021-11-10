// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'edj-0gccrj1v90dd2d66',
        // traceUser: true,
      });
    }

    this.globalData = {};
  }
});
