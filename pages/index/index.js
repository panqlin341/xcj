//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    indicatorActiveColor: "#e97a30",
    content : [
      {
        suid:1,
        logo:'https://www.wooncai.com:3443/201711/171106100010.jpeg',
        sName : '商家名称1',
        goods : [
          {
            gid : 1,
            gtitle : '商品名称1',
            gdsc : '商品描述1',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 2,
            gtitle: '商品名称2',
            gdsc: '商品描述2',
            url: 'https://www.wooncai.com:3443/201711/171114106806.jpeg'
          },
          {
            gid: 3,
            gtitle: '商品名称3',
            gdsc: '商品描述3',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 4,
            gtitle: '商品名称4',
            gdsc: '商品描述4',
            url: 'https://www.wooncai.com:3443/201711/171106101135.jpeg'
          },
          {
            gid: 5,
            gtitle: '商品名称5',
            gdsc: '商品描述5',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          }
        ]
      },
      {
        suid:2,
        logo:'https://www.wooncai.com:3443/201711/171106100010.jpeg',
        sName : '商家名称2',
        goods : [
          {
            gid : 6,
            gtitle : '商品名称1',
            gdsc : '商品描述1',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 7,
            gtitle: '商品名称2',
            gdsc: '商品描述2',
            url: 'https://www.wooncai.com:3443/201711/171114106806.jpeg'
          },
          {
            gid: 8,
            gtitle: '商品名称3',
            gdsc: '商品描述3',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 9,
            gtitle: '商品名称4',
            gdsc: '商品描述4',
            url: 'https://www.wooncai.com:3443/201711/171106101135.jpeg'
          }
        ]
      },
      {
        suid: 3,
        logo: 'https://www.wooncai.com:3443/201711/171106100010.jpeg',
        sName: '商家名称3',
        goods: [
          {
            gid: 10,
            gtitle: '商品名称1',
            gdsc: '商品描述1',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 11,
            gtitle: '商品名称2',
            gdsc: '商品描述2',
            url: 'https://www.wooncai.com:3443/201711/171114106806.jpeg'
          },
          {
            gid: 12,
            gtitle: '商品名称3',
            gdsc: '商品描述3',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 13,
            gtitle: '商品名称4',
            gdsc: '商品描述4',
            url: 'https://www.wooncai.com:3443/201711/171106101135.jpeg'
          },
          {
            gid: 14,
            gtitle: '商品名称4',
            gdsc: '商品描述4',
            url: 'https://www.wooncai.com:3443/201711/171107101136.jpeg'
          },
          {
            gid: 15,
            gtitle: '商品名称4',
            gdsc: '商品描述4',
            url: 'https://www.wooncai.com:3443/201711/171106101135.jpeg'
          }
        ]
      }
    ]
  },

  onLoad: function () {
      
  },

  onPullDownRefresh: function () {
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },2000);
  }
  ,
  lookImg : function(event){
    console.log();
    var img = event.currentTarget.dataset.img;
    var imgs = event.currentTarget.dataset.imgs;
    if(imgs){
      var imga = imgs.split(',');
    }
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: imga // 需要预览的图片http链接列表
    })
  },
  openUrl : function(){
    wx.navigateTo({
      url: 'demo1/demo1'
    })
  },
  redirtUrl : function(){
    wx.redirectTo({
      url: 'demo2/demo2'
    })
  }
})
