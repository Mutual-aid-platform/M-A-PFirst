// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex1: '',
    selectedIndex2: '',
    selectedIndex3: '',

    list1:[
      '笔记本'
    ],
 
    list2:[
      '屏幕',
      '键盘',
      '硬件'
    ],
    list3:[
      '加固态',
      '加内存条',
      '清灰'
    ],
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
    
    wx.request({
      url: 'http://localhost:8080/mapInsert',
      method: 'Post',
      data:{ 
      id:'10122',
      name:'xkjxjk',
      wxName:'sjldkf',
      orderDetail: t.data.list3[t.data.selectedIndex3],
      orderTime:'2002-10-03',
      orderDone:'1'
    },
      header: {
        "Content-Type": 'application/json' 
        },
      success:function(){
        console.log("200");
      }
    });
    wx.showToast({
       title: '提交成功',
       duration: 1000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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