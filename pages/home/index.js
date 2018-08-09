//start.js
//home
var app = getApp();
Page({
    data: {
        background: ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', '/images/home/carousel/factory3.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000
    },
    goToProducts:function(){
    	wx.switchTab({
           url: "/pages/products/index/index",
        })
	},
	goToCustomize:function(){
	    wx.switchTab({
	      url: '/pages/customize/index/index',
	    });
	},
	goToPartners:function(){
	    wx.navigateTo({
	      url: '/pages/partners/index/index',
	    });
	}
})