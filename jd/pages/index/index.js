// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        img: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/54582/29/14880/336129/5dbc2cb7E91321e30/7025e77e15fddc4b.jpg!q70.jpg',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
      {
        img: 'https://img13.360buyimg.com/mobilecms/s270x270_jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg!q70.dpg.webp',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
      {
        img: 'https://img12.360buyimg.com/mobilecms/s270x270_jfs/t1/53199/11/14978/362605/5dbee898E4ccb7a03/2595b799fbb6ee19.jpg!q70.dpg.webp',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
      {
        img: 'https://img12.360buyimg.com/mobilecms/s270x270_jfs/t1/53199/11/14978/362605/5dbee898E4ccb7a03/2595b799fbb6ee19.jpg!q70.dpg.webp',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
      {
        img: 'https://img12.360buyimg.com/mobilecms/s270x270_jfs/t1/53199/11/14978/362605/5dbee898E4ccb7a03/2595b799fbb6ee19.jpg!q70.dpg.webp',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
      {
        img: 'https://img12.360buyimg.com/mobilecms/s270x270_jfs/t1/53199/11/14978/362605/5dbee898E4ccb7a03/2595b799fbb6ee19.jpg!q70.dpg.webp',
        img_11: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
        title: '【新品抢购】 Redmi 8A 5000mAh 骁龙八核....',
        money: '￥699.00',
        img_zy: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
        pj: '2万条评价',
        hpl: '好评率97%',
        dp: '小米京东自营旗舰店 >',
      },
    ],
    
    son : 'sonshow',
    topnum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  clicktop() {
    
    let topnum = this.data.topnum=0;
    this.setData({ topnum });
    console.log(this.data.topnum);
    
  },
  scroll(evt){
    // console.log(evt);
    let topnum = evt.detail.scrollTop;
    let son = "sonhide"
   if(  topnum >= 200){
      son = "sonshow"
   };
   this.setData({ son });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})