Page({
  data: {
      currentTab: 0,
      jobtype: ['处警', '审核员', '高级案警'],
      index_job:0,
      sex: ['男', '女'],
      index_sex:0,
      user:{user_id:'',user_name:'',username:'',password:'',sex:'',job:'',age:'',iconUrl:'../images/null.jfif'},
      imgurl:'../images/null.jfif',
      list:[],
      user_id:''
  },
  PickerChangejob: function(e) {     //选择职务
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_job: e.detail.value
    })
  },
  PickerChangesex: function(e) {   //选择性别
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_sex: e.detail.value
    })
  },
  addhead: function() {    //添加用户头像
        var that=this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {     
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var avatarSrc = res.tempFilePaths
                // console.log(res.tempFilePaths)
                that.setData({
                    'user.iconUrl': res.tempFilePaths
                })
                console.log(that.data.user.iconUrl)
        }
    })
  },
  formSubmit: function(e) {
    let that = this;
    console.log(parseInt(e.detail.value.user_id));
    if(e.detail.value.user_id.length !== 4 || e.detail.value.user_id != parseInt(e.detail.value.user_id)){
        wx.showToast({
          title: '工号必须位数字且为四位',
          icon:'none',
          duration:2000
        })
    }
    else if(e.detail.value.user_name.length == 0){
        wx.showToast({
          title: '请输入名字',
          icon:'none',
          duration:2000
        })
    } else if(e.detail.value.username.length < 8 || e.detail.value.username.length >10){
        wx.showToast({
          title: '抱歉，账号长度不能小于8位也不能大于10位',
          icon:'none',
          duration:2000
        })
    } else if(e.detail.value.password.length == 0){
        wx.showToast({
          title: '请输入密码',
          icon:'none',
          duration:2000
        })
    } else if(e.detail.value.sex.length == 0){
        wx.showToast({
          title: '请输入性别',
          icon:'none',
          duration:2000
        })
    } else if(e.detail.value.job.length == 0){
        wx.showToast({
          title: '请输入职务',
          icon:'none',
          duration:2000
        })
    } else if(e.detail.value.age.length == 0){
        wx.showToast({
          title: '请输入年龄',
          icon:'none',
          duration:2000
        })
    } else {
        that.setData({
            'user.user_id': e.detail.value.user_id,
            'user.user_name': e.detail.value.user_name,
            'user.username': e.detail.value.username,
            'user.password': e.detail.value.password,
            'user.sex': e.detail.value.sex,
            'user.job': e.detail.value.job,
            'user.age': e.detail.value.age,
        })
        console.log(that.data.user);
        wx.request({
          url: 'http://localhost:3000/user/adduser',
          method:'POST',
          data: that.data.user,
          header:{
            "content-type":"application/x-www-form-urlencoded"
          },
          success: function(res) {
            if(res.statusCode == 200) {
              wx.showToast({
                title: '工号为 '+ that.data.user.user_id + ' 的员工添加完成',
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
    
    
  },
  formReset: function() {
    var that = this;
    that.setData({
        'user.iconUrl': that.data.imgurl
    })
    console.log(that.data.user)
  },
  onShow: function() {

  },
  onLoad: function() {
      var that = this;
      wx.getSystemInfo( {
          success: function( res ) {
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: res.windowHeight
              });
          }
      });
      
  },
    
//  tab切换逻辑
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
      url: 'http://localhost:3000/user/showuser',
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
  bindChange: function( e ) {
      var that = this;
      that.setData( { currentTab: e.detail.current });
  },
  del:function(e){
    let that = this;
    console.log(e.currentTarget.dataset.index);
    var current = e.currentTarget.dataset.index;
    var list=this.data.list;
    list.splice(current,1)
    that.setData({
      list: list,
      user_id: e.currentTarget.dataset.value.user_id
    })
    console.log(that.data.user_id)
    wx.request({
      url: 'http://localhost:3000/user/deluser',
      method: 'POST',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      data:{
        user_id: that.data.user_id
      },
      success: function(res) {
        if(res.statusCode === 200) {
          console.log('删除成功')
        }
      }
    })
  },
  change: function(e) {
    console.log(e.currentTarget.dataset.value)
    let user = JSON.stringify(e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '/pages/changeuser/changeuser?user='+user,
    })
  }
})