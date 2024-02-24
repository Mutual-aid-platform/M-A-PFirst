// pages/page1/page1.js
Page({

  onLoad:function(){
  },
  /**
   * 页面的初始数据
   */
  data: {

    information: null,
    maxLength:150,
    pickImage: 'http://s78qy413d.hn-bkt.clouddn.com/arrow-right.png',

    selectedIndex1: '',
    selectedIndex2: '',
    selectedIndex3: '2024-01-01',

    list1:[
      '笔记本'
    ],
 
    list2:[
      '加固态',
      '加内存条',
      '清灰',
      '其他问题'
    ]
  },

  change1(e){
    this.setData({
      selectedIndex1: e.detail.value
    });
  },
  change2(e){
    this.setData({
      selectedIndex2: e.detail.value
    });
  },
  change3(e){
    this.setData({
      selectedIndex3: e.detail.value
    });
  },
  butTTips(){
    var t = this;

    // if (t.data.selectedIndex1!=null){
    //
    // }
    wx.request({
      
      url: 'http://localhost:8080/mapInsert',
      method: 'Post',
      data:{ 
      id:'10122',
      name:'xkjxjk',
      wxName:'sjldkf',
      orderStyle:t.data.list1[t.data.selectedIndex1],
      orderQuest:t.data.list2[t.data.selectedIndex2],
      orderDetail: t.data.information,
      orderTime: t.data.selectedIndex3,
      orderDone:'0'
    },
      header: {
        "Content-Type": 'application/json' 
        },
      success:function(){
        t.onLoad();
        console.log("200");
        wx.showToast({
          title: '提交成功',
          duration: 1000
       })
      }
    })
    
  },

  tAreaName: function (e){
    this.setData({
      information: e.detail.value,
    })
    console.log(this.data.information)
  },
  tapChooseImage: function(){
   wx.chooseMedia({
     count: 1,
     mediaType:['image'],
     sourceType:['album', 'camera'],
     sizeType:['compressed'],
     camera:'back',
     success(res){
      const tempFilePaths = res.tempFilePaths;
     }
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})