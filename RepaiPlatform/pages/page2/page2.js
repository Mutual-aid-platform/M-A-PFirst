// pages/page2/page2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showProject:true,
    orderTime:'',
    orderQuest:'',
    orderStyle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  
  butCheck: function(){
    var that =this;
    wx.request({
      url: 'http://localhost:8080/mapSelect',
      method: 'GET',
      header: {
        "Content-Type": 'application/json' 
        },

        success:function(res){
          console.log(res.data);
          var allDate = res.data.data[0];
          var oQ = allDate.orderQuest;
          var oT = allDate.orderTime;
          var oS = allDate.orderStyle;
          console.log(allDate);
          if (res.data.length != 0) {
          that.setData({
            orderQuest:oQ,
            orderTime:oT,
            orderStyle:oS,
            showProject: !that.data.showProject,
          })
        }
        }
    })
  },

  deleteButton:function(){
    var that =this;
    that.setData({
      showProject: !that.data.showProject,
    })
  }

})