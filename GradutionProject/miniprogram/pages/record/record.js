//获取应用实例
var app = getApp()
Page( {
  data: {
    list:{},
    sex: ['男', '女'],
    index_sex:0,
    casearea: ['销售部', '技术部', '采购部', '生产部','财务部','设备部','人事部'],
    index_area:0,
    IDcard:['中华人民共和国身份证','外籍签证','港澳台通行证'],
    index_IDcard:0,
    criminal:{icon:'../images/null.jfif',name:'',IDtype:'',IDcard:'',area:'',age:'',sex:'',lawcase_name:'',punish:''},
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
  },
  PickerChangearea: function(e) {   //选择案件部门
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_area: e.detail.value
    })
  },
  PickerChangesex: function(e) {   //选择性别
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_sex: e.detail.value
    })
  },
  PickerChangeIDcard: function(e) {   //选择性别
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_IDcard: e.detail.value
    })
  },
  onLoad: function() {
    var that = this;
 
    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
 
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
  },
  /**
     * 滑动切换tab
     */
  bindChange: function( e ) {
 
    var that = this;
    that.setData( { currentTab: e.detail.current });
 
  },
  /**
   * 点击tab切换
   */
  swichNav: function( e ) {
 
    var that = this;
 
    if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData( {
        currentTab: e.target.dataset.current
      })
    }
    wx.request({
      url: 'http://localhost:3000/criminal/showcriminal',
      method:'POST',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log(res);
        if(res.statusCode === 200) {
          that.setData({
            list: res.data
          })
        }
      }
    })
  },
  addhead: function() {     //添加用户头像
    var that=this;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {     
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            // console.log(res.tempFilePaths)
            that.setData({
                'criminal.icon': res.tempFilePaths
            })
      }
    })
  },
  formSubmit: function(e) {
    let that = this;
    console.log(e.detail.value);
    if(e.detail.value.name.length === 0 || e.detail.value.IDtype.length === 0 || e.detail.value.IDcard.length === 0
      || e.detail.value.age.length === 0 || e.detail.value.area.length === 0 || e.detail.value.lawcase_name.length === 0 || e.detail.value.sex.length === 0 || e.detail.value.punish.length === 0) {
        wx.showToast({
          title: '抱歉，内容不能为空！',
          icon:'none',
          duration:2000
        })
      }
      else {
        that.setData({
          'criminal.name': e.detail.value.name,
          'criminal.IDtype': e.detail.value.IDtype,
          'criminal.IDcard': e.detail.value.IDcard,
          'criminal.area': e.detail.value.area,
          'criminal.age': e.detail.value.age,
          'criminal.sex': e.detail.value.sex,
          'criminal.punish': e.detail.value.punish,
          'criminal.lawcase_name': e.detail.value.lawcase_name
        })
        console.log(that.data.criminal);
        wx.request({
          url: 'http://localhost:3000/criminal/addcriminal',
          method:'POST',
          data: that.data.criminal,
          header:{
            "content-type":"application/x-www-form-urlencoded"
          },
          success: function(res) {
            if(res.statusCode == 200) {
              wx.showToast({
                title: '提交成功!',
                icon:"none",
                duration: 2000
              })
            }
          },
          fail: function() {
            wx.showToast({
              title: '提交失败！！！请检查网络',
              icon:'loading',
              duration:2000
            })
          }
        })
      }
  }
})
