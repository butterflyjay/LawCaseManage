// pages/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showdata:{}
  },
  lookpic () {
    let that = this;
    let index = 0;
    wx.navigateTo({
      url: '../picture1/picture1?img_Url=' + that.data.showdata.imgUrl + '&index=' + index,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    wx.request({
      url: 'http://localhost:3000/lawcase/showcase',
      method:'POST',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        for(let i = 0;i < res.data.length; i++) {
          if(res.data[i].name === options.lawcase_name) {
            that.setData({
              showdata: res.data[i]
            })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioContext = wx.createAudioContext('myAudio')
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