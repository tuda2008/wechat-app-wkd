//index.js
//customize
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
        customize: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'image': '', 'id': 3, 'title': '定制c', 'intro': '定制描述c'},
        {'image': '', 'id': 4, 'title': '定制d', 'intro': '定制描述d'}
        ]
    },
    onLoad(){
        var self = this;
        /**
         * 发起请求获取customizes信息
         */
        wx.request({
          url: 'https://www.gxboli.cn/customizes.json',
          success(res){
            //console.log(res);
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                customize: res.data.customize
              })
            } else {
              self.setData({
                customize: res.data.customize
              })
            }
          }
        })
    },
	  goToCustomize:function(){
	    wx.switchTab({
	      url: '/pages/customize/show/index',
	    });
	  },
    goToCustomizeProduct:function(e){
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
          url: '/pages/customize/show/show?id=' + e.currentTarget.dataset.id,
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