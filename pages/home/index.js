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
        customize: [
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 3, 'title': '定制c', 'intro': '定制描述c'}
        ],
        partners: [
        {'id': 1, 'title': '明德电子', 'web_url': ''},
        {'id': 2, 'title': '高明光学', 'web_url': ''},
        {'id': 3, 'title': '兴标龙表业', 'web_url': ''}
        ],
        item_interval: 5000,
        item_duration: 0
    },
    goToProducts:function(){
    	wx.switchTab({
           url: "/pages/products/index/index",
        })
	},
    goToProduct:function(e){
        console.log(e.currentTarget.dataset.id);
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