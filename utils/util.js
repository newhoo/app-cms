// const app = getApp();

/**
 * 联系我们页中的地图定位数据
 */
const location = {
  longitude: 108.879000,//精度
  latitude: 34.160000 //维度
}

/**
 * 系统的tab标签和专栏分类的数据
 */
const categories = [
  { cid: 0, title: '经典案例', intro: '经典案例的简介经典案例的简介经典案例的简介经典案例的简介经典案例的简介', image: '../../images/banner/01.jpg' },
  { cid: 1, title: '新闻公告', intro: '新闻公告的简介新闻公告的简介新闻公告的简介新闻公告的简介新闻公告的简介', image: '../../images/banner/02.jpg' },
  { cid: 2, title: '产品介绍', intro: '产品介绍的简介产品介绍的简介产品介绍的简介产品介绍的简介产品介绍的简介', image: '../../images/banner/03.jpg' },
  { cid: 3, title: '开源项目', intro: '开源项目的简介开源项目的简介开源项目的简介开源项目的简介开源项目的简介', image: '../../images/banner/04.jpg' },
  { cid: 4, title: '关于我们', intro: '关于我们的简介关于我们的简介关于我们的简介关于我们的简介关于我们的简介', image: '../../images/banner/05.jpg' }
]

/**
 * 获取文章列表
 * @param cid 类别ID
 * @param callback 回调函数
 */
const getArticleList = (cid, callback) => {
  const imgs = ['/images/01.png', '/images/02.png', '/images/03.png', '/images/04.png', '/images/05.png'];
  cid = cid || categories[0].cid;
  const list = [1, 2, 3, 4, 5].map((v, i) => {
    return {
      id: cid + '00' + v,
      cid: cid,
      title: '小程序介绍' + cid + '00' + v,
      intro: '开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！',
      image: imgs[i]
    }
  });

  return callback && callback(list);
}

/**
 * 获取文章
 * @param aid 文章ID
 * @param callback 回调函数
 */
const getArticle = (aid, callback) => {
  return callback && callback({
    id: aid,
    cid: categories[Math.round(Math.random() * 4)],
    title: '小程序介绍',
    intro: '开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！',
    content: '开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。跟随这个教程，开始你的小程序之旅吧！',
    image: '/images/no1.png'
  });
}

/**
 * 设置首页和具体专栏的文章列表
 * @param _this 页面this
 * @param cid 类别ID
 */
const setArticleList = (_this, cid) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  getArticleList(cid, (list) => {
    setTimeout(() => {
      wx.hideLoading()
      _this.setData({
        content: list
      })
    }, 400)
  }, () => {
    wx.hideLoading()
    wx.showToast({
      title: '加载失败',
      icon: 'none'
    })
  })
}

module.exports = {
  location,
  categories,
  getArticleList,
  getArticle,
  setArticleList
}
