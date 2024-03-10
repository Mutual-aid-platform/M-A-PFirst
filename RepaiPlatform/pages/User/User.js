// pages/User/User.js

//初始图像
const defaultAvatarUrl ='http://m.qpic.cn/psc?/V12tgcxV1jCIIP/ruAMsa53pVQWN7FLK88i5jn3V7jBESipQdKOAen*iRORY7VXzn4HeipPj7JvHJsll3FXj4Te9MJ9NZ9J07KpjfPFAjxPEc76RaE5fgdXGY8!/b&bo=gACAAIAAgAADFzI!&rf=viewer_4'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,

  },


  // 获取用户图像
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },

// 获取用户昵称
formsubmit(e){
  const nickName = e.detail.value.nickname
  console.log("nickName", nickName)
  // do something
},



// login(){
//   wx.getUserProfile({ 
//     desc: '获取用户信息',
//     success: (res) =>{
//       console.log(res.userInfo)
//       this.setData({
//         nickName:res.userInfo.nickName,
//         userphoto : res.userInfo.avatarUrl
//       })
//     }
//   })
// },

  // changephoto(){
  //   wx.showActionSheet({
  //     itemList:['同步微信头像', '从手机上选择'] ,
  //     success: function(res){  
  //       console.log(res.tapIndex)  
  //   },  
  //   fail: function(res) {  
  //       console.log(res.errMsg)  
  //   }  
  //   })
  // },

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