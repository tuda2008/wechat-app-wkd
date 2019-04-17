//start.js
//home
var app = getApp();
Page({
    data: {
        carousels: [
        {'url': '/images/home/carousel/factory1.jpg'}, 
        {'url': '/images/home/carousel/factory1.jpg'},
        {'url': '/images/home/carousel/factory1.jpg'}
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        products: [
        {'image': '', 'id': 1, 'title': '产品a', 'intro': '产品描述a'},
        {'image': '', 'id': 2, 'title': '产品b', 'intro': '产品描述b'},
        {'image': '', 'id': 3, 'title': '产品c', 'intro': '产品描述c'},
        {'image': '', 'id': 4, 'title': '产品d', 'intro': '产品描述d'}
        ],
        customize: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'image': '', 'id': 3, 'title': '定制c', 'intro': '定制描述c'},
        {'image': '', 'id': 4, 'title': '定制d', 'intro': '定制描述d'}
        ],
        partners: [
        {'id': 1, 'title': '明德电子', 'web_url': ''},
        {'id': 2, 'title': '高明光学', 'web_url': ''},
        {'id': 3, 'title': '兴标龙表业', 'web_url': ''}
        ],
        item_interval: 5000,
        item_duration: 0
    },
    onLoad(){
        var self = this;
        /**
         * 发起请求获取home信息
         */
        wx.request({
          url: 'https://www.gxboli.cn/home.json',
          success(res){
            //console.log(res);
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                products: res.data.products,
                customize: res.data.customize,
                partners: res.data.partners
              })
            } else {
              self.setData({
                products: res.data.products,
                customize: res.data.customize,
                partners: res.data.partners
              })
            }
          }
        })
    },
    goToProducts:function(){
    	wx.switchTab({
           url: "/pages/products/index/index",
        })
	  },
    goToProduct:function(e){
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
          url: '/pages/products/show/show?id=' + e.currentTarget.dataset.id,
        });
    },
	  goToCustomize:function(){
	    wx.switchTab({
	      url: '/pages/customize/index/index',
	    });
	  },
    goToCustomizeProduct:function(e){
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
          url: '/pages/customize/show/show?id=' + e.currentTarget.dataset.id,
        });
    },
	  goToPartners:function(){
	    wx.navigateTo({
	      url: '/pages/partners/index/index',
	    });
	  },
    onShareAppMessage:function(){
        return{
            title: "旺科达-专业生产定制玻璃",
            path: "/pages/start/start",
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