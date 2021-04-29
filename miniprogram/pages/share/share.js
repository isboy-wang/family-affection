// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


},
record_interface: function (){
  wx.navigateTo({
    url: '../record/record',
  })
},
photograph: function (){
  wx.navigateTo({
    url: '../photograph/photograph',
  })
}
})