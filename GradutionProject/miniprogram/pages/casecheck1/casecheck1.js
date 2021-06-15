var casedata = wx.getStorageSync('case')
var logindata = wx.getStorageSync('login')
Page({
  data: {
    user:{},
    casecheck:[],
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    status:'null',
    List:[{status:'null',time:'2021-01-02',person:'张一',num:'',name:'特大交通案件',type:'',
    area:'',content:''},
    {status:'true',time:'2021-01-02',person:'张二',num:'',name:'特大交通案件',type:'',
    area:'',content:''},
    {status:'false',time:'2021-01-02',person:'张三',num:'',name:'特大交通案件',type:'',
    area:'',content:''},
    {status:'null',time:'2021-01-02',person:'张三',num:'',name:'特大交通案件',type:'',
    area:'',content:''}]
  },
  onLoad: function() {

      var that = this;
      let user = wx.getStorageSync('user');
      that.setData({
        user: user
      })
      /**
       * 获取当前设备的宽高
       */
      wx.getSystemInfo( {

          success: function( res ) {
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: res.windowHeight
              });
          }

      });
      wx.request({
        url: 'http://localhost:3000/casecheck/showcasecheck',
        method:'POST',
        header:{
          "content-type":"application/x-www-form-urlencoded"
        },
        success: function(res) {
            if(res.statusCode === 200) {
                console.log(res.data);
                that.setData({
                    casecheck: res.data
                })
            }
        }
      })
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
        url: 'http://localhost:3000/casecheck/showcasecheck',
        method:'POST',
        header:{
          "content-type":"application/x-www-form-urlencoded"
        },
        success: function(res) {
            if(res.statusCode === 200) {
                that.setData({
                    casecheck: res.data
                })
            }
        }
      })
  },

  bindChange: function( e ) {

      var that = this;
      that.setData( { currentTab: e.detail.current });

  },
  checktap: function(e) {
    console.log(e.currentTarget.dataset.value)
    let casecheck = JSON.stringify(e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '../casecheckmore1/casecheckmore1?casecheck='+casecheck,
    })
  }
})