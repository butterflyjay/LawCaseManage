var wxCharts = require('../../utils/wxcharts.js');
var windowWidth = 320;
var pieChart = null;
var radarChart = null;
Page({
    data: {
      series1:[{name:'职务侵占案件',data:0},{name:'挪用资金案件',data:0},{name:'人员受贿案件',data:0},{name:'财务造假案件',data:0},{name:'侵犯商业秘密案件',data:0}],
      // series2:[{name:'成都',data:0},{name:'绵阳',data:0},{name:'遂宁',data:0},{name:'德阳',data:0},{name:'内江',data:0},{name:'眉山',data:0},{name:'自贡',data:0}],
      count2:[],
      categories:['销售部', '技术部', '采购部', '生产部','财务部','设备部','人事部']
    },
    touchHandler: function (e) {
        console.log(pieChart.getCurrentDataIndex(e));
    },        
    onLoad: function (e) {
        let that = this;
        try {
                var res = wx.getSystemInfoSync();
                windowWidth = res.windowWidth;
            } catch (e) {
                console.error('getSystemInfoSync failed!');
          }
        wx.request({
          url: 'http://localhost:3000/visual/showvisual',
          method:'POST',
          header:{
            "content-type":"application/x-www-form-urlencoded"
          },
          success:function(res) {
            console.log(res.data)
            let count1 = [0,0,0,0,0];
            let count2 = [0,0,0,0,0,0,0];
            if(res.statusCode === 200) {
              let list = res.data;
              for(let i = 0; i < list.length;i++) {
                if(list[i].type ==='职务侵占案件') {
                  count1[0]++;
                } else if(list[i].type==='挪用资金案件') {
                  count1[1]++;
                } else if(list[i].type==='人员受贿案件') {
                  count1[2]++;
                } else if(list[i].type==='财务造假案件') {
                  count1[3]++;
                } else if(list[i].type==='侵犯商业秘密案件') {
                  count1[4]++;
                }
              }
              for(let j = 0;j < list.length;j++) {
                if(list[j].area ==='销售部') {
                  count2[0]++;
                } else if(list[j].area==='技术部') {
                  count2[1]++;
                } else if(list[j].area==='采购部') {
                  count2[2]++;
                } else if(list[j].area==='生产部') {
                  count2[3]++;
                } else if(list[j].area==='财务部') {
                  count2[4]++;
                } else if(list[j].area ==='设备部') {
                  count2[5]++;
                } else if(list[j].area==='人事部') {
                  count2[6]++;
                } 
              }
              that.setData({
                'series1[0].data':count1[0],
                'series1[1].data':count1[1],
                'series1[2].data':count1[2],
                'series1[3].data':count1[3],
                'series1[4].data':count1[4],
                count2:count2
              })
              console.log(that.data.count2)
              pieChart = new wxCharts({
                animation: true,
                canvasId: 'pieCanvas',
                type: 'pie',
                series: that.data.series1,
                width: windowWidth,
                height: 250,
                dataLabel: true,
              });
              radarChart = new wxCharts({
                canvasId: 'radarCanvas',
                 type: 'radar',
                 categories: ['销售部', '技术部', '采购部', '生产部','财务部','设备部','人事部'],
                 series: [{
                     name: '案件数',
                     data: that.data.count2
                 }],
                 width: windowWidth,
                 height: 250,
                 extra: {
                     radar: {
                         max: 5
                     }
                 }
             });
            }  
          }
      })
    }
})