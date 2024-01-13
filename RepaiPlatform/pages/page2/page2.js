// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     tabs:[
       {
         id: 0,
         value: "处理中",
         isActive: true
       },
       {
        id: 1,
        value: "已完成",
        isActive: false
      }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  handleTabsItemChange(e){
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

    this.setData({
      tabs
    })
  }
})