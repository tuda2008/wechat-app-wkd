//index.js
//products
var app = getApp();
Page({
    data: {
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
        item_interval: 5000,
        item_duration: 0,
        products: [
        {'image': '', 'id': 1, 'title': '产品a', 'intro': '产品描述a'},
        {'image': '', 'id': 2, 'title': '产品b', 'intro': '产品描述b'},
        {'image': '', 'id': 3, 'title': '产品c', 'intro': '产品描述c'},
        {'image': '', 'id': 4, 'title': '产品d', 'intro': '产品描述d'}
        ]
    },
    onLoad(){
        var self = this;
        /**
         * 发起请求获取products信息
         */
        wx.request({
          url: 'https://www.gxboli.cn/products.json',
          success(res){
            //console.log(res);
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                products: res.data.products
              })
            } else {
              self.setData({
                products: res.data.products
              })
            }
          }
        })
    },
    goToProducts:function(){
	    wx.switchTab({
	      url: '/pages/products/index/index',
	    });
	  },
    goToProduct:function(e){
        wx.navigateTo({
          url: '/pages/products/show/show?id=' + e.currentTarget.dataset.id,
        });
    },
    onShareAppMessage:function(){
        return{
            title: "旺科达-专业生产定制玻璃",
            path: "/pages/home/index",
            success: (res)=>{
                console.log(res.shareTickets[0])
                wx.getShareInfo({
                  shareTicket: res.shareTickets[0],
                  success: function (res) { console.log(res) },
                  fail: function (res) { console.log(res) },
                  complete: function (res) { console.log(res) }
                })
            },
            fail: function (res) {
                console.log(res)
            },
            complete: function (res) {
                console.log(res)
            }
        }
    },
    callPhone:function(){
        wx.makePhoneCall({
          phoneNumber: app.globalData.mobile,
          success:function(){
            console.log("拨打电话成功！")
          },
          fail:function(){
            console.log("拨打电话失败！")
          }
        })
    }
})