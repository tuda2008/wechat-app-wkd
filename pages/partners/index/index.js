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
        duration: 2000,
        partners: [
        {'id': 1, 'title': '明德电子', 'web_url': ''},
        {'id': 2, 'title': '高明光学', 'web_url': ''},
        {'id': 3, 'title': '兴标龙表业', 'web_url': ''}
        ],
    },
	goToPartners:function(){
	    wx.switchTab({
	      url: '/pages/partners/index/index',
	    });
	},
	goToPartner:function(){
	    wx.switchTab({
	      url: '/pages/partners/show/index',
	    });
	}
})