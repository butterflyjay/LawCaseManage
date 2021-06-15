const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({
  onReady () {
    this.audioContext = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {
    casetype: ['民事案件', '刑事案件', '行政案件', '经济案件','非诉讼案件'],
    index_type:0,
    casearea: ['成都', '绵阳', '遂宁', '德阳','内江','眉山','自贡'],
    index_area:0,
    imgUrl:[],
    item: {status:'', num:'', name:'', criminal:'',type:'', area:'', time:'', content:'', imgUrl:'', voiceUrl:'', videoUrl:'',user_name:'',user_id:'',nowtime:''},
    user: {}
  },
  lookpic () {
    let that = this;
    let index = 0;
    wx.navigateTo({
      url: '../picture1/picture1?img_Url=' + that.data.imgUrl + '&index=' + index,
    });
  },
  getdate:function() {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y =date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let now = Y + '年'  + M+ '月' + D+ '日';
    console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' );
    return now;
  },
  PickerChangetype: function(e) {     //选择案件类型
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_type: e.detail.value
    })
  },
  PickerChangearea: function(e) {   //选择案件地区
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_area: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value);
    let that = this;
    let r = that.getdate();
    console.log(r);
    that.setData({
      'item.criminal': e.detail.value.criminal,
      'item.type': e.detail.value.type,
      'item.area': e.detail.value.area,
      'item.time': e.detail.value.time,
      'item.content': e.detail.value.content,
      'item.nowtime': r
    })
    console.log(that.data.item);
    wx.request({
      url: 'http://localhost:3000/lawcase/changecase',
      method:'POST',
      data: that.data.item,
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        if(res.statusCode === 200) {
          wx.showToast({
            title: '该案件已修改',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    wx.getStorage({
      key: 'user',
      success: function(res) {
        console.log(res.data);
        that.setData({
          user: res.data,
          'item.user_name': res.data.user_name,
          'item.user_id': res.data.user_id
        })
      }
    })
    that.setData({
      item:options ,
      'item.status': 0    
    })
    let casetype = that.data.casetype;
    let casearea = that.data.casearea;
    for(let i = 0; i < casetype.length;i++) {
      if(casetype[i] === that.data.item.type) {
        let temp = casetype[0];
        casetype[0] = that.data.item.type;
        casetype[i] = temp;
      }
    }
    for(let i = 0; i < casearea.length;i++) {
      if(casearea[i] === that.data.item.area) {
        let temp = casearea[0];
        casearea[0] = that.data.item.area;
        casearea[i] = temp;
      }
    }
    that.setData({
      casearea: casearea,
      casetype: casetype
    })
    console.log(that.data.item);
    if(that.data.item.imgUrl) {
      let imgs = that.data.item.imgUrl.split(",");
      that.setData({
        imgUrl: imgs
      })
    console.log(that.data.imgUrl);
  }   
  },
  delcase: function() {
    let that = this;
    let r = that.getdate();
    that.setData({
      'item.nowtime': r,
      'item.status': 3
    })
    console.log(that.data.item);
    wx.request({
      url: 'http://localhost:3000/lawcase/delcase',
      method:'POST',
      data: that.data.item,
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        if(res.statusCode === 200) {
          wx.showToast({
            title: '该案件已删除',
            icon: 'none',
            duration: 2000
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