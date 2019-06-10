<template>
  <list class="list">
    <template v-for="(item, index) in longList">
      <cell class="card-cell" v-if="item.type === 'card'" :key="index">
        <div class="card">
          <div style="height:60px;padding-left:30">
            <image class="card-banner" src="//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"></image>
          </div>
          <div class="row" style="padding-bottom:18px">
            <div class="card-side">
              <image class="card-poster" :src="item.poster"></image>
            </div>
            <div class="card-message">
              <text class="card-title">{{item.title}}</text>
              <div class="card-line row">
                <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
                <text class="card-subtitle">{{item.subtitle1}}</text>
              </div>
              <div class="card-line row">
                <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
                <text class="card-subtitle">{{item.subtitle2}}</text>
              </div>
              <div class="card-progress row">
                <div class="card-progress-inner" :style="{ width: item.progress * 230 / 100 }"></div>
                <text class="card-got">已抢 {{item.got}} 件</text>
                <text class="card-remain">{{item.progress}} %</text>
              </div>
              <div class="card-info row">
                <text class="card-price">¥ {{item.price.real}}</text>
                <text class="card-sale-price">¥ {{item.price.sale}}</text>
                <div class="card-btn">
                  <text class="card-btn-text">马上抢</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </cell>
    </template>
  </list>
</template>

<script>
const dataset = {
  card: [
    {
      type: 'card',
      poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
      title: '澳洲牛排10份装送刀叉酱料黄油',
      subtitle1: '送平底锅前3000仅78',
      subtitle2: '私厨经典 镇店套餐',
      got: 173,
      progress: 35,
      price: { real: 108, sale: 240.00 }
    }, {
      type: 'card',
      poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
      title: 'HUAWEI P10',
      subtitle1: '买赠好礼6期免息',
      subtitle2: '6期免息',
      got: 996,
      progress: 89,
      price: { real: 3488, sale: 3488.00 }
    }, {
      type: 'card',
      poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
      title: '海宁真皮皮衣男绵羊皮夹克外套',
      subtitle1: '店内领券下单438',
      subtitle2: '限送500双皮手套',
      got: 296,
      progress: 16,
      price: { real: 538, sale: 3080.00 }
    }, {
      type: 'card',
      poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
      title: '玛丽黛佳元气风动三色腮红正品',
      subtitle1: '满108领券立减10元',
      subtitle2: '宛若天生粉红好气色',
      got: 1457,
      progress: 61,
      price: { real: 49, sale: 69.80 }
    }, {
      type: 'card',
      poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
      title: '王小二高山脐橙，酸甜如初恋',
      subtitle1: '前3分钟半价',
      subtitle2: 'VC仓库，酸甜如初恋',
      got: 598,
      progress: 42,
      price: { real: 29.8, sale: 56.10 }
    }
  ]
}
// generate list data
function createListData (order) {
  var array = []
  var list = order.split(/[\s,]+/)
  for (var i = 0; i < list.length; ++i) {
    var candidates = dataset[list[i]]
    if (candidates) {
      var idx = Math.floor(Math.random() * candidates.length)
      array.push(candidates[idx])
    }
  }
  return array
}

export default {
  data () {
    const order = 'tab,banner,apps,apps,banner,card,floor,floor' +
       ',tab,apps,apps,banner,card,card,banner,floor,floor,floor' +
       ',tab,banner,card,apps,banner,card,floor,floor,floor,floor,floor' +
       ',tab,apps,banner,card,banner,floor,floor,floor' +
       ',tab,apps,apps,card,floor,card,banner,floor,floor' +
       ',tab,banner,card,apps,banner,card,floor,floor,floor,floor' +
       ',tab,apps,banner,card,card,apps,floor,floor,floor'
    return {
      longList: createListData(order)
    }
  }
}
</script>

<style scoped>
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
  .row {
    flex-direction: row;
  }

  .tab-cell {
    justify-content: stretch;
    background-color: #f51438;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .tab-icon {
    width: 45px;
    height: 45px;
  }
  .tab-title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }

  .banner-image {
    width: 750px;
    height: 235px;
  }

  .app-cell { background-color: #FFF; }
  .app-box {
    width: 180px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .app-title {
    width: 180px;
    font-size: 30px;
    text-align: center;
    padding-top: 15px;
    color: #999999;
  }
  .app-icon {
    width: 140px;
    height: 140px;
    margin-left: 20px;
  }

  .card {
    width: 710px;
    margin: 20px;
    background-color: #FFFFFF;
    border-radius: 15px;
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 230px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    font-size: 26px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 28px;
    color: #07152a;
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff5d62;
    border-radius: 8px;
    width: 125px;
    height: 52px;
    justify-content: center;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
  }

  .floor {
    margin-bottom: 15px;
    background-color: #FFF;
  }
  .floor-title {
    font-size: 40px;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 25px;
  }
  .floor-desc {
    lines: 2;
    color: #999;
    font-size: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .floor-image-box {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .floor-image {
    width: 245px;
    height: 245px;
  }
  .floor-comment {
    color: #52bfe6;
    font-size: 32px;
    text-align: right;
    padding-right: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
</style>
