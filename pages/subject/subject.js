const util = require('../../utils/util.js')

Page({
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ items: util.categories })
  },

  /**
   * 跳转至栏目信息
   */
  toArticles(e) {
    wx.navigateTo({
      url: '/pages/articles/articles?cid=' + e.currentTarget.id
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})