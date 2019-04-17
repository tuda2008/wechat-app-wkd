App({
  onLaunch: function () {
    console.log('App Launch')
    if (wx.getStorageSync('hideStartPage').length>0) {
      wx.switchTab({
        url: '/pages/home/index',
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    mobile: '15919984998'
  }
})