const util = require('../../utils/util.js')

/**
 * 项目声明
 */
function showState() {
  wx.getStorage({
    key: 'showState',
    fail: function (res) {
      wx.showModal({
        title: '作者声明',
        content: '本项目已开源，所用图片素材源于网络，如有侵权，请联系作者删除。',
        showCancel: false
      })
      wx.setStorage({
        key: 'showState',
        data: 1,
      })
    }
  })
}

Page({
  data: {
    banners: ['/images/banner/01.jpg', '/images/banner/02.jpg', '/images/banner/03.jpg'],
    tabs: {
      activeIndex: 0,
      items: []
    },
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({ 'tabs.items': util.categories, 'tabs.activeIndex': util.categories[0].cid })
    util.setArticleList(this, null)
  },

  onReady() {
    showState()
  },

  /**
   * tab栏点击切换
   */
  tabTap(e) {
    this.setData({
      'tabs.activeIndex': e.target.id
    })
    util.setArticleList(this, e.target.id)
  },

  /**
   * 跳转至文章详情页
   */
  toArticle(e) {
    // console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/article/article?aid=' + e.currentTarget.id,
    })
  },

  /**
   * 分享
   */
  onShareAppMessage: function () { }
})
