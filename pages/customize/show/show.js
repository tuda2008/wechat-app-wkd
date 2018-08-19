//show.js
//customize
var app = getApp();
Page({
    data: {
        customize: {
        'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 1, 'title': '定制a', 'intro': '定制描述a'
        },
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        item_interval: 5000,
        item_duration: 0,
        customize_products: [
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'images': ['/images/home/carousel/factory1.jpg', '/images/home/carousel/factory2.jpg', 
        '/images/home/carousel/factory3.jpg'], 'id': 3, 'title': '定制c', 'intro': '定制描述c'}
        ]
    },
    goToCustomize:function(){
	    wx.switchTab({
	      url: '/pages/customize/index/index',
	    });
	},
    goToCustomizeProduct:function(e){
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
          url: '/pages/customize/show/show',
        });
    },
    callPhone:function(){
        wx.makePhoneCall({
          phoneNumber: '1500000000', //此号码并非真实电话号码，仅用于测试
          success:function(){
            console.log("拨打电话成功！")
          },
          fail:function(){
            console.log("拨打电话失败！")
          }
        })
    }
})