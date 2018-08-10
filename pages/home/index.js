//start.js
//home
var app = getApp();
Page({
    data: {
        carousels: ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', '/images/home/carousel/factory3.jpg'],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        products: [
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 1, 'title': '产品a', 'intro': '产品描述a'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 2, 'title': '产品b', 'intro': '产品描述b'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 3, 'title': '产品c', 'intro': '产品描述c'}
        ],
        item_interval: 5000,
        item_duration: 0
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