// pages/casecheckmore/casecheckmore.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    casecheck:{}
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let casecheck  = JSON.parse(options.casecheck)
    that.setData({
      casecheck: casecheck
    })
  },
  confirm: function() {
    let that = this;
      wx.request({
        url: 'http://localhost:3000/casecheck/changecasecheck',
        method: 'POST',
        data: that.data.casecheck,
        success: function(res) {
          if(res.statusCode === 200) {
            wx.showToast({
              title: '申请审批通过',
              icon:'success',
              duration:2000
            })
          }
        }
      })
  },
  reject: function() {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/casecheck/rejectcasecheck',
      method: 'POST',
      data: that.data.casecheck,
      success: function(res) {
        if(res.statusCode === 200) {
          wx.showToast({
            title: '已拒绝该审核',
            icon:'none',
            duration:2000
          })
        }
      }
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