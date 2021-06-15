
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Type:'all',
    Area:'all',
    Searchinfor:'',
    showdata:{},
    option1: [
      { text: '全部案件', value: 0 },
      { text: '职务侵占案件', value: 1 },
      { text: '挪用资金案件', value: 3 },
      { text: '人员受贿案件', value: 4 },
      { text: '财务造假案件', value: 5 },
      { text: '侵犯商业秘密案件', value: 6 },
    ],
    option2: [
      { text: '全部部门', value: 'a' },
      { text: '销售部', value: 'b' },
      { text: '技术部', value: 'c' },
      { text: '采购部', value: 'd' },
      { text: '生产部', value: 'e' },
      { text: '财务部', value: 'f' },
      { text: '设备部', value: 'g' },
      { text: '人事部', value: 'h' },
    ],
    value1: 0,
    value2: 'a',
  },

  mySelecttype: function(e) {
    console.log(e.detail);
    let that = this;
    for(let index1 in that.data.option1) {
      if(e.detail == 0) {
        that.setData({
          Type:'all'
        })
      }
      else if(that.data.option1[index1].value == e.detail) {
        that.setData({
          Type: that.data.option1[index1].text
        })
      }
    }
    console.log(that.data.Type);
  },
  mySelectarea: function(e){
    console.log(e.detail)
    let that = this;
    for(let index2 in that.data.option2) {
      if(e.detail == 'a') {
        that.setData({
          Area:'all'
        })
      }
      else if(that.data.option2[index2].value == e.detail) {
        that.setData({
          Area: that.data.option2[index2].text
        })
      }
    }
    console.log(that.data.Area)
  },
  Searchvalue: function(e) {
    console.log(e.detail.value);
    let that = this;
    that.setData({
      Searchinfor: e.detail.value
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/lawcase/showcase',
      method:'POST',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        that.setData({
          showdata: res.data
        })
        console.log(res.data);
      }
    })
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