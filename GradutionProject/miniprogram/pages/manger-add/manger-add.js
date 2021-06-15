let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
let screenWidth = wx.getSystemInfoSync().screenWidth
let screenHeight = wx.getSystemInfoSync().screenHeight
let contentHeight = ((windowHeight / screenWidth) * 750 - 184 - 166) + "rpx";
var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    contentHeight: contentHeight,
    casetype: ['职务侵占案件', '挪用资金案件', '人员受贿案件', '财务造假案件','侵犯商业秘密案件'],
    index_type:0,
    casearea: ['销售部', '技术部', '采购部', '生产部','财务部','设备部','人事部'],
    index_area:0,
    case:[{
      num:'',
      name:'',
      criminal:'',
      type:'',
      area:'',
      time:'',
      content:'',
      imgUrl:'',
      voiceUrl:'',
      videoUrl:''
    }],
    actionSheetHidden: true   ,//作为开关控制弹窗是否从底部弹出
    actionsheethidden: true   ,
    image_add:'../images/add.png',  //显示添加图片的地址
    videoUrl:"",
    criminal:'',
    clickFlag: true,
    poster:'',
    img_Url:[],
    voi_Url:'',
  },
  audioStart () {
    this.audioCtx.seek(0)
  },
  selectaudio () {
    let that = this;
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success: function(res) {
        console.log(res.tempFiles[0].path)
        that.setData({
          voi_Url: res.tempFiles[0].path,
        })
        that.audioCtx = wx.createAudioContext('myAudio')
        that.audioCtx.setSrc(that.data.voi_Url)
      }
    })
  },
  audiobutton: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  audioActionSheet: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  videobutton: function() {   //视频底部弹窗
    this.setData({
      actionsheethidden: !this.data.actionsheethidden
    });
  },
  videoActionSheet:function() {
    this.setData({
     actionsheethidden: !this.data.actionsheethidden
    })
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
  bindAddPhotoTap: function (e) {
    var that = this;
    console.log(e);
    var index = e.target.dataset.index;
    var img_Url = that.data.img_Url;
    if (img_Url.length == 0) {
      if (index > 0) {
        return;
      }
    } else if (img_Url.length == 1) {
      if (index > 1) {
        return;
      }
    } else if (img_Url.length == 2) {
      if (index > 2) {
        return;
      }
    }
    //如果选择的图片位置和图片list长度一样的话代表还没添加过图片
    if (index == img_Url.length) {
      wx.chooseImage({
        count: 3 - img_Url.length,//图片数量
        success: function (res) {
          var tempFilePaths = res.tempFilePaths;
          for (var i = 0; i < tempFilePaths.length; i++) {
            img_Url.push(tempFilePaths[i]);
            //将pics图片数组转为base64字符串数组 如果上传时不需要的话可以忽略此处
            wx.getFileSystemManager().readFile({
              filePath: tempFilePaths[i], //选择图片返回的相对路径
              success: function() { //成功的回调
                that.setData({
                  img_Url: img_Url,
                });
              }, fail: function () {
                that.show("图片上传失败！");
              }
            });
          }
        }
      });
    } else {//如果数组长度大于当前位置，进入图片预览及删除界面
      wx.navigateTo({
        url: '../picture/picture?img_Url=' + that.data.img_Url + '&index=' + index,
      });
    }
  },
  
  formSubmit: function(e){
    var that = this;
    console.log(e.detail.value)
    if(e.detail.value.num.length == 0){
      wx.showToast({
        title: '案件编号不能为空!',
        icon:'none',
        duration: 1500
      })
    } else if(e.detail.value.name.length == 0){
      wx.showToast({
        title: '案件名称不能为空!',
        icon:'none',
        duration: 1500
      })
    } else if(e.detail.value.type.length == 0){
      wx.showToast({
        title: '案件类型不能为空!',
        icon:'none',
        duration: 1500
      })
    } else if(e.detail.value.area.length == 0){
      wx.showToast({
        title: '案件地区不能为空!',
        icon:'none',
        duration: 1500
      })
    } else if(e.detail.value.criminal.length == 0){
      wx.showToast({
        title: '案件罪犯不能为空!',
        icon:'none',
        duration: 1500
      })
    }else if(e.detail.value.time.length == 0){
      wx.showToast({
        title: '案件发布时间不能为空!',
        icon:'none',
        duration: 1500
      })
    } else if(e.detail.value.content.length == 0){
      wx.showToast({
        title: '案件详细描述不能为空!',
        icon:'none',
        duration: 1500
      })
    } else {
      let imgs = that.data.img_Url.join(',');
      console.log(imgs);
      console.log(e.detail.value);
      that.setData({
        'case[0].num':e.detail.value.num,
        'case[0].name':e.detail.value.name,
        'case[0].criminal':e.detail.value.criminal,
        'case[0].type':e.detail.value.type,
        'case[0].area':e.detail.value.area,
        'case[0].time':e.detail.value.time,
        'case[0].content':e.detail.value.content,
        'case[0].imgUrl': imgs,
        'case[0].voiceUrl': that.data.voi_Url,
        'case[0].videoUrl': that.data.videoUrl
      })
      wx.setStorage({
        data: that.data.case,
        key: 'case',
      })
      console.log(that.data.case[0])
      wx.request({
        url: 'http://localhost:3000/lawcase/addcase',
        method:'POST',
        header:{
          "content-type": "application/x-www-form-urlencoded"
        },
        data:this.data.case[0],
        success: function(res) {
          console.log(res.data)
          wx.showToast({
            title: '提交成功！！！',//这里打印出登录成功
            icon: 'success',
            duration: 1000
          })
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
      img_Url: [],
      clickFlag: true,
      videoUrl: ''
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 拍摄或选择视频并上传服务器
   */
  chooseVideo: function () {
    console.log("chooseVideo")
    this.setData({clickFlag: false})
    let that = this
    //1.拍摄视频或从手机相册中选择视频
    wx.chooseVideo({
      sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
      camera: 'back',//默认拉起的是前置或者后置摄像头，默认back
      compressed: true,//是否压缩所选择的视频文件
      success: function(res){
        let tempFilePath = res.tempFilePath//选择定视频的临时文件路径（本地路径）
        let duration = res.duration //选定视频的时间长度
        let size = parseFloat(res.size/1024/1024).toFixed(1) //选定视频的数据量大小
        that.data.duration = duration
        if(parseFloat(size) > 10000){
          that.setData({
            clickFlag: true,
            duration: ''
          })
          let beyondSize = parseFloat(size) - 100
          wx.showToast({
            title: '上传的视频大小超限，超出'+beyondSize+'MB,请重新上传',
            //image: '',//自定义图标的本地路径，image的优先级高于icon
            icon:'none'
          })
        }else{
          //2.本地视频资源上传到服务器
          console.log('地址：',tempFilePath)
          that.setData({
            videoUrl: tempFilePath
            
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 将本地资源上传到服务器
   * 
   */
  deleteVideo:function() {
    let that = this;
    that.setData({
      clickFlag: true,
      videoUrl: ''
    })
  },
  uploadFile:function(tempFilePath){
    let that = this
    let third_session = wx.getStorageSync('third_session')
    wx.showLoading({
      title: '上传进度：0%',
      mask: true //是否显示透明蒙层，防止触摸穿透
    })
    const uploadTask = wx.uploadFile({
      url: 'http://192.168.0.77:8083/upload/uploadVideo',//开发者服务器地址
      filePath:tempFilePath,//要上传文件资源的路径（本地路径）
      name:'file',//文件对应key,开发者在服务端可以通过这个 key 获取文件的二进制内容
      // header: {}, // 设置请求的 header
      formData: {
        third_session: third_session
      }, // HTTP 请求中其他额外的 form data
      success: function(res){
        console.log("uploadFile",res)
        // success
        let data = JSON.parse(res.data)
        wx.hideLoading()
        if(data.returnCode == 200){
          that.setData({
            videoUrl: data.videoUrl,
            poster: data.imgUrl,
            duration: that.data.duration,
            clickFlag:true
          })
          wx.showToast({
            title: '上传成功',
            icon: 'success'
          })
        }else{
          that.setData({
            videoUrl: '',
            poster: '',
            duration: '',
            clickFlag:true
          })
          wx.showToast({
            title: '上传失败',
            icon: 'none'
          })
        }
       
      },
      fail: function() {
        // fail
        wx.hideLoading()
        this.setData({
          videoUrl: '',
          poster: '',
          duration: '',
          clickFlag:true
        })
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        })
      }
    })
    //监听上传进度变化事件
    uploadTask.onProgressUpdate((res) =>{
      wx.showLoading({
        title: '上传进度：'+res.progress+'%',
        mask: true //是否显示透明蒙层，防止触摸穿透
      })
      console.log("上传进度",res.progress)
      console.log("已经上传的数据长度，单位 Bytes:",res.totalBytesSent)
      console.log("预期需要上传的数据总长度，单位 Bytes:",res.totalBytesExpectedToSend)
    })
  },
  //保存数据库
  
  
})






