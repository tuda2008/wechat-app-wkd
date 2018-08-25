//index.js
//more
const app = getApp()
Page({
    data: {},
    gotoAbout:function(){
        wx.navigateTo({
            url: '/pages/more/about/about',
        });
    },
    gotoFactory:function(){
        wx.getLocation({//获取当前经纬度
            type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
            success: function (res) {
                wx.openLocation({//​使用微信内置地图查看位置。
                    latitude: 22.6628860000,//要去的纬度-地址
                    longitude: 114.0018390000,//要去的经度-地址
                    name: "深圳市旺科达光学有限公司",
                    address:'深圳市旺科达光学有限公司'
                })
            }
        })
    },
    onShareAppMessage:function(){
        return{
            title: "旺科达-专业生产定制玻璃",
            imageUrl: "/images/start/share.png",
            path: "/pages/start/start"
        }
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