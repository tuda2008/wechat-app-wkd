//index.js
//partners
var app = getApp();
Page({
    data: {
        local_carousels: true,
        carousels: [
        {'url': '/images/home/carousel/factory1.jpg'}, 
        {'url': '/images/home/carousel/factory1.jpg'},
        {'url': '/images/home/carousel/factory1.jpg'}
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        partners: [
        {'id': 1, 'title': '明德电子', 'web_url': ''},
        {'id': 2, 'title': '高明光学', 'web_url': ''},
        {'id': 3, 'title': '兴标龙表业', 'web_url': ''}
        ],
    },
    onLoad(){
        var self = this;
        /**
         * 发起请求获取partners信息
         */
        wx.request({
          url: 'https://www.gxboli.cn/partners.json',
          success(res){
            if (res.data.carousels.size > 0) {
              self.setData({
                local_carousels: false,
                carousels: res.data.carousels,
                partners: res.data.partners
              })
            } else {
              self.setData({
                local_carousels: true,
                partners: res.data.partners
              })
            }
          }
        })
    },
	  goToPartners:function(){
	    wx.switchTab({
	      url: '/pages/partners/index/index',
	    });
	  },
    callPhone:function(){
        wx.makePhoneCall({
          phoneNumber: '15014146191', //此号码并非真实电话号码，仅用于测试
          success:function(){
            console.log("拨打电话成功！")
          },
          fail:function(){
            console.log("拨打电话失败！")
          }
        })
    }
})