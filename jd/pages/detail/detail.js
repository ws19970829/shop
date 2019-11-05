// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      money: '￥999.00',
      img_11: 'https://img30.360buyimg.com/jdphoto/jfs/t1/75776/31/13305/900/5da86d4bEcc4c90de/e1d7f9fd9583fa14.png',
      img_zy: 'https://img13.360buyimg.com/jdphoto/s48x28_jfs/t1/45124/16/1339/1092/5cf0a1ecE146f0776/df59d583faa7cfb9.png',
      desc: 'Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充  4GB+64GB 梦幻蓝 游戏手机 小米 红米',
      fuli: '【11月1-11日全程价保】小金刚品质保证，骁龙665处理器，标配18W充电器！【Note7定金预售券后价949。点击选购】 '
    },
    pl: [
      {
        touxiang: 'https://storage.360buyimg.com/i.imageUpload/323539333035303835392d38363437343231353537393033303430343137_sma.jpg', name: '你凶我', vip: 'PLVS', time: '2019-10-05', plun: '整体效果很好，颜色也还蛮漂亮。大屏幕，这对于刷剧非常好，尤其是音量够大，电池也很好，搭配快充，很方便。说说相机📷，很清晰很方便，也能够放大很多倍，有些细节也能看清楚。说说系统，操作很流畅，可能是新机的原因吧，操作很友好。', photo1: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58031/34/12494/219943/5d97ee4dEbe82b950/3642a3755205f4e9.jpg!cc_100x100!q70.dpg.webp', src: '颜色：梦幻蓝 型号：4GB+64GB', hf: '141'
      },
      {
        touxiang: 'https://storage.360buyimg.com/i.imageUpload/323539333035303835392d38363437343231353537393033303430343137_sma.jpg', name: '你凶我', vip: 'PLVS', time: '2019-10-05', plun: '整体效果很好，颜色也还蛮漂亮。大屏幕，这对于刷剧非常好，尤其是音量够大，电池也很好，搭配快充，很方便。说说相机📷，很清晰很方便，也能够放大很多倍，有些细节也能看清楚。说说系统，操作很流畅，可能是新机的原因吧，操作很友好。', photo1: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58031/34/12494/219943/5d97ee4dEbe82b950/3642a3755205f4e9.jpg!cc_100x100!q70.dpg.webp', src: '颜色：梦幻蓝 型号：4GB+64GB', hf: '141'
      },
      {
        touxiang: 'https://storage.360buyimg.com/i.imageUpload/323539333035303835392d38363437343231353537393033303430343137_sma.jpg', name: '你凶我', vip: 'PLVS', time: '2019-10-05', plun: '整体效果很好，颜色也还蛮漂亮。大屏幕，这对于刷剧非常好，尤其是音量够大，电池也很好，搭配快充，很方便。说说相机📷，很清晰很方便，也能够放大很多倍，有些细节也能看清楚。说说系统，操作很流畅，可能是新机的原因吧，操作很友好。', photo1: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58031/34/12494/219943/5d97ee4dEbe82b950/3642a3755205f4e9.jpg!cc_100x100!q70.dpg.webp', src: '颜色：梦幻蓝 型号：4GB+64GB', hf: '141'
      },
      {
        touxiang: 'https://storage.360buyimg.com/i.imageUpload/323539333035303835392d38363437343231353537393033303430343137_sma.jpg', name: '你凶我', vip: 'PLVS', time: '2019-10-05', plun: '整体效果很好，颜色也还蛮漂亮。大屏幕，这对于刷剧非常好，尤其是音量够大，电池也很好，搭配快充，很方便。说说相机📷，很清晰很方便，也能够放大很多倍，有些细节也能看清楚。说说系统，操作很流畅，可能是新机的原因吧，操作很友好。', photo1: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58031/34/12494/219943/5d97ee4dEbe82b950/3642a3755205f4e9.jpg!cc_100x100!q70.dpg.webp', src: '颜色：梦幻蓝 型号：4GB+64GB', hf: '141'
      },
      {
        touxiang: 'https://storage.360buyimg.com/i.imageUpload/323539333035303835392d38363437343231353537393033303430343137_sma.jpg', name: '你凶我', vip: 'PLVS', time: '2019-10-05', plun: '整体效果很好，颜色也还蛮漂亮。大屏幕，这对于刷剧非常好，尤其是音量够大，电池也很好，搭配快充，很方便。说说相机📷，很清晰很方便，也能够放大很多倍，有些细节也能看清楚。说说系统，操作很流畅，可能是新机的原因吧，操作很友好。', photo1: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58031/34/12494/219943/5d97ee4dEbe82b950/3642a3755205f4e9.jpg!cc_100x100!q70.dpg.webp', src: '颜色：梦幻蓝 型号：4GB+64GB', hf: '141'
      }
    ],
    topnum: 0,
    son: 'sonhide',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clicktop() {
    this.setData({
      topnum: 0
    })
  },
  scroll(evt) {
    let top = evt.detail.scrollTop;
    let son = 'sonhide';
    if (top >= 500) {
      son = 'sonshow';
    }
    this.setData({ son });
  },

  dopost(evt) {
    let obj = evt.detail.value;
   let arr = [];
   for (let i in obj){
     let o={};
     o[i]=obj[i];
     arr.push(o)
   }
    // console.log(arr);
    let plarr = this.data.pl;
    let newpl = plarr.concat(arr);
    // console.log(newpl);
    this.setData({
       pl:newpl,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: "恭喜你捡到一部手机",
      path: "pages/detail/detail"
    }
  }
})