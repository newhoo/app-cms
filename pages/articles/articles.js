const util = require('../../utils/util.js')

Page({
  data: {
    category: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.categories.forEach((v) => {
      if (v.cid == options.cid) {
        wx.setNavigationBarTitle({
          title: v.title
        })
        this.setData({ category: v })
      }
    })

    util.setArticleList(this, options.cid)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      'title': this.data.title,
      'path': 'pages/articles/articles?cid=' + this.data.category.cid
    }
  }
})