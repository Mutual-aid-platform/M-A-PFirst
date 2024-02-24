Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:['登陆', '设置', '计协', '关于' ],
    show:false
  },
// 跳转page1
  topage1(){
    wx.navigateTo({
      url: '/pages/page1/page1'
    })
  },
topage2(){
    wx.switchTab({
      url: '/pages/page2/page2'
    })
},
  // 点触菜单栏
  taplist(){
    this.setData({
      show: !this.data.show
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