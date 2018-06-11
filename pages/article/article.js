const util = require('../../utils/util.js')

Page({
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.getArticle(options.aid, (res) => {
      this.setData({ article: res })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      'title': this.data.title,
      'path': 'pages/article/article?aid=' + this.data.article.id
    }
  }
})