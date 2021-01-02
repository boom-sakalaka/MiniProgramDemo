// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    swiperImgList : [
      {
        url: 'http://p1.music.126.net/-1VYPwKCBwBEERuXqw-Txg==/109951165597119652.jpg?imageView&quality=89'
      },
      {
        url: 'http://p1.music.126.net/FR1lQ2FZu59T4D9ClJqg2w==/109951165597440347.jpg?imageView&quality=89'
      },
      {
        url: 'http://p1.music.126.net/XaMKPCNuxV_fCcDwxhoa1g==/109951165597001767.jpg?imageView&quality=89'
      }
    ],
    list: [
      {
        id: 1,
        title: 'one'
      },
      {
        id: 2,
        title: 'two'
      },
      {
        id: 3,
        title: 'three'
      },
      {
        id: 4,
        title: 'four'
      },
      {
        id: 5,
        title: 'five'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'login'
    }).then((res) => {
      console.log(res)
      this.setData({
        openid: res.result.openid
      })
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})