// pages/changeuser/changeuser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobtype: ['处警', '审核员', '高级案警'],
    index_job:0,
    user:{}
  },
  PickerChangejob: function(e) {     //选择职务
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_job: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let user = JSON.parse(options.user);
    that.setData({
      user: user
    });
    let jobtype = that.data.jobtype;
    for(let i = 0; i < jobtype.length;i++) {
      if(jobtype[i] === that.data.user.job) {
        let temp = jobtype[0];
        jobtype[0] = that.data.user.job;
        jobtype[i] = temp;
      }
    }
    that.setData({
      jobtype: jobtype
    })
  },
  formSubmit: function(e) {
    let that = this;
    console.log(e.detail.value);
    that.setData({
      'user.user_name': e.detail.value.user_name,
      'user.password': e.detail.value.password,
      'user.job': e.detail.value.job,
      'user.age': e.detail.value.age
    })
    console.log(that.data.user);
    wx.request({
      url: 'http://localhost:3000/user/changeuser',
      method:'POST',
      data: that.data.user,
      header:{
          "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        if(res.statusCode === 200) {
          wx.showToast({
            title: '修改成功',
            icon:'success',
            duration: 2000
          })
        }
      }
    })
  },
  addhead: function() {
    var that=this;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {     
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            // console.log(res.tempFilePaths)
            that.setData({
                'user.iconUrl': res.tempFilePaths
            })
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