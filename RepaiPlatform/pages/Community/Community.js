// pages/Community/Community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		query: {},
		index: 0,
		txtData: [],
		txt: '',
		List: [{
				dataList: ['笔记本电脑清灰的主要作用是防止灰尘堵塞进出气位置，影响散热，导致内部高温，温度过高就容易引发降频，影响性能，甚至可能导致黑屏、重启等故障，长期高温也影响电子元件的寿命。', '机械硬盘使用移动磁头在旋转盘片或磁盘上执行数据读取和写入操作，其优点是存储容量更大，价格更便宜。', '固态硬盘使用名为 NAND 的非易失性存储技术制造，无需通电来保留数据，其优点是读写速度更快，功耗更低，抗震性能更好。', '笔记本电脑更换硅脂的作用是帮助 CPU 和散热器之间的热量传递，从而提高散热效率，防止 CPU 过热，延长电脑的使用寿命。', '中央处理器 (CPU) 是电子计算机的核心部件之一，主要由控制器、运算器、高速缓存和总线等部分组成，它的功能主要是解释计算机指令以及处理计算机软件中的数据。','CPU 的内部结构可以分为控制单元、逻辑单元和存储单元三大部分，三个部分相互协调，便可以进行分析、判断、运算并控制计算机各部分协调工作。']
		}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
	this.setData({
		query: options
	})
	for (let index = 0; index < this.data.List.length; index++) {
		if (this.data.List[index].name == this.data.query.name) {
			this.setData({
				txtData: this.data.List[index].dataList
			})
		}
	}
	this.setData({
		txt: this.data.txtData[this.data.index]
	})
},
copyData: function () {
	wx.setClipboardData({
		data: this.data.txt,
		success: function (res) {
			wx.getClipboardData({
				success: function (res) {},
				fail: function (res) {
					wx.showToast({
						title: '复制失败',
					})
				}
			})
		}
	})
},
change() {
	if (this.data.index + 1 < this.data.txtData.length) {
		this.data.index++
	} else {
		this.data.index = 0
	}
	this.setData({
		txt: this.data.txtData[this.data.index]
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