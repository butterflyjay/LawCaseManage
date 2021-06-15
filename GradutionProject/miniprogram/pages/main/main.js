// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  user:{},
  showimg:['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F11%2F27%2F2d111c1382b77d393ab20f6b017f64a5.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621058822&t=51325affef2388f50ea1a98c9685303d','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918577927,1033833841&fm=26&gp=0.jpg','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170423%2Fd201bbd6f70c4c0f9ba3cb07c35138bb_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621059107&t=fbee925b3e805da84b630bad12ecd0bc']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let user = wx.getStorageSync('user');
    that.setData({
      user: user
    })
    console.log(user)
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