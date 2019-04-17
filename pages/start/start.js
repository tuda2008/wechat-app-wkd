//start.js
//welcome
var app = getApp();

Page({
  data: {
    remind: '正在玩命加载中',
    angle: 0,
    title: '旺科达光学玻璃',
    currentYear: new Date().getFullYear(),
    userInfo: {}
  },
  goToIndex:function(){
    wx.switchTab({
      url: '/pages/home/index',
    });
  },
  onLoad:function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.title
    })
  },
  onShow:function(){
  },
  onReady: function(){
    var that = this;
    setTimeout(function(){
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(that.data.angle !== angle){
        that.setData({
          angle: angle
        });
      }
    });
    setTimeout(function(){
      wx.switchTab({
        url: '/pages/home/index',
      });
      wx.setStorageSync('hideStartPage', "true");
    }, 4000);
  }
});