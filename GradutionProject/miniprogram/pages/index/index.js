
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    username:'',
    password:'',
    user:{},
    code:'',
    inputcode:''
  },
  huanyizhang(){
    this.createCode()
  },
  createCode() {
    let that = this;
    var code;
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    //设置随机字符
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    //循环codeLength 我设置的4就是循环4次
    for (var i = 0; i < codeLength; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 36);
      //字符串拼接 将每次随机的字符 进行拼接
      code += random[index];
    }
    code = code.toUpperCase();
    //将拼接好的字符串赋值给展示的code
    that.setData({
      code: code
    })
  },
  // 生命周期函数--监听页面显示
  onShow: function () {
    
  },
  onLoad: function () {
     //进入页面就调用方法 创建一个随机验证码
    this.createCode()
  },
  //获取验证码
  securitycodeInput: function(e) {
    let code = e.detail.value.toUpperCase();
    this.setData({
      inputcode: code
    })
  },

  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value //改变page中data中password的值
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value  //改变page中data中username的值
    })
  },
 
  // 登录处理
  login: function () {
    var that = this;
    if (that.data.username.length == 0 || that.data.password.length == 0) { // 检验账号密码是否为空
      wx.showToast({          //弹窗提醒
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        url: 'http://localhost:3000/user/showuser',
        method:'POST',
        header:{
          "content-type":"application/x-www-form-urlencoded"
        },
        success:function(res){
          console.log(res);
          let user = res.data;
          let count = 0;
          for(let i = 0;i < user.length;i++){
            if(that.data.username === user[i].username){
              if(that.data.password === user[i].password) {
                if(that.data.inputcode === that.data.code) {
                  that.setData({
                    user: user[i]
                  }),
                  console.log('登陆成功',that.data.user),
                  wx.setStorage({
                    data: that.data.user,
                    key: 'user',
                  }),
                  wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000 ,
                    success: function() {
                        setTimeout(function() {
                          //要延时执行的代码
                          wx.reLaunch({
                            url: '/pages/main/main',
                          })
                        }, 1000) //延迟时间                  
                    }
                  })  
                }
                else {
                  wx.showToast({
                    title: '验证码错误，请重新输入',
                    icon: 'none',
                    duration: 1000
                  })
                  that.createCode();
                }        
              }
              else{
                wx.showToast({
                  title: '密码错误',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
            else {
              count++;
            }  
          }
          if(count === user.length) {
            wx.showToast({
              title: '没有该用户',
              icon:'none',
              duration:2000
            })
          }
        },
        fail: function() {
          wx.showToast({
            title: '登陆失败,请检查网络',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  }
})