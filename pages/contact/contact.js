const util = require('../../utils/util.js')

Page({
  data: {
    latitude: util.location.latitude,
    longitude: util.location.longitude,
    markers: [{
      id: 0,
      // iconPath: "/images/no1.png",
      latitude: util.location.latitude,
      longitude: util.location.longitude
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.showLoading({
      title: '地图加载中'
    })
  },

  /**
   * 地图渲染更新完成
   */
  bindupdated(e) {
    // console.log(e)
    wx.hideLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})