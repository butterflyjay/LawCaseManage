// miniprogram/pages/device/picture.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    winHeight:'',
    img_Url : '',
    currentTab : '',
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '图片预览',
    });
    //  高度自适应
    var calc = 0;
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        calc = clientHeight * rpxR - 90;
        that.setData({
          winHeight: calc,
        });
      }
    });
    //将传过来的数组显示出来
    var img_Url = [];
    img_Url = options.img_Url.split(',');
    var index = options.index;
    this.setData({
      img_Url : img_Url,
      currentTab : index,
    });
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
 
  },
  bindBackTap : function(e){
    wx.navigateBack({
      delta: 1,
    });
  },
  bindDelTap : function(e){
    // console.log(this.data);
    var index = e.currentTarget.dataset.index;
    var img_Url = this.data.img_Url;
    var currentTab = this.data.currentTab;
    //如果当前位置为最后一个，位置变成上一个 不然当前位置图片显示为空
    if (this.data.currentTab == img_Url.length -1 ){
      currentTab = img_Url.length - 2;
    }
    //删除所选图片的数组所在位置
    img_Url.splice(this.data.currentTab, 1);
    
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    //获取上个界面base64数组并删除当前位置
    //更新上一页图片数组
    prePage.setData({
      state: 1,
      img_Url: img_Url,
    });
    //更新本页面图片数组
    this.setData({
      currentTab: currentTab,
      img_Url: img_Url,
    });
    //如果最后一张被删除直接返回
    if(img_Url.length == 0){
      wx.navigateBack({
        delta : 1
      });
    }
  }, switchTab : function(e){
    var that = this;
    this.setData({
      currentTab: e.detail.current,
    });
  }
})