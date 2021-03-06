//show.js
//customize
var Wxmlify = require('../../../wxmlify/wxmlify.js')
var app = getApp();
Page({
    data: {
        customize: {
        'images': [{'url': '/images/home/carousel/factory1.jpg'}, {'url': '/images/home/carousel/factory2.jpg'}, 
        {'url': '/images/home/carousel/factory3.jpg'}], 'id': 1, 'title': '定制a', 'intro': '定制描述a', 'description': ''
        },
        wxmlify: '',
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        item_interval: 5000,
        item_duration: 0,
        customize_products: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'image': '', 'id': 3, 'title': '定制c', 'intro': '定制描述c'},
        {'image': '', 'id': 4, 'title': '定制d', 'intro': '定制描述d'}
        ]
    },
    onLoad:function(options){
        var self = this;
        /**
         * 发起请求获取customize信息
         */
        wx.request({
          url: 'https://www.gxboli.cn/customizes/' + options.id + '.json',
          success(res){
            //console.log(res);
            self.setData({
              customize: res.data.customize,
              wxmlify: new Wxmlify(res.data.customize.description, self, {
                dataKey: 'description',
                disableImagePreivew: false,
                onImageTap: function (e) {
                  //console.log(e)
                }
              }),
              customize_products: res.data.customize_products
            })
          }
        })
    },
    goToCustomize:function(){
	    wx.switchTab({
	      url: '/pages/customize/index/index',
	    });
	  },
    goToCustomizeProduct:function(e){
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